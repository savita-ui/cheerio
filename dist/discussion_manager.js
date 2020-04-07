"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var latest_discussion_fetcher_1 = require("./latest_discussion_fetcher");
var common_utils_1 = __importDefault(require("./common_utils"));
var constants_1 = __importDefault(require("./constants"));
var config_1 = __importDefault(require("./config"));
var fs = require('fs'), cheerio = require('cheerio');
;
;
exports.processLatestDiscussion = function (fileInfo) {
    var data = getFileData(fileInfo.inputFilePath), $ = cheerio.load(data), latestReplyContent = latest_discussion_fetcher_1.getLatestDiscussion($);
    if (latestReplyContent.length == 0) {
        console.log("No match Found..");
        return;
    }
    updateBodyContent($, latestReplyContent);
    common_utils_1.default.convertImagestoBase64($);
    var linkInfo = {
        $: $,
        url: config_1.default.urlToReplace,
        name: config_1.default.urlToReplace
    };
    common_utils_1.default.updateLinks(linkInfo);
    writeFile({ content: $.html(), path: fileInfo.outputFilePath });
};
var getFileData = function (filePath) {
    var fileContent = fs.readFileSync(filePath, constants_1.default.utf8Format);
    return fileContent;
};
var updateBodyContent = function ($, content) {
    var bodyContent = $('body').children()[0];
    $(bodyContent).replaceWith(content);
};
var writeFile = function (fileInfo) {
    fs.writeFile(fileInfo.path, fileInfo.content, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success creating new file...");
    });
};
