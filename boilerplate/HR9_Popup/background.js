// {website : time spent on it, website2 : time spent on that, 

var intervalId = 0;
    
function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;
        
        chrome.storage.local.set({'key': webInfo}, function() {
            console.log('stuff saved');
        });



       chrome.storage.local.get(['key'], function(result) {
        console.log(result);
        var thing = 'key'
        console.log(result.key);
        console.log(result.thing);
      });
    }
}

const webInfo  = {};
var intervalId = 0
//Timer code
chrome.tabs.onActivated.addListener (
    function (activeInfo ){
        console.log(webInfo);
        clearInterval(intervalId)
        chrome.tabs.get(activeInfo.tabId, 
            function (tab) //callback
            {
                //if this is a new URL
                if (!webInfo[tab.url])
                    webInfo[tab.url] = 0
                intervalId = setInterval (howLongOnSite (tab.url),20000); 
            }
        );
    }
);