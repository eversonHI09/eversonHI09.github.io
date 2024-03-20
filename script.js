/*mi js*/ 
const encriptar = document.getElementById("btn-encriptar");
const desencriptar = document.getElementById("original");//
const copy = document.getElementById("copiar");//
const textoInicial = document.getElementById("ingresoTexto");
const textInfo = document.getElementById("textoInfo");

const button = document.querySelector("button");
const textFinal = document.getElementById("textoFinal");
const rigth = document.getElementById("rigth")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	
}
/**/ 
// Función para validar el mensaje y mostrar advertencia si no son letras minúsculas sin acentos y sin números
function validarMensaje(mensaje) {
    // Verificar si el mensaje contiene solo letras minúsculas sin acentos y sin números
    let patron = /^[a-z\s]+$/;
    if (!patron.test(mensaje)) {
        // Si el mensaje no contiene solo letras minúsculas sin acentos y sin números, mostrar mensaje de advertencia
        document.getElementById('popup').style.display = 'block';
        return false;
    }
    return true;
}








button.addEventListener("click", () => {
    // Disable the button to prevent multiple clicks
    button.disabled = true;
    document.getElementById('overlay').style.display = 'block';

    // Add the loading animation CSS class
    button.classList.add('button-loader');

    // Obtener el texto ingresado y validar
    const texto = textoInicial.value.toLowerCase();
    const esValido = validarMensaje(texto);

    // Si el mensaje es válido, realizar las operaciones de encriptación o desencriptación
    if (esValido) {
        if (texto != "") {
            // Código de encriptación o desencriptación...
        } else {
            alert("Ingrese texto para encriptar");
        }
    }

    // Resto del código...
});

// Resto del código...











button.addEventListener("click", () => {
  // Disable the button to prevent multiple clicks
  button.disabled = true;
  document.getElementById('overlay').style.display = 'block';

  // Add the loading animation CSS class
  button.classList.add('button-loader');

  //añdir resultados de ejecucion ***************************

  /* encriptar y desencriptar */
  
  let remplazar = [
  	["e", "enter"],
  	["o", "ober"],
  	["i", "imes"],
  	["a", "ai"],
  	["u", "ufat"]
  ];
  
  const texto = textoInicial.value.toLowerCase();
  
  if (texto != "") {
  	function encript(newtext) {
  		for (let i = 0; i < remplazar.length; i++) {
  			if (newtext.includes(remplazar[i][0])) {
  				newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
  			};
  		};
  		return newtext;
  	};
  	remplace(encript(texto));
  } else {
  	alert("Ingrese texto para encriptar");
  };

/*desencriptando*/ 

desencriptar.addEventListener('mousedown', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
	};

	

});


// Ocultar el pop-up cuando se libera el botón
desencriptar.addEventListener('mouseup', function() {
	remplace(encript(texto));
  });
  

  /* boton copiar*/


  copy.addEventListener("click", () => {
  	let texto = textFinal;
  	texto.select();
  	document.execCommand('copy');
  
  
  });

  //####-----------------------------------------------

  // Simulate an asynchronous task (replace this with your actual task)
  setTimeout(() => {
    // Re-enable the button
    button.disabled = false;

    // Remove the loading animation CSS class
    button.classList.remove("button-loader");
    document.getElementById('overlay').style.display = 'none';
    mostrarPopup();
  }, 2000); // Simulated 2-second task

});

document.getElementById('btnRetorno').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  
function mostrarPopup() {
  document.getElementById('popup').style.display = 'block';
}



