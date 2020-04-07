import Constants from "./constants";

const 
    matcher = Constants.matcher,
    minMatchRequired = Constants.minMatchRequired
;
export const getLatestDiscussion = ($:Function):HTMLElement[] => {
    //console.log( $('body').children());
    const 
        nodes:HTMLElement[] = $('body').children()[0].children,
        lastIndex:number = getDiscussionStartIndex($, nodes),
        latestReply:HTMLElement[] = []
    ;
    for(let j = lastIndex; j < nodes.length; j++){
        let 
            node = $(nodes[j]),
            innerText = node.text()
        ;
        if(matcher[0].test(innerText)){
            break;
        }
        else{
            latestReply.push(node);
        }  
    }
    return latestReply;
};


const getDiscussionStartIndex = ($:Function, nodes:HTMLElement[]):number => {
    let 
        counter = 0,
        lastIndex =0
    ;
    for(let i=0; i < nodes.length; i++){
        let innerText = $(nodes[i]).text();
        console.log(innerText);
        if(innerText.trim() === ""){
            continue;
        }
        console.log(matcher[counter].test(innerText))
        if(matcher[counter].test(innerText)){
            counter++;
        }
        else if(counter < minMatchRequired){
            counter = 0;
        }
        else if(counter >= minMatchRequired){
            lastIndex = i ;
            break;
        }
    }
    return lastIndex;
  };



