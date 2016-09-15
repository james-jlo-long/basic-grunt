module.exports = function () {

    var setup = require("../Gruntsetup.js").watch;

    return {

        production: {
            files: setup.files,
            tasks: ["update"]
        },

        scripts: {
            files: setup.scripts,
            tasks: ["scripts"]
        }

    };

};
