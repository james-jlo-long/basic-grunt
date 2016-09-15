module.exports = function () {

    var setup = require("../Gruntsetup.js").uglify;

    return {

        scripts: {
            files: setup.files
        }

    };

};
