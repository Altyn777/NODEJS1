module.exports = function (module) {
    return function (/*kkkk*/) {
        args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};