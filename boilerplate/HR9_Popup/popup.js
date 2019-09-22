document.addEventListener('DOMContentLoaded', function() {

  //var checkPageButton = document.getElementById('checkPage');
  
  //checkPageButton.addEventListener('click', function() {
   //  window.open('https://reallazbaz.github.io/HR9-First-Timers-Track/');
  //}, false);
  
  list = [];
  var dictionary = {}

  chrome.storage.local.get(['key'], function(result) {
      dictionary = JSON.parse(result.key);
      
      list = []
      var index = 0
      Object.keys(dictionary).forEach(function(key) {
        var table = document.getElementById("table");
        table.style.webkitBorderHorizontalSpacing = 0;
        table.style.webkitBorderVerticalSpacing = 3;
        table.style.borderColor = "black";
        table.style.borderTop = 10;
        //table.style.borderWidth = 10;
        
      //create a row
      var row = table.insertRow(index);
      row.style.borderBottomWidth = 10;
      row.style.borderTopWidth = 10;
      row.style.borderStyle = "solid";
      //create the data cells
      var siteCell = row.insertCell(0);
      row.insertCell(1); //empty cell so that there is space
      var timeCell = row.insertCell(2);
      row.insertCell(3);

      //generate cells for 2040 minutes 
      var i;
      for (i = 4; i < (24*60)+3; i++) {
      var tempcell = row.insertCell(i);
      //if the amount of minutes is more than or equal to the current cell, then
      minutes = Math.floor (dictionary[key]/60);
      if(minutes+3 >= i){
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
      siteCell.innerHTML = key;
      timeCell.innerHTML = dictionary[key];
      siteCell.class = "site"; 
      var lastCell = row.insertCell(24*60);
      var hours = Math.floor (minutes/60);
      minutes = minutes%60;
       //if there is no hours and 1 minute
      if(hours == 0 && minutes == 1)  
        timeCell.innerHTML = "1 minute";
      //if there are no hours, but there are minutes
      else if(hours == 0 && minutes != 0)  
       timeCell.innerHTML = minutes + " minutes";
      //if there is one hour and no minutes
      else if (hours == 1 && minutes == 0)
       timeCell.innerHTML = "1 hour";
     //if there is hour and one minute
     else if (hours == 1 && minutes == 1)
       timeCell.innerHTML = "1 hour & 1 minute";
     //if there is one hour and a couple minutes
     else if (hours == 1 && minutes != 0)
       timeCell.innerHTML = "1 hour & " + minutes + " minutes";
     //if there is more than one hour and no minutes
     else if(hours != 0 && minutes == 0)
       timeCell.innerHTML = hours + " hours";
     //if there is more than one hour and one minutes
     else if(hours != 0 && minutes == 1)
       timeCell.innerHTML = hours + " hours & 1 minute";
     //if there are hours and minutes
     else if (hours != 0 && minutes != 0)
       timeCell.innerHTML = hours + " hours & " + minutes + " minutes";
     else
       timeCell.innerHTML = dictionary[key] + " seconds";
      index += 1;
  });

  });
  
  
 
  
});