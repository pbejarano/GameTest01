var print = ""

function imprimir(){

  for (var e = 0; e < 83; e++){
        print += 'var paseA'+e+'=true;<br>';
        print += 'function funcionesA'+e+'(){<br>if (paseA'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[0].puntuacionUno;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseA'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseB'+e+'=true;<br>';
        print += 'function funcionesB'+e+'(){<br>if (paseB'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[1].puntuacionDos;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseB'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseC'+e+'=true;<br>';
        print += 'function funcionesC'+e+'(){<br>if (paseC'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[2].puntuacionTres;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseC'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseD'+e+'=true;<br>';
        print += 'function funcionesD'+e+'(){<br>if (paseD'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[3].puntuacionCuatro;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseD'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseE'+e+'=true;<br>';
        print += 'function funcionesE'+e+'(){<br>if (paseE'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[4].puntuacionCinco;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseE'+e+' = false;<br>}<br>}<br>';
        print += '//----------------------------------------------<br>';

        print += 'function vidasFamUno' + e + '(){<br>if(conteoVidasA == 0){<br>document.getElementById("vida' + e + 'A").innerHTML = vidasCambio;<br>conteoVidasA++;<br>}else if(conteoVidasA == 1){<br>document.getElementById("vida' + e + 'B").innerHTML = vidasCambio;<br>conteoVidasA++;<br>}<br>else if(conteoVidasA == 2){<br>document.getElementById("vida' + e + 'C").innerHTML = vidasCambio;<br>}<br>}<br>function vidasFamDos' + e + '(){<br>if(conteoVidasB == 0){<br>document.getElementById("vida' + e + 'D").innerHTML = vidasCambio;<br>conteoVidasB++;<br>}else if(conteoVidasB == 1){<br>document.getElementById("vida' + e + 'E").innerHTML = vidasCambio;<br>conteoVidasB++;<br>}<br>else if(conteoVidasB == 2){<br>document.getElementById("vida' + e + 'F").innerHTML = vidasCambio;<br>}<br>}<br>';
        print += '//----------------------------------------------<br>';










        document.getElementById("imprimir").innerHTML = print;

        console.log(e);
      } 

  
  
}