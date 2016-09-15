module.exports = function () {

    var setup = require("../Gruntsetup.js").concat;

    return {

        scripts: {
            src: setup.src,
            dest: setup.dest
        }

    };

};
