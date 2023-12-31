const dogs = document.querySelector('#dogs');
const cats = document.querySelector('#cats');
const backPage = document.querySelector('#back');
const refreshPage = document.querySelector('#refresh');
const restartResult = document.querySelector('#restart');
const resultDog = document.querySelector('#resultDog');
const resultCat = document.querySelector('#resultCat')

listarTodos();

backPage.addEventListener('click', () => {
    backMain();
});

refreshPage.addEventListener('click', () => {
    location.reload();
});

function backMain() {
    window.location.href = "index.html";
}

restartResult.addEventListener('click', () => {
    reiniciar();
});

function reiniciar() {

}



function listarTodos() {
    var xhttp = new XMLHttpRequest();

    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            console.log(xhttp);

            if (this.status == 200) {

                porcentagemDog = this.response.caes * 100 / this.response.total;
                porcentagemCat = this.response.gatos * 100 / this.response.total;

                cats.addEventListener('animationstart', () => {
                    setTimeout(() => {
                        cats.style.width = `${porcentagemCat.toFixed(0)}%`;
                    }, 1000);
                })
                dogs.addEventListener('animationstart', () => {
                    setTimeout(() => {
                        dogs.style.width = `${porcentagemDog.toFixed(0)}%`;
                    }, 1000);
                })

                if (isNaN(porcentagemCat) && isNaN(porcentagemDog)) {
                    resultDog.innerHTML = `0%`;
                    resultCat.innerHTML = `0%`;
                } else {
                    // Função para simular o carregamento
                    function carregamentoVotos(numero) {
                        // Atualiza o conteúdo da tela de carregamento
                        resultCat.innerHTML = `${numero}%`;
                        resultDog.innerHTML = `${numero}%`;
                        
                        // Se atingiu o número máximo, esconde a tela de carregamento
                        if (numero == porcentagemCat.toFixed(0) || numero == porcentagemDog.toFixed(0)) {
                            resultCat.innerHTML = `${porcentagemCat.toFixed(0)}%`;
                            resultDog.innerHTML = `${porcentagemDog.toFixed(0)}%`;
                            //   telaDeCarregamento.style.display = 'none';
                        } else {
                            // Continua simulando o carregamento após um pequeno atraso
                            setTimeout(function () {
                                carregamentoVotos(numero + 1);
                            }, 15);
                        }
                    }
                    // Função para simular o carregamento
                    
                    carregamentoVotos(1);
                    dogs.style = `width: ${porcentagemDog.toFixed(0)}%;`;
                    cats.style = `width: ${porcentagemCat.toFixed(0)}%`;
                }
                if (this.response.gatos == 0 && this.response.total != 0) {
                    cats.style = `display: none`;
                }
                if (this.response.caes == 0 && this.response.total != 0) {
                    dogs.style = `display: none`;
                }

            } else {
                alert("Algo deu errado.");
            }
        }

    };

    xhttp.open("GET", "http://localhost:7000/votacao");
    xhttp.send();
}

function reiniciar() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";


    xhttp.onreadystatechange = function () {
        console.log(xhttp);
        if (this.readyState == 4) {

            if (this.status == 200) {
                alert("Reiniciado com sucesso!");
            } else {
                alert("Algo deu errado.");
            }
        }
    };

    xhttp.open("PUT", "http://localhost:7000/votacao/3");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    location.reload();
}
