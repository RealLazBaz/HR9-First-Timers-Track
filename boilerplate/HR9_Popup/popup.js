document.addEventListener('DOMContentLoaded', function() {

  //var checkPageButton = document.getElementById('checkPage');
  
  //checkPageButton.addEventListener('click', function() {
   //  window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  //}, false);
  
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
        table.style.borderPadding = 0;
      //create a text element that displays the amount of time on the site
      //create a row
      var row = table.insertRow(index);
      //create the data cells
      var siteCell = row.insertCell(0);
      row.insertCell(1); //empty cell so that there is space
      var timeCell = row.insertCell(2);

      //generate cells for 2040 minutes 
      var i;
      for (i = 2; i < 24*60; i++) {
      var tempcell = row.insertCell(i);
      //if the amount of minutes is more than or equal to the current cell, then
      minutes = Math.floor (dictionary[key]/60);
      if(minutes+1 >= i){
        tempcell.innerHTML = " ";
        tempcell.style.backgroundColor = "blue";
        tempcell.classList.add('filledCell');
        if(index = 0){
          console.log("Minutes is: " + minutes);
          console.log("Seconds is: "+ dictionary[key]);
          console.log("Current Index is: " + i);
          }
        }
      }
      var time = row.insertCell((24*60)+1);
      siteCell.innerHTML = key;
      timeCell.innerHTML = dictionary[key];
      siteCell.class = "site"; 
      index += 1;
  });

  });
  
  
 
  
});