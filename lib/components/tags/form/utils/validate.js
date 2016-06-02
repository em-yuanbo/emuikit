"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function required(message) {
  return function (value) {
    if (value) {
      return { validate: true };
    }
    return { validate: false, message: message };
  };
}
function maxlength(length, message) {
  return function (value) {
    if (value.length <= length) {
      return { validate: true };
    }
    return { validate: false, message: message };
  };
}
function range(min, max, message) {
  return function (value) {
    if (value.length >= min && value.length <= max) {
      return { validate: true };
    }
    return { validate: false, message: message };
  };
}
function isEmail(value) {
  return false;
}
function email(message) {
  return function (value) {
    if (isEmail(value)) {
      return { validate: true };
    }
    return { validate: false, message: message };
  };
}
var validation = { required: required, maxlength: maxlength, range: range, email: email };
exports.validation = validation;