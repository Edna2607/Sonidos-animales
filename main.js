function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


/*DOS FORMAS DE HACER EL CICLO CON FOR O WHILE */

//FORMA 1 = FOR
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){ //Funcion anonima
        playSonido(idAudio);
    }

    //Para que cuando apreten una tecla del teclado la tecla se ponga de color rojo y de el sonido.
    tecla.onkeydown = function(evento){
        console.log(evento.code ==  'Space' || evento.code ==  'Enter' || evento.code == 'Tab' );
        if(evento.code == 'Space'){
            tecla.classList.add('activa');
        }
    }

    //Para que cuando suelten una tecla del teclado la tecla se ponga de color blanco.
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}









