function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]);}

    };

var activeTabId = null;
doInCurrentTab( function(tab){ activeTabId = tab.id } );

