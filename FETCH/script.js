function getTextServer() {
    //var filename = "bd.txt"
    var filename = "user.json"
    fetch(filename)
    //.then(response => response.text())
    .then(response => response.json())
    .then(dados => document.getElementById("textServer").innerHTML = dados[0].usuario)
    .catch(error => console.log(error));
}