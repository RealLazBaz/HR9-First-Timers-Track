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