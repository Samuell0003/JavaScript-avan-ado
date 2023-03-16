function getTextServer() {
    //filename = 'bd.txt';
    filename = 'user.json';
    axios.get(filename)
        .then(response => {
            if (response.status==200) document.getElementById("textServer").innerHTML = response.data[0].usuario;
        })
        .catch(error => {
            console.log(error.message);
        });

}