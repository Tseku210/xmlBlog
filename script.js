const medee = document.getElementById("medee");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        myFunction(this);
    }
}
xmlhttp.open("GET", "file.xml", true);
xmlhttp.send();

function myFunction(xml){
    var xmlDoc = xml.responseXML;
    var parser = new DOMParser();
    var x = xmlDoc.getElementsByTagName("item");
    let text = x[0].getElementsByTagName("description")[0].childNodes[0].wholeText;
    dedDoc = parser.parseFromString(text,"text/xml");
    console.log(text)
    console.log(dedDoc)
    

    for (let i = 0; i < x.length; i++){
        
        let dedMedee = document.createElement("div");
        let dedMedeeLink = document.createElement("a");
        dedMedeeLink.classList.add("dedLink");
        dedMedeeLink.href = "medee.html";
        dedMedee.classList.add("dedMedee");
        console.log(x[i].getElementsByTagName("description")[0].value)
        let xmlZurag = x[i].getElementsByTagName("description")[0].innerHTML;
        dedMedeeLink.innerHTML = x[i].getElementsByTagName("title")[0].innerHTML;
        dedMedee.appendChild(dedMedeeLink);
        medee.appendChild(dedMedee);
    }
}