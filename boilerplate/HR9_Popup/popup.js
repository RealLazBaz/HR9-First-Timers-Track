document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  
  checkPageButton.addEventListener('click', function() {
     window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  }, false);
  

  
  
//Timer code

TimeMe.initialize({
  currentPageName: "my-home-page", // current page
  idleTimeoutInSeconds: 5, // stop recording time due to inactivity
  websocketOptions: { // optional
    websocketHost: "ws://your_host:your_port",
    appId: "insert-your-made-up-app-id"
  }
});

TimeMe.callAfterTimeElapsedInSeconds(4, function(){
  console.log("The user has been using the page for 4 seconds! Let's prompt them with something.");
});

TimeMe.callAfterTimeElapsedInSeconds(9, function(){
  console.log("The user has been using the page for 9 seconds! Let's prompt them with something.");
});


window.onload = function(){
  //get the id of the page
  var id = null;
  //active = true means active tab
  //current window = true means current window
  chrome.tabs.query({active : true, currentWindow : true}, 
    function(tabs){
      id = tabs[0].id;
      console.log(id);
      TimeMe.trackTimeOnElement(id);
    }
  );
  
  setInterval(function(){
    var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
    document.getElementById('timeInSeconds').textContent = timeSpentOnPage.toFixed(2);

    var timeSpentOnElement = TimeMe.getTimeOnElementInSeconds(id);
    document.getElementById('area-of-interest-time-1').textContent = timeSpentOnElement.toFixed(2);

    }, 1000);
}

}, false);