var minutos = 25;
var segundos = 0;
var intervalo;

function actualizarTemporizador() {

    var min;

    var seg;

    if (minutos < 10) {

        min = "0" + minutos;

    }

    else {

        min = minutos;

    }



    if (segundos < 10) {

        seg = "0" + segundos;

    }

    else {

        seg = segundos;

    }



    document.getElementById("temporizador").innerHTML = min + ":" + seg;

}


function iniciarPomodoro() {

    clearInterval(intervalo);

    intervalo = setInterval(function () {

        if (segundos == 0) {

            if (minutos == 0) {

                clearInterval(intervalo);

            }

            else {

                minutos--;

                segundos = 59;

            }

        }

        else {

            segundos--;

        }



        actualizarTemporizador();

    }, 1000);

}

function pausarPomodoro() {

    clearInterval(intervalo);

}

function reiniciarPomodoro() {

    clearInterval(intervalo);

    minutos = 25;

    segundos = 0;

    actualizarTemporizador();

}