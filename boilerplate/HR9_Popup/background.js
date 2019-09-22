// {website : time spent on it, website2 : time spent on that, 

var intervalId = 0;
    
function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 5;
        chrome.storage.local.set({'key': JSON.stringify(webInfo)}, function() {
            console.log('I promise it saved');
        });

       chrome.storage.local.get(['key'], function(result) {
        console.log("The following line is the actual WebInfo Shit");
        console.log(JSON.parse(result.key));
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
                intervalId = setInterval (howLongOnSite (tab.url),5000); 
            }
        );
    }
);

//control the popup
window.onload = function () {
    console.log("popup has loaded");
    list = [];
    var dictionary = {}
    chrome.storage.local.get(['key'], function(result) {
        dictionary = JSON.parse(result.key);
        console.log("Have loaded the saved data onto the pop as follows");
        console.log(dictionary);
    });
    
    /*Object.keys(dictionary.forEach(function(key) {
        list.push({y:dictionary[key],label:key});
        document.getElementById("timeInSeconds").textContent = dictionary[key]
    }));
    */
    
}