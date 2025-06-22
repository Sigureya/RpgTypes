import type { Rule } from "eslint";
import type { TSESTree } from "@typescript-eslint/utils";

function isExportedFunction(
  node: TSESTree.Node | null | undefined
): node is TSESTree.VariableDeclaration {
  return (
    !!node &&
    node.type === "VariableDeclaration" &&
    node.declarations.length === 1 &&
    !!node.declarations[0].init &&
    (node.declarations[0].init.type === "ArrowFunctionExpression" ||
      node.declarations[0].init.type === "FunctionExpression")
  );
}

function isExportedTypeOrInterface(
  node: TSESTree.Node | null | undefined
): node is TSESTree.TSInterfaceDeclaration | TSESTree.TSTypeAliasDeclaration {
  return (
    !!node &&
    (node.type === "TSInterfaceDeclaration" ||
      node.type === "TSTypeAliasDeclaration")
  );
}

const exportPaddingRule: Rule.RuleModule = {
  meta: {
    type: "layout",
    docs: {
      description:
        "Require blank line before exported functions and types, but not before exported constants or export *",
    },
    fixable: "whitespace",
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      ExportNamedDeclaration(node: TSESTree.ExportNamedDeclaration) {
        // export interface/type
        if (isExportedTypeOrInterface(node.declaration)) {
          const before = sourceCode.getTokenBefore(node);
          if (before && before.loc.end.line === node.loc.start.line - 1) {
            context.report({
              node,
              message: "Expected blank line before exported type/interface.",
              fix(fixer) {
                return fixer.insertTextBefore(node, "\n");
              },
            });
          }
        }
        // export const/let/var 関数
        if (node.declaration && isExportedFunction(node.declaration)) {
          const before = sourceCode.getTokenBefore(node);
          if (before && before.loc.end.line === node.loc.start.line - 1) {
            context.report({
              node,
              message: "Expected blank line before exported function.",
              fix(fixer) {
                return fixer.insertTextBefore(node, "\n");
              },
            });
          }
        }
      },
    };
  },
};

export default {
  rules: {
    "export-padding": exportPaddingRule,
  },
};
