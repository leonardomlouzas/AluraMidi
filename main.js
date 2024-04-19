function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou não é um audio');
    };
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (event) {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function (event) {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.remove('ativa');
        }
    };
}
