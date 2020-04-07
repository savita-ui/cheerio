"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discussion_manager_1 = require("./discussion_manager");
var contentPath = "../content/", inputFilePath = contentPath + "Dummy_Mail.htm", outputFilePath = contentPath + "Dummy_Mail_New.html";
discussion_manager_1.processLatestDiscussion({ inputFilePath: inputFilePath, outputFilePath: outputFilePath });
