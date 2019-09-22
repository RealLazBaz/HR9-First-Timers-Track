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
  });
  
  //for every website
  Object.keys(dictionary).forEach(function(key) {
    console.log("looping through the ddictionary right now to dist=play itttttttttt");
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
 
  
});