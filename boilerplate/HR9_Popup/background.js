

function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;

    }
}

// {website : time spent on it, website2 : time spent on that, ...}
const webInfo = {}
var intervalId = 0
//Timer code
chrome.tabs.onActivated.addListener (
    function (activeInfo ){
        console.log(webInfo);
        clearInterval(intervalId)
        chrome.tabs.get(activeInfo.tabId, 
            function (tab) //callback
            {
                //check similarities in urls
                
                //if this is a new URL
                if (!webInfo[tab.url])
                    webInfo[tab.url] = 0
                intervalId = setInterval (howLongOnSite (tab.url),1000); 
            }
        );
    }
)
;

chrome.tabs.onChange


