/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const tsconfig = require("../tsconfig.json");

const ALIAS = Object.entries(tsconfig.compilerOptions.paths).map(
  ([parent, [dir]]) => [parent.replace(/\/\*$/, ""), dir.replace(/\/\*$/, "")]
);

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "プロジェクトの都合上、API のコードで型以外の import でエイリアスが使えないので、その対策。",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const filename = context.getFilename();
        const sourceDir = path.dirname(filename);
        ALIAS.forEach(([key, dir]) => {
          const keyword = `${key}/`;
          if (
            !/\.test\.(ts|tsx)$/.test(filename) &&
            node.source.value.startsWith(keyword) &&
            node.importKind !== "type"
          ) {
            context.report({
              node,
              message: `"${keyword}" から始まるインポートは API の仕組み上コンパイルできません。相対パスを使用してください。`,
              fix(fixer) {
                const fullPath = path.join(
                  context.getCwd(),
                  dir,
                  node.source.value.slice(key.length)
                );
                const relativePath = path.relative(sourceDir, fullPath);
                const normalizedPath = relativePath.split(path.sep).join("/");
                return fixer.replaceText(node.source, `"${normalizedPath}"`);
              },
            });
          }
        });
      },
    };
  },
};
