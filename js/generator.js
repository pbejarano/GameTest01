var print = ""

function imprimir(){

  for (var e = 0; e < 83; e++){
        print += 'function funcionesA'+e+'(){<br>puntuacionUnoR = preguntas['+e+'].respuestas[0].puntuacionUno;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br> }<br>';

        print += 'function funcionesB'+e+'(){<br>puntuacionUnoR = preguntas['+e+'].respuestas[1].puntuacionDos;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br> }<br>';
        print += 'function funcionesC'+e+'(){<br>puntuacionUnoR = preguntas['+e+'].respuestas[2].puntuacionTres;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br> }<br>';
        print += 'function funcionesD'+e+'(){<br>puntuacionUnoR = preguntas['+e+'].respuestas[3].puntuacionCuatro;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br> }<br>';
        print += 'function funcionesE'+e+'(){<br>puntuacionUnoR = preguntas['+e+'].respuestas[4].puntuacionCinco;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br> }<br>';
        print += '//----------------------------------------------<br>';











        document.getElementById("imprimir").innerHTML = print;

        console.log(e);
      } 

  
  
}