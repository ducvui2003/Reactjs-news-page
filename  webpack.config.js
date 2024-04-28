// webpack.config.js

const path = require('path');

module.exports = {
    // other webpack configurations...
    resolve: {
        fallback: {
            "http":false,
        }
    }
};
