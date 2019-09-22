// {website : time spent on it, website2 : time spent on that, 

function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;
        chrome.storage.local.set({'key': JSON.stringify(webInfo)}, function() {});

       chrome.storage.local.get(['key'], function(result) {
      });
    }
}

const webInfo  = {};
var intervalId = 0;
var oldURL = "";
//Timer code
chrome.tabs.onActivated.addListener (
    function (activeInfo ){
        clearInterval(intervalId);
        chrome.tabs.get(activeInfo.tabId, 
            function (tab)
            {

                //url distinguishing
                ending = tab.url.slice(tab.url.indexOf("."),tab.url.length)
                if (tab.url.indexOf(".") == -1){
                    website = tab.url;
                }
                else if(tab.url.indexOf("/",8) != -1){
                    website = tab.url.slice(tab.url.indexOf("//")+2, tab.url.indexOf("/",8));
                }else if(tab.url.indexOf("www.") != -1){
                if(ending.length < 3){
                    website = tab.url.slice(tab.url.indexOf("www.")+4, tab.url.indexOf(".",12)+3);
                }else{
                    website = tab.url.slice(tab.url.indexOf("www.")+4, tab.url.indexOf(".",12)+4);
                }
                }else{
                 website = tab.url.slice(tab.url.indexOf("//")+2, tab.url.length);
                } 


                //if this is a new URL
                if (!webInfo[website])
                    webInfo[website] = 0;
                intervalId = setInterval (howLongOnSite (website),1000);
                
            }

        );
    }
);


chrome.tabs.onUpdate.addListener (
    function (status, url){
        var website = "";
                ending = activeInfo.tab.url.slice(activeInfo.tab.url.indexOf("."),activeInfo.tab.url.length)
                if (url.indexOf(".") == -1){
                    website = url;
                }
                else if(activeInfo.tab.url.indexOf("/",8) != -1){
                    website = url.slice(url.indexOf("//")+2, url.indexOf("/",8));
                }else if(url.indexOf("www.") != -1){
                if(ending.length < 3){
                    website = url.slice(url.indexOf("www.")+4, url.indexOf(".",12)+3);
                }else{
                    website = url.slice(url.indexOf("www.")+4, url.indexOf(".",12)+4);
                }
                }else{
                 website = url.slice(url.indexOf("//")+2, url.length);
                } 


        if(oldURL == ""){
            console.log("OLD URL IS BEING SET TO THE CURRENT URL");
            oldURL = website;
        }

        if (oldURL!=website){
            console.log("Oldurl and the current website are different, therefore we are gonna change stuff");
            clearInterval(intervalId);
            oldURL = website;
        }
        else
        {
            console.log("THEYRE THE SAME");
        }
    });