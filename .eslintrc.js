module.exports = {
    'extends': 'airbnb',
    'rules': {
        'react/jsx-filename-extension': [1, {'extensions': [`.js`, '.jsx']}],
        'react/destructuring-assignment': [true, { 'extensions': [".jsx"] }],
        'max-len': ["error", { "code": 150 }],
        'no-mixed-spaces-and-tabs': 'off',
        'react/jsx-no-bind': 0,
        'no-tabs':0,
        'react/prop-types':0,
        "linebreak-style": 0

    },
    "env": {
        "browser": true,
        "node": true,
        "es6":true
    },
    "parser":"babel-eslint"
}
