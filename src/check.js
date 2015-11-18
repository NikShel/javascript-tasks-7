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

    Object.prototype.checkContainsKeys = checkContainsKeys;

    var checkHasKeys = function (keys) {
        var currentKeys = Object.keys(this);
        return (this.checkContainsKeys(keys) && currentKeys.length === keys.length);
    };

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

    var checkHasValueType = function (key, type) {
        return typeof this[key] === typeof type.call();
    };

    Object.prototype.checkHasValueType = checkHasValueType;

    var checkHasLength = function (length) {
        return this.length === length;
    };

    Object.prototype.checkHasLength = checkHasLength;

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };


};
