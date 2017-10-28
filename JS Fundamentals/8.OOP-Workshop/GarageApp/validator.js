var Validator = (function () {
    'use strict';

    class Validator {
        constructor(objectName) {
            this._objectName = objectName;
        }

        validateLength(value, min, max, name, type = "string") {
            if (type === 'string') {
                if (value.length < min || value.length > max) {
                    throw new RangeError(`Invalid ${this._objectName}'s ${name}: ${value}; ${name}'s length should be in range [${min} - ${max}]`);
                }
            } else if (type === 'number') {
                if (value < min || value > max) {
                    throw new RangeError(`Invalid ${this._objectName}'s ${name}: ${value}; ${name} should be in range [${min} - ${max}]`);
                }
            } else {
                throw new Error('Invalid use of "validateLength()"');
            }
        }

        validateExactLength(value, length, name) {
            if (value.length !== length) {
                throw new Error(`Invalid ${this._objectName}'s ${name}: ${value}; ${name}'s length should be exactly: ${length}`);
            }
        }

        validateType(value, requiredType, name) {
            if ((typeof (value)).toLowerCase() !== requiredType.toLowerCase()) {
                throw new TypeError(`Invalid type of ${name}. Required type is ${requiredType}`)
            }
        }

        validateNumberRange(value, min, max, name) {
            if (value < min || value > max) {
                throw new RangeError(`Invalid ${this._objectName}'s ${name}: ${value}; ${name}'s should be in range [${min} - ${max}]`);
            }
        }

        validateIfCollectionContains(value, collection) {
            if (collection.indexOf(value.toLowerCase()) < 0) {
                throw new Error(`${value} was not contained in ${collection.join('|')}`);
            }
        }
    }

    return Validator;
}());