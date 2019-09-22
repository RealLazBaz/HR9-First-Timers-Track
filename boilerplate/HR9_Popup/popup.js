document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  
  checkPageButton.addEventListener('click', function() {
     window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  }, false);
  
  console.log("popup has loaded");
  list = [];
  var dictionary = {}

  chrome.storage.local.get(['key'], function(result) {
      dictionary = JSON.parse(result.key);
      console.log("Have loaded the saved data onto the pop as follows");
      console.log(dictionary);


      console.log("about to iterate through the dictionary");
      list = []
      var index = 0
      Object.keys(dictionary).forEach(function(key) {
        var table = document.getElementById("table");
      
      //create a text element that displays the amount of time on the site
      //create a row
      var row = table.insertRow(index);
      //create the data cells
      var siteCell = row.insertCell(0);
      row.insertCell(1); //empty cell so that there is space
      var timeCell = row.insertCell(2);
      
      siteCell.innerHTML = key;
      timeCell.innerHTML = dictionary[key];
      siteCell.id = key + "identification"; 
      index += 1;
  });

  });
  
  
 
  
});