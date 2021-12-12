const medee = document.getElementById("medee");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        myFunction(this);
        const medeenuud = document.querySelectorAll(".btn");
        medeenuud.forEach(medee => {
            medee.addEventListener("click", () => {

                let i = medee.dataset.i;

                if (!medee.classList.contains("active")){
                    medee.classList.add("active");
                    presentMedee(this, i);
                } else {
                    medee.classList.remove("active");
                    deleteMedee(i);
                }
            })
        })

    }
}
xmlhttp.open("GET", "file.xml", true);
xmlhttp.send();

function presentMedee(xml, i){
    var xmlDoc = xml.responseXML;
    var text = "";
    x = xmlDoc.getElementsByTagName("description");
    text += x[i].innerHTML;
    const news = document.querySelectorAll(".subMedee");
    news[i].innerHTML = text;
    let btn = document.querySelectorAll(".btn");
    btn[i].innerHTML = "Устгах";
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
    for (i = 0; i<x.length; i++) { 
      text += `<div class='medeenuud'>` + "<div class='title'>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</div>" + 
      `<button class='btn' data-i=${i}>Цааш унших</button>` + `<div class='subMedee' data-i = '${i}'></div>` + "</div>";
    }
    let medee = document.getElementById("medee");
    if (medee){
        document.getElementById("medee").innerHTML = text;
    }
  }

function displayD(i) {
    document.getElementById("subMedee").innerHTML = x[i].textContent;
}