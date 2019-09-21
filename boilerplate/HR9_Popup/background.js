

function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;

    }
}

// {website : time spent on it, website2 : time spent on that, ...}
const webInfo = {} 
//Timer code
chrome.tabs.onActivated.addListener (
    function (activeInfo ){
        console.log(webInfo)
        chrome.tabs.get(activeInfo.tabId, 
            function (tab) //callback
            {
                //check similarities in urls
                //if this is a new URL
                if (!webInfo[tab.url])
                    webInfo[tab.url] = 0
                setInterval (howLongOnSite (tab.url),1000);
            }
        );
    }
)
;




