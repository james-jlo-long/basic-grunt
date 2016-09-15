module.exports = {

    default: [
        "concurrent:prod"
    ],

    scripts: [
        "concat",
        "uglify"
    ],

    update: [
        "less",
        "postcss"
    ]

};
