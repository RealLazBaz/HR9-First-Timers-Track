var chart;

window.onload = function () {
    list = []
    Object.keys(webInfo).forEach(function(key) {
        list.push({y:webInfo[key],label:key});
    });
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