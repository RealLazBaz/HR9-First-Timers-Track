// {website : time spent on it, website2 : time spent on that, ...
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/en-gb.js" integrity="sha256-VWXSrU6D6hQJ7MEZ9062PvZDwmeRuZ8eE/ToQ2N3QjA=" crossorigin="anonymous"></script>

var intervalId = 0;
    
function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;

        chrome.storage.local.set({"The freaking information" : webInfo};
        chrome.storage.local.get("The freaking information", function(data)
        {
            console.log("This is WebInfo: " + data);
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