module.exports = function () {

    var setup = require("../Gruntsetup.js").concurrent;

    return {

        options: setup.options,
        prod: setup.prod

    };

};
