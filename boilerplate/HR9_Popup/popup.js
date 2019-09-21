document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  
  checkPageButton.addEventListener('click', function() {
     window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  }, false);
  

  //get the id of the page
  var id = null;
  chrome.tabs.getCurrent(function(tab){id = chrome.tabs.getCurrent.id;});

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
  TimeMe.trackTimeOnElement('area-of-interest-time-1');
  TimeMe.trackTimeOnElement('area-of-interest-2');
  setInterval(function(){
    var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
    document.getElementById('timeInSeconds').textContent = timeSpentOnPage.toFixed(2);

    console.log(id)
    var timeSpentOnElement = TimeMe.getTimeOnElementInSeconds('area-of-interest-time-1');
    document.getElementById('area-of-interest-time-1').textContent = timeSpentOnElement.toFixed(2);

    var timeSpentOnElement = TimeMe.getTimeOnElementInSeconds('area-of-interest-2');
    document.getElementById('area-of-interest-time-2').textContent = timeSpentOnElement.toFixed(2);
  }, 25);
}

}, false);