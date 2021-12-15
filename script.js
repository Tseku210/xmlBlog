const medee = document.getElementById("medee");
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        if(window.location.href.includes("index.html")){
            myFunction(this);
        } else {
            var medeeNo = medeeCookie();
            presentMedee(this, medeeNo);
        }
    }
}
xmlhttp.open("GET", "file.xml", true);
xmlhttp.send();

function presentMedee(xml, i){
    var xmlDoc = xml.responseXML;
    let item = xmlDoc.getElementsByTagName("item");
    var text = "";
    text += "<h1>" + item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</h1>" + "<p class='p'>"
    + item[i].getElementsByTagName("description")[0].childNodes[1].nodeValue + "</p>";
    const main = document.querySelector("#main");
    main.innerHTML = text;
    // document.getElementById("subMedee").innerHTML = text;
}

// function myFunction(xml){
//     var xmlDoc = xml.responseXML;
//     var parser = new DOMParser();
//     var x = xmlDoc.getElementsByTagName("item");
//     let text = x[0].getElementsByTagName("description")[0].childNodes[0].wholeText;
//     dedDoc = parser.parseFromString(text,"text/xml");
//     console.log(text)
//     console.log(dedDoc)


    

//     for (let i = 0; i < x.length; i++){
        
//         let dedMedee = document.createElement("div");
//         let dedMedeeLink = document.createElement("a");
//         dedMedeeLink.classList.add("dedLink");
//         dedMedeeLink.href = "medee.html";
//         dedMedee.classList.add("dedMedee");
//         console.log(x[i].getElementsByTagName("description")[0].value)
//         let xmlZurag = x[i].getElementsByTagName("description")[0].innerHTML;
//         dedMedeeLink.innerHTML = x[i].getElementsByTagName("title")[0].innerHTML;
//         dedMedee.appendChild(dedMedeeLink);
//         medee.appendChild(dedMedee);
//     }
// }

// let dedMedee = document.querySelectorAll(".dedLink");

// dedMedee.forEach(link => {
//     link.addEventListener("click", () => {

//     })
// })

function deleteMedee(i){
    let subMedee = document.querySelectorAll(".subMedee");
    let btn = document.querySelectorAll(".btn");
    btn[i].innerHTML = "Цааш унших";
    subMedee[i].innerHTML = "";
}

function myFunction(xml) {
    var x;
    var i;
    var xmlDoc = xml.responseXML;
    var text = "";
    x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < x.length; i++) { 
      text += `<div class='medeenuud'>` + "<div class='title'>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</div>" + 
      `<a onclick="aliMedee(${i})" href="medee.html" class='btn' data-i=${i}>Цааш унших</a>` +"</div>";
    }
    let medee = document.getElementById("medee");
    if (medee){
        document.getElementById("medee").innerHTML = text;
    }
  }

function medeeCookie(){
    return document.cookie
}
function aliMedee(medeeDugaar){
    document.cookie = medeeDugaar;
}
function randomMedee(){
    var randomMedeeNo = Math.floor(Math.random() * 30);
    console.log(randomMedeeNo)
    document.cookie = randomMedeeNo;
}

// const randomBtn = document.querySelector("#random");
// console.log(randomBtn)
// randomBtn.addEventListener("click", ()=> {
//     console.log("hello")
//     // randomMedee();
// })