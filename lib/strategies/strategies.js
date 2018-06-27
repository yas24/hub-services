
var File = require("./file/file.js");
var Math= require("./math/math.js");
var Validator = require("./validator/validator.js");
var Request = require("./requests/request.js");
//hmm..

module.exports = {
    fileStrategy: File,
    mathStrategy: Math,
    validatorStrategy: Validator,
    requestStrategy: Request
}
