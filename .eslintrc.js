module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/no-unresolved': 'off', // add
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
};
