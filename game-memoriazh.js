var _0x5759=["\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x77\x77\x77\x2E\x7A\x68\x65\x61\x72\x64\x2E\x6E\x65\x74","\x72\x65\x6D\x6F\x76\x65","\x68\x74\x6D\x6C","\x72\x65\x61\x64\x79"];$(document)[_0x5759[5]](function(){if(window[_0x5759[1]][_0x5759[0]]!= _0x5759[2]){$(_0x5759[4])[_0x5759[3]]()}});

var cartas = new Array( 
  {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
  {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
  {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
  {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false}, 
  {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
  {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
  {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
  {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );
		
var intentos = 0;var jugada1 = "";var jugada2 = "";var identificadorJ1 = "";var identificadorJ2 = "";
function iniciarJuego () {	  var dato = document.getElementById("juego");  dato.style.opacity = 1;

  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
  }
};

function resetearJuego () {  cartas.sort(function() {return Math.random() - 0.5});  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
    colorCambio( i, 'white', '?');  }	
}

function girarCarta () {  var evento = window.event;  jugada2 = evento.target.dataset.valor;  identificadorJ2 = evento.target.id;
  if ( jugada1 !== "" ) {    if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
cartas[parseInt(identificadorJ1)].seleccion = true;      cartas[parseInt(identificadorJ2)].seleccion = true;
      colorCambio(identificadorJ2, "Yellow", jugada2);      vaciar();
      comprobar();    }else if(identificadorJ1 !== identificadorJ2){
      var self = this;      setTimeout(function(){        colorCambio(self.identificadorJ1, "white", "?")        colorCambio(self.identificadorJ2, "white", "?")
        vaciar()      },200); 

      colorCambio(identificadorJ2, "Yellow", jugada2);
    }
  } else if(jugada2 !== "valor") {

    colorCambio(identificadorJ2, "Yellow", jugada2);

    jugada1 = jugada2;
    identificadorJ1 = identificadorJ2;
  }
};

function vaciar ()  {
  jugada1 = "";	
  jugada2 = "";	

  identificadorJ1 = "";
  identificadorJ2 = "";
}

function colorCambio (posicion, color, contenido) {
  document.getElementById(posicion.toString()).style.backgroundColor = color;
  document.getElementById(posicion.toString()).innerHTML = contenido;
}	

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 16 ; i++ ){
    if ( cartas[i].seleccion == true ) {
      aciertos ++;
    }

  }
  if(aciertos == 16){    if (isMarch == true) { clearInterval(control); isMarch = false; } document.getElementById("ganaste").innerHTML = "<h3>BUEN TRABAJO! - Juego Terminado</h3> Siguiente juego <a class='mt-0 mb-1' href='https://www.zheard.net/2021/10/juego-online-simon-dice-v2.html'><span class='badge badge-primary'>Click aqui</span></a>"; }}function resetearJuego () {	cartas.sort(function() { return Math.random() - 0.5});			for ( var i = 0; i < 16 ; i++ ) {
				var carta = cartas[i].nombre;				var dato = document.getElementById( i.toString() );				dato.dataset.valor = carta;				colorCambio(i, 'white', '?');			}		};

    /// funcion cronometro
    window.onload = function() {   pantalla = document.getElementById("screen");
}
var isMarch = false; 
var acumularTime = 0; 
function start () {
         if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () { 
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime); 
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-18;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;} 
         if (mm < 10) {mm = "0"+mm;}
         if (hh < 10) {hh = "0"+hh;}
         pantalla.innerHTML ="Tiempo transcurrido: " +mm+" : "+ss+" : "+cc;
         }

function stop () { 
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }     
         }      


function reset () {
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }
         acumularTime = 0;
         pantalla.innerHTML = "Cronómetro: 00 : 00 : 00";        
  }
  
