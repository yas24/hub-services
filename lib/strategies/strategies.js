
var File = import("./file/file.js");
var Math= import("./math/math.js");
var Validator = import("./validator/validator.js");
var Request = import("./requests/request.js");
//hmm..

module.exports = {
    fileStrategy: File,
    mathStrategy: Math,
    validatorStrategy: Validator,
    requestStrategy: Request
}
