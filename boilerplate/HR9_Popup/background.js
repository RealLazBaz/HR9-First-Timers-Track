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
                website = tab.url.slice(tab.url.indexOf("//")+2, tab.url.indexOf("/",8));
                //if this is a new URL
                if (!webInfo[website])
                    webInfo[website] = 0
                intervalId = setInterval (howLongOnSite (website),5000); 
            }
        );
    }
);

//control the popup
document.addEventListener('DOMContentLoaded', function() {
    console.log("popup has loaded");
    list = [];
    var dictionary = {}
    //this code doesn't actually run FOR SOME FUCKING REASON
    chrome.storage.local.get(['key'], function(result) {
        dictionary = JSON.parse(result.key);
        console.log("Have loaded the saved data onto the pop as follows");
        console.log(dictionary);
    });
    
    //for every website
    Object.keys(dictionary).forEach(function(key) {
        //create a text element that displays the website name
        var para = document.createElement(key);
        var node = document.createTextNode(key);
        para.appendChild(node);

        var element = document.getElementById("contents");
        element.appendChild(para);
        //create a text element that displays the amount of time on the site
        var para2 = document.createElement(key);
        var node2 = document.createTextNode(dictionary[key]);
        para2.appendChild(node2);

        element.appendChild(para2);
    });
    /*Object.keys(dictionary.forEach(function(key) {
        list.push({y:dictionary[key],label:key});
        document.getElementById("timeInSeconds").textContent = dictionary[key]
    }));
    */
    
});