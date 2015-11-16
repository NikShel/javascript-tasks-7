'use strict';

exports.init = function () {
    var checkContainsKeys = function (keys) {
        var currentKeys = Object.keys(this);
        for (var i = 0; i < keys.length; i++) {
            if (currentKeys.indexOf(keys[i]) < 0) {
                return false;
            }
        }
        return true;
    };

    Array.prototype.checkContainsKeys = checkContainsKeys;
    Object.prototype.checkContainsKeys = checkContainsKeys;

    var checkHasKeys = function (keys) {
        var currentKeys = Object.keys(this);
        return (this.checkContainsKeys(keys) && currentKeys.length === keys.length);
    };

    Array.prototype.checkHasKeys = checkHasKeys;
    Object.prototype.checkHasKeys = checkHasKeys;

    var checkContainsValues = function (values) {
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

    Array.prototype.checkContainsValues = checkContainsValues;
    Object.prototype.checkContainsValues = checkContainsValues;

    var checkHasValues = function (values) {
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

    Object.prototype.checkHasValues = checkHasValues;
    Array.prototype.checkHasValues = checkHasValues;

    var checkHasValueType = function (key, type) {
        return typeof this[key] === typeof type.call();
    };

    Object.prototype.checkHasValueType = checkHasValueType;
    Array.prototype.checkHasValueType = checkHasValueType;

    var checkHasLength = function (length) {
        return this.length === length;
    };

    Array.prototype.checkHasLength = checkHasLength;
    Object.prototype.checkHasLength = checkHasLength;

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };


};
