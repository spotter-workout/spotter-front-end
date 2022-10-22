module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: "standard-with-typescript",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        quotes: "off",
        indent: "off",
        semi: "off",
        "comma-dangle": ["warn", "never"],
        "max-len": ["error", 140]
    }
};
