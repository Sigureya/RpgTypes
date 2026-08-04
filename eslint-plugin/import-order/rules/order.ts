import { Rule } from "eslint";
import {
  ImportDeclaration,
  ExportNamedDeclaration,
  ExportAllDeclaration,
  Node,
} from "estree";

type Options = [
  {
    order?: "asc" | "desc";
    priority?: string[];
  },
];

type ImportOrExport =
  | ImportDeclaration
  | ExportNamedDeclaration
  | ExportAllDeclaration;

const DEFAULT_OPTIONS = {
  order: "asc" as const,
  priority: [] as string[],
};

function isImport(node: ImportOrExport): node is ImportDeclaration {
  return node.type === "ImportDeclaration";
}

function isExport(
  node: ImportOrExport,
): node is ExportNamedDeclaration | ExportAllDeclaration {
  return (
    node.type === "ExportNamedDeclaration" ||
    node.type === "ExportAllDeclaration"
  );
}

function collectImportOrExportNodes(node: Node): ImportOrExport[] {
  if (node.type !== "Program") {
    return [];
  }

  return node.body.filter(
    (statement): statement is ImportOrExport =>
      statement.type === "ImportDeclaration" ||
      statement.type === "ExportNamedDeclaration" ||
      statement.type === "ExportAllDeclaration",
  );
}

function getSortKey(node: ImportOrExport, priority: string[]): string {
  const source = getSourceName(node);
  const priorityIndex = priority.findIndex((name) => source.includes(name));

  if (priorityIndex >= 0) {
    return `0:${source}`;
  }

  return `1:${source}`;
}

function getSourceName(node: ImportOrExport): string {
  if (isImport(node) && node.source.type === "Literal") {
    return String(node.source.value);
  }

  if (isExport(node) && node.source?.type === "Literal") {
    return String(node.source.value);
  }

  return "";
}

function compareNodes(
  left: ImportOrExport,
  right: ImportOrExport,
  options: {
    order: "asc" | "desc";
    priority: string[];
  },
): number {
  const leftKey = getSortKey(left, options.priority);
  const rightKey = getSortKey(right, options.priority);

  if (leftKey !== rightKey) {
    return leftKey.localeCompare(rightKey);
  }

  const leftSource = getSourceName(left);
  const rightSource = getSourceName(right);
  const direction = options.order === "desc" ? -1 : 1;

  return leftSource.localeCompare(rightSource) * direction;
}

export const orderRule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          order: {
            enum: ["asc", "desc"],
          },
          priority: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      incorrectOrder: "Import/export statements are not in the expected order.",
    },
  },

  create(context) {
    const sourceCode = context.sourceCode;
    const options = {
      ...DEFAULT_OPTIONS,
      ...(context.options[0] ?? {}),
    };

    return {
      Program(node) {
        const statements = collectImportOrExportNodes(node);
        const sortedStatements = [...statements].sort((left, right) =>
          compareNodes(left, right, options),
        );

        if (
          statements.every(
            (statement, index) => statement === sortedStatements[index],
          )
        ) {
          return;
        }

        context.report({
          node,
          messageId: "incorrectOrder",
          fix: (fixer) => {
            const text = sourceCode.text;
            const first = statements[0];
            const last = statements[statements.length - 1];

            if (!first || !last || first.range == null || last.range == null) {
              return null;
            }

            const start = first.range[0];
            const end = last.range[1];
            const sortedText = sortedStatements
              .map((statement) => sourceCode.getText(statement))
              .join("\n");

            return fixer.replaceTextRange([start, end], sortedText);
          },
        });
      },
    };
  },
};
