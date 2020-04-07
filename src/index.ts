import { processLatestDiscussion } from "./discussion_manager";

const 
    contentPath:string = "../content/",
    inputFilePath:string = contentPath + "Dummy_Mail.htm",
    outputFilePath:string = contentPath + "Dummy_Mail_New.html"
; 
processLatestDiscussion({inputFilePath, outputFilePath});