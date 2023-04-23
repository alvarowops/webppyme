// Selecciona el botón y el cuadro de entrada de correo electrónico
var boton = document.querySelector('#boton');
var correo = document.querySelector('#correo');

// Agrega un escucha de evento al botón
boton.addEventListener('click', function() {
	// Obtiene el valor del cuadro de entrada de correo electrónico
	var valorCorreo = correo.value;
	
	// Verifica si el correo electrónico es válido
	if (valorCorreo.indexOf('@') !== -1) {
		alert('Correo electrónico válido');
	} else {
		alert('Correo electrónico no válido');
	}
});
