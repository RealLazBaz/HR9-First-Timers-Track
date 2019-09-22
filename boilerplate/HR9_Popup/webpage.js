var chart;

window.onload = function () {
    console.log("hello it got over here");
    list = [];
    var dictionary = {}
    chrome.storage.local.get(['key'], function(result) {
        dictionary = result.key;
        console.log(dictionary);
    });
    
    Object.keys(dictionary.forEach(function(key) {
        list.push({y:dictionary[key],label:key});
    }));
    console.log("The following line contains list");
    console.log(list);
    
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
            dataPoints: list
        }]
    });
    chart.render();
    console.log("webpage ran");
}