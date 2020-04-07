import Constants from "./constants";

const fs = require('fs');
interface ILinkInfo {
    $:Function, 
    url:string,
    name:string
};

const CommonUtils = {

    convertImagestoBase64: ($:Function) => {
        const 
                imagesArr = $('body img'),
                base64 = Constants.base64,
                imageBase64Prefix = Constants.imageBase64Prefix
        ;
        imagesArr.each((i:number, image:HTMLElement) => {
            const
                imageEl = $(image),
                path =  "../content/"+ unescape(imageEl.attr('src')),
                src = imageBase64Prefix + fs.readFileSync(path).toString(base64)
            ;
            imageEl.attr('src', src);
         });
    },   

    updateLinks: (linkInfo:ILinkInfo) => {
        const 
            $ = linkInfo.$,
            links = $('body a')
        ;
        links.each((i:number, link:HTMLElement) => {
              const linkEl = $(link);
              linkEl.attr('href', linkInfo.url);
              linkEl.text(linkInfo.name);
           });
    }
}

export default CommonUtils;

