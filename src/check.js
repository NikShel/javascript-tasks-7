'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (Array.isArray(this) && typeof this !== 'object') {
            return null;
        }

        var currentKeys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            if (currentKeys.indexOf(keys[i]) < 0) {
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkHasKeys = function (keys) {
        if (!Array.isArray(this) && typeof this !== 'object') {
            return null;
        }

        var currentKeys = Object.keys(this);
        return (this.checkContainsKeys(keys) && currentKeys.length === keys.length);
    };

    Object.prototype.checkContainsValues = function (values) {
        if (!Array.isArray(this) && typeof this !== 'object') {
            return null;
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
        if (!Array.isArray(this) && typeof this !== 'object') {
            return null;
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
        if (!Array.isArray(this) && typeof this !== 'object') {
            return null;
        }

        return typeof this[key] === typeof type.call();
    };

    Object.prototype.checkHasLength = function (length) {
        if (!Array.isArray(this) && typeof this !== 'string') {
            return null;
        }

        return this.length === length;
    };

    Object.prototype.checkHasParamsCount = function (count) {
        if (typeof this !== 'function') {
            return null;
        }

        return this.length === count;
    };

    Object.prototype.checkHasWordsCount = function (count) {
        if (typeof this !== 'string') {
            return null;
        }

        return this.split(' ').length === count;
    };


};
