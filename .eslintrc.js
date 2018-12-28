module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "no-shadow":0,
        "react/no-danger": "off",
    },
    "plugins": [
        "react", "import","react-redux",
    ],
    "parser": "babel-eslint",

};
