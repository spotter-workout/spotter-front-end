module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: "standard-with-typescript",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json"
    },
    rules: {
        semi: "off",
        "@typescript-eslint/semi": "off",
        quotes: "off",
        "@typescript-eslint/quotes": "off",
        indent: "off",
        "@typescript-eslint/indent": "off",
        "comma-dangle": ["warn", "never"],
        "max-len": ["error", 140],
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off"
    }
};
