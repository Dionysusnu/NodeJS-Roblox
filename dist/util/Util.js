(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        /**
     * Gets all items in a pages API
     * @param url The url with pages
     * @param objectType The class to instantiate
     * @param constructorParent The object to use for the constructor, or an object with a client property
     */
        getPages: require('./getPages').default,
    };
});
