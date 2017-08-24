module.exports = {
    "extends": "airbnb",
    "rules": {
        // enable additional rules
        "prefer-arrow-callback": 0,
        "func-names": 0,
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "no-console": "off",
        "import/no-extraneous-dependencies": [2, {  }]
    }
};