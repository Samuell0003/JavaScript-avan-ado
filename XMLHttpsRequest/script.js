function getTextServer() {
    var xhttp = new XMLHttpRequest();
    //var filename = 'bd.txt';
    var filename = 'user.json';
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("textServer").innerHTML = JSON.parse(xhttp.responseText)[1].usuario;
            
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}