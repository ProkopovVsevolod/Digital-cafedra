"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var decorators_1 = require("./decorators");
var Transport;
(function (Transport) {
    var Car = function () {
        var _classDecorators = [decorators_1.sealed];
        var _classDescriptor;
        var _classExtraInitializers = [];
        var _classThis;
        var _instanceExtraInitializers = [];
        var _printInUpperCase_decorators;
        var Car = _classThis = /** @class */ (function () {
            function Car_1(carBody, carClass, company, model, year, vin, regNum) {
                this.company = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.carBody = carBody,
                    this.carClass = carClass,
                    this.company = company,
                    this.model = model,
                    this.year = year,
                    this.vin = vin,
                    this.regNum = regNum;
            }
            Car_1.prototype.printInUpperCase = function () {
                return "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ".concat(this.company, " \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, "\n            \u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430: ").concat(this.year, "  VIN: ").concat(this.vin, "\n            \u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ").concat(this.year, "  \u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.vin, "\n            \u041D\u043E\u043C\u0435\u0440: ").concat(this.regNum);
            };
            return Car_1;
        }());
        __setFunctionName(_classThis, "Car");
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _printInUpperCase_decorators = [decorators_1.upperString];
            __esDecorate(_classThis, null, _printInUpperCase_decorators, { kind: "method", name: "printInUpperCase", static: false, private: false, access: { has: function (obj) { return "printInUpperCase" in obj; }, get: function (obj) { return obj.printInUpperCase; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Car = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        })();
        return Car = _classThis;
    }();
    Transport.Car = Car;
})(Transport || (exports.Transport = Transport = {}));
