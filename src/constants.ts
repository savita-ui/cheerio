interface IConstants{
    matcher:RegExp[],
    minMatchRequired:number,
    base64:string,
    imageBase64Prefix:string,
    utf8Format:string
}

const Constants:IConstants = {
    matcher:  [ /\s*from:\s*.*/i, 
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

export default Constants;
