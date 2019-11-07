var extraMenu1 = document.getElementById("extraMenuText1");
var extraMenu2 = document.getElementById("extraMenuText2");
var extraMenu3 = document.getElementById("inputAddress");

extraMenu1.style.display = "none";
extraMenu2.style.display = "none";
extraMenu3.style.display = "none";

var radio1 = document.getElementById("radio-1")
var radio2 = document.getElementById("radio-2")



//Side menu functionality

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
}


radio1.onclick = function(extraMenuText1, extraMenuText2, extraMenuText3) {
  extraMenu1.style.display = "none";
  extraMenu2.style.display = "none";
  extraMenu3.style.display = "none";
  bCVersion = false;
}

radio2.onclick = function(extraMenuText1, extraMenuText2, extraMenuText3) {
  extraMenu1.style.display = "block";
  extraMenu2.style.display = "block";
  extraMenu3.style.display = "block";
  bCVersion = true;
}
