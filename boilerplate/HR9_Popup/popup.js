document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  
  checkPageButton.addEventListener('click', function() {
     window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  }, false);
  
  console.log("popup has loaded");
  list = [];
  var dictionary = {}
  //this code doesn't actually run FOR SOME FUCKING REASON
  chrome.storage.local.get(['key'], function(result) {
      dictionary = JSON.parse(result.key);
      console.log("Have loaded the saved data onto the pop as follows");
      console.log(dictionary);


      console.log("about to iterate through the dictionary");
      list = []
      Object.keys(dictionary).forEach(function(key) {
      console.log("looping through the ddictionary right now to dist=play itttttttttt");

      //create a text element that displays the website name
      /*var para = document.createElement(key);
      var node = document.createTextNode(key);
      para.appendChild(node);

      var element = document.getElementById("contents");
      element.appendChild(para);
      //create a text element that displays the amount of time on the site
      var para2 = document.createElement(key);
      var node2 = document.createTextNode(dictionary[key]);
      para2.appendChild(node2);

      element.appendChild(para2);
      */
        list.push({y:dictionary[key],label:key});
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

  });
  
  
 
  
});