"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = {
    matcher: [/\s*from:\s*.*/i,
        /\s*Sent:\s*.*|\s*Date:\s*.*/i,
        /\s*to:\s*.*/i,
        /\s*cc:\s*.*|\s*bcc:\s*.*|\s*subject:\s*.*/i,
        /\s*bcc:\s*.*|\s*subject:\s*.*/i,
        /\s*subject:\s*.*/i],
    minMatchRequired: 4,
    base64: 'base64',
    imageBase64Prefix: 'data:image/jpeg;base64,',
    utf8Format: 'utf8'
};
exports.default = Constants;
