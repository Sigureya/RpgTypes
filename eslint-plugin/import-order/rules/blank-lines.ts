import { Rule, SourceCode } from "eslint";
import {
  ImportDeclaration,
  ExportNamedDeclaration,
  ExportAllDeclaration,
} from "estree";

type Options = [
  {
    importImport?: number;
    importExport?: number;
    exportExport?: number;
  },
];

type ImportOrExport =
  | ImportDeclaration
  | ExportNamedDeclaration
  | ExportAllDeclaration;

const DEFAULT_OPTIONS = {
  importImport: 0,
  importExport: 1,
  exportExport: 0,
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

function getExpectedBlankLines(
  current: ImportOrExport,
  next: ImportOrExport,
  options: {
    importImport: number;
    importExport: number;
    exportExport: number;
  },
): number | null {
  if (isImport(current) && isImport(next)) {
    return options.importImport;
  }

  if (isImport(current) && isExport(next)) {
    return options.importExport;
  }

  if (isExport(current) && isExport(next)) {
    return options.exportExport;
  }

  return null;
}

function getActualBlankLines(
  current: ImportOrExport,
  next: ImportOrExport,
  sourceCode: Readonly<SourceCode>,
): number | null {
  const currentLast = sourceCode.getLastToken(current);
  const nextFirst = sourceCode.getFirstToken(next);

  if (!currentLast || !nextFirst) {
    return null;
  }

  return nextFirst.loc.start.line - currentLast.loc.end.line - 1;
}

function getTextBetweenNodes(
  current: ImportOrExport,
  next: ImportOrExport,
  sourceCode: Readonly<SourceCode>,
): string | null {
  if (current.range == null || next.range == null) {
    return null;
  }

  return sourceCode.text.slice(current.range[1], next.range[0]);
}

export const blankLinesRule: Rule.RuleModule = {
  meta: {
    type: "layout",
    fixable: "whitespace",
    schema: [
      {
        type: "object",
        properties: {
          importImport: {
            type: "integer",
            minimum: 0,
          },
          importExport: {
            type: "integer",
            minimum: 0,
          },
          exportExport: {
            type: "integer",
            minimum: 0,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      incorrect: "Expected {{expected}} blank line(s), found {{actual}}.",
    },
  },

  create(context) {
    const sourceCode = context.sourceCode;
    const options = {
      ...DEFAULT_OPTIONS,
      ...(context.options[0] ?? {}),
    };
    const lineBreak = sourceCode.text.includes("\r\n") ? "\r\n" : "\n";

    return {
      Program(node) {
        const statements = node.body.filter(
          (statement): statement is ImportOrExport =>
            statement.type === "ImportDeclaration" ||
            statement.type === "ExportNamedDeclaration" ||
            statement.type === "ExportAllDeclaration",
        );

        for (let i = 0; i < statements.length - 1; i++) {
          const current = statements[i];
          const next = statements[i + 1];
          const expectedBlankLines = getExpectedBlankLines(
            current,
            next,
            options,
          );

          if (expectedBlankLines === null) {
            continue;
          }

          const actualBlankLines = getActualBlankLines(
            current,
            next,
            sourceCode,
          );

          if (
            actualBlankLines === null ||
            actualBlankLines === expectedBlankLines
          ) {
            continue;
          }

          const textBetween = getTextBetweenNodes(current, next, sourceCode);
          const hasOnlyWhitespace =
            textBetween != null && /^[\t\r\n ]*$/.test(textBetween);

          if (!hasOnlyWhitespace) {
            context.report({
              node: next,
              messageId: "incorrect",
              data: {
                expected: expectedBlankLines,
                actual: actualBlankLines,
              },
            });
            continue;
          }

          const replacementRange: [number, number] | null =
            current.range != null && next.range != null
              ? [current.range[1], next.range[0]]
              : null;

          if (replacementRange == null) {
            context.report({
              node: next,
              messageId: "incorrect",
              data: {
                expected: expectedBlankLines,
                actual: actualBlankLines,
              },
            });
            continue;
          }

          context.report({
            node: next,
            messageId: "incorrect",
            data: {
              expected: expectedBlankLines,
              actual: actualBlankLines,
            },
            fix: (fixer) =>
              fixer.replaceTextRange(
                replacementRange,
                lineBreak.repeat(expectedBlankLines + 1),
              ),
          });
        }
      },
    };
  },
};
