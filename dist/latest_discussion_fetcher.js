"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("./constants"));
var matcher = constants_1.default.matcher, minMatchRequired = constants_1.default.minMatchRequired;
exports.getLatestDiscussion = function ($) {
    console.log($('body').children());
    var nodes = $('body').children()[0].children, lastIndex = getDiscussionStartIndex($, nodes), latestReply = [];
    for (var j = lastIndex; j < nodes.length; j++) {
        var node = $(nodes[j]), innerText = node.text();
        if (matcher[0].test(innerText)) {
            break;
        }
        else {
            latestReply.push(node);
        }
    }
    return latestReply;
};
var getDiscussionStartIndex = function ($, nodes) {
    var counter = 0, lastIndex = 0;
    for (var i = 0; i < nodes.length; i++) {
        var innerText = $(nodes[i]).text();
        console.log(innerText);
        if (innerText.trim() === "") {
            continue;
        }
        console.log(matcher[counter].test(innerText));
        if (matcher[counter].test(innerText)) {
            counter++;
        }
        else if (counter < minMatchRequired) {
            counter = 0;
        }
        else if (counter >= minMatchRequired) {
            lastIndex = i;
            break;
        }
    }
    return lastIndex;
};
