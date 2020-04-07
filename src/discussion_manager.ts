import { getLatestDiscussion } from "./latest_discussion_fetcher";
import CommonUtils from "./common_utils";
import Constants from "./constants";
import Config  from "./config";

const 
    fs = require('fs'),
    cheerio = require('cheerio')
;

interface IInputFileInfo {
    inputFilePath:string,
    outputFilePath:string
};

interface IOutputFileInfo {
    content:string,
    path:string
};

export const processLatestDiscussion = (fileInfo:IInputFileInfo) => {
    const 
        data:string = getFileData(fileInfo.inputFilePath),
        $ = cheerio.load(data),
        latestReplyContent:HTMLElement[] = getLatestDiscussion($)
    ;
    if(latestReplyContent.length == 0){
        console.log("No match Found..");
        return;
    }
    updateBodyContent($, latestReplyContent);
    CommonUtils.convertImagestoBase64($);
    let linkInfo = {
        $: $,
        url: Config.urlToReplace,
        name: Config.urlToReplace
    }
    CommonUtils.updateLinks(linkInfo);
    
    writeFile({content:$.html(), path:fileInfo.outputFilePath});
};

const getFileData = (filePath:string):string => {
    let fileContent = fs.readFileSync(filePath, Constants.utf8Format);
    return fileContent;
};

const updateBodyContent = ($:Function, content:HTMLElement[]):void =>{
    var bodyContent = $('body').children()[0];
    $(bodyContent).replaceWith(content);
};

const writeFile = (fileInfo:IOutputFileInfo):void =>{
    fs.writeFile(fileInfo.path, fileInfo.content, (err:Error, data:string) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Success creating new file...");
    });
};



