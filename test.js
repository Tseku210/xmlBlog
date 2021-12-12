loadXMLDoc();

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "ikonrss.xml", true);
    xmlhttp.send();
  }

var x;

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var text = "";
    x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i<x.length; i++) { 
      text += "<hr><br>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + 
      "<br> <button class='button-21' onclick='displayD("+i+")'>Цааш унших</button>";
    }
    document.getElementById("list").innerHTML = text;
  }

function displayD(i) {
    document.getElementById("left").innerHTML = x[i].textContent;
}