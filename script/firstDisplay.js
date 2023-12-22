const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnResul = document.querySelector('#result');

btnDog.addEventListener('click',()=>{
    votarDog();
});
btnCat.addEventListener('click',()=>{
    votarCat();
});

btnResul.addEventListener('click', ()=>{
    showResultado();
});


function votarDog() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";


    xhttp.onreadystatechange = function () {
        console.log(xhttp);
        if (this.readyState == 4) {

            if(this.status == 200){
                alert("Registro alterado com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }  
    };

    xhttp.open("PUT", "http://localhost:7000/votacao/1");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}


function votarCat() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";


    xhttp.onreadystatechange = function () {
        console.log(xhttp);
        if (this.readyState == 4) {

            if(this.status == 200){
                alert("Registro alterado com sucesso!");
            }else{
                alert("Algo deu errado.");
            }
        }  
    };

    xhttp.open("PUT", "http://localhost:7000/votacao/2");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function showResultado() {
    window.location.href = "resultado.html";
}