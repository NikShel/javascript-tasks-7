'use strict';

function isObject(smth) {
    return Object.getPrototypeOf(smth) === Object.prototype;
}

function isString(smth) {
    return Object.getPrototypeOf(smth) === String.prototype;
}

function isArray(smth) {
    return Object.getPrototypeOf(smth) === Array.prototype;
}

function isFunction(smth) {
    return Object.getPrototypeOf(smth) === Function.prototype;
}

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (!isObject(this) && !isArray(this)) {
            return;
        }
        var currentKeys = Object.keys(this);
        return !keys.some(function (key) {
            return currentKeys.indexOf(key) < 0;
        });
    };

    Object.prototype.checkHasKeys = function (keys) {
        if (!isObject(this) && !isArray(this)) {
            return;
        }
        var currentKeys = Object.keys(this);
        return (this.checkContainsKeys(keys) && currentKeys.length === keys.length);
    };

    Object.prototype.checkContainsValues = function (values) {
        if (!isObject(this) && !isArray(this)) {
            return;
        }
        var currentKeys = Object.keys(this);
        var currentValues = [];
        for (var i = 0; i < currentKeys.length; i++) {
            var value = this[currentKeys[i]];
            if (currentValues.indexOf(value) < 0) {
                currentValues.push(value);
            }
        }

        for (i = 0; i < values.length; i++) {
            if (currentValues.indexOf(values[i]) < 0) {
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkHasValues = function (values) {
        if (!isObject(this) && !isArray(this)) {
            return;
        }
        var currentKeys = Object.keys(this);
        var currentValues = [];
        for (var i = 0; i < currentKeys.length; i++) {
            var value = this[currentKeys[i]];
            if (currentValues.indexOf(value) < 0) {
                currentValues.push(value);
            }
        }

        return (this.checkContainsValues(values) && currentValues.length === values.length);
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (!isObject(this) && !isArray(this)) {
            return;
        }
        return typeof this[key] === typeof type.call();
    };

    Object.prototype.checkHasLength = function (length) {
        if (!isArray(this) && !isString(this)) {
            return;
        }
        return this.length === length;
    };

    Function.prototype.checkHasParamsCount = function (count) {
        if (!isFunction(this)) {
            return;
        }
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        if (!isString(this)) {
            return;
        }
        return this.split(' ').length === count;
    };
};
