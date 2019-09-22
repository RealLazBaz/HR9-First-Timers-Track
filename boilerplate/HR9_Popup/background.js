// {website : time spent on it, website2 : time spent on that, 

var intervalId = 0;
    
function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;
        
        chrome.storage.sync.set({'key': webInfo}, function() {
            console.log('stuff saved');
        });

        /*chrome.storage.sync.get(['key'], function(data) {
            console.log("This is data: " + data[0]); //undefined
            console.log("WebInfo is :" + webInfo); //[object Object]
            console.log("Data is :" + data); //[object Object]
            var key = 'key';
            console.log("data.key:" + data.key); //[object Object]
        });
        */


       chrome.storage.sync.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
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
                intervalId = setInterval (howLongOnSite (tab.url),1000); 
            }
        );
    }
);