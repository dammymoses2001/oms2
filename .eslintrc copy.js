module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    globals: {},
    extends: ["prettier", "prettier/react"],
    extends: ["prettier", "prettier/react"],
    plugins: ["prettier"],
    parser: "react-scripts/node_modules/babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "import", "react-hooks"],
    ignorePatterns: ["node_modules/"],
    rules: {},
    settings: {
        react: {
            version: "latest" // "detect" automatically picks the version you have installed.
        }
    }
};
