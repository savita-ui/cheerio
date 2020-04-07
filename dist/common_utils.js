"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("./constants"));
var fs = require('fs');
;
var CommonUtils = {
    convertImagestoBase64: function ($) {
        var imagesArr = $('body img'), base64 = constants_1.default.base64, imageBase64Prefix = constants_1.default.imageBase64Prefix;
        imagesArr.each(function (i, image) {
            var imageEl = $(image), path = "../content/" + unescape(imageEl.attr('src')), src = imageBase64Prefix + fs.readFileSync(path).toString(base64);
            imageEl.attr('src', src);
        });
    },
    updateLinks: function (linkInfo) {
        var $ = linkInfo.$, links = $('body a');
        links.each(function (i, link) {
            var linkEl = $(link);
            linkEl.attr('href', linkInfo.url);
            linkEl.text(linkInfo.name);
        });
    }
};
exports.default = CommonUtils;
