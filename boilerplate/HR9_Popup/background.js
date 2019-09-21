// {website : time spent on it, website2 : time spent on that, ...}
const globalVariable = {
    webInfo: {}
    // [
    //     { y: 3, label: "Sweden" },
    //     { y: 7, label: "Taiwan" },
    //     { y: 5, label: "Russia" },
    //     { y: 9, label: "Spain" },
    //     { y: 7, label: "Brazil" },
    //     { y: 7, label: "India" },
    //     { y: 9, label: "Italy" }
    // ]
};
var intervalId = 0;
var chart;

window.onload = function () {
    chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        
        title:{
            text:"Website Usage with Total Time Allotted"
        },
        axisX:{
            interval: 1
        },
        axisY2:{
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Minutes"
        },
        data: [{
            type: "bar",
            name: "Websites",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [...globalVariable.webInfo]
                // { y: 3, label: "Sweden" },
                // { y: 7, label: "Taiwan" },
                // { y: 5, label: "Russia" },
                // { y: 9, label: "Spain" },
                // { y: 7, label: "Brazil" },
                // { y: 7, label: "India" },
                // { y: 9, label: "Italy" },
                // { y: 8, label: "Australia" },
                // { y: 11, label: "Canada" },
                // { y: 15, label: "South Korea" },
                // { y: 12, label: "Netherlands" },
                // { y: 15, label: "Switzerland" },
                // { y: 25, label: "Britain" },
                // { y: 28, label: "Germany" },
                // { y: 29, label: "France" },
                // { y: 52, label: "Japan" },
                // { y: 103, label: "China" },
                // { y: 134, label: "US" }
        }]
    });
    chart.render();
    
}
    
function howLongOnSite (website)
{
    return function()
    {
        webInfo [website] = webInfo [website] + 1;

    }
}


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




