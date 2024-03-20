"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperString = exports.sealed = void 0;
function sealed(constructor, proto) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
exports.sealed = sealed;
function upperString(target, propertyKey, descriptor) {
    var originalFunction = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return originalFunction.apply(this, args).toUpperCase();
    };
}
exports.upperString = upperString;
