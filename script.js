let userName= document.querySelector('#name');
let lastName=document.querySelector('#apellido');
let email = document.querySelector('#email');
let telefono= document.querySelector('#numero');
let fecha = document.querySelector('#fecha');
let mensaje= document.querySelector('#mensaje');

const form = document.getElementById('contactanos');

form.addEventListener('submit', function(event) {

    document.getElementById('msjError').innerText = '';
    let errors = [];  // Array para almacenar los errores

    // Validar nombre
    userName.value.trim();
    if (userName === '') {
        errors.push("El nombre es obligatorio.");
    }

    // Validar apellido
    lastName.value.trim();
    if (apellido === '') {
        errors.push("El apellido es obligatorio.");
    }

    // Validar correo
    email.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errors.push("Por favor, ingresa un correo electrónico válido.");
    }

    // Validar teléfono
    telefono.value.trim();
    const telefonoPattern = /^[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{3}$/;
    if (!telefono.match(telefonoPattern)) {
        errors.push("El teléfono debe seguir el formato 000-000-000.");
    }

    // Validar fecha
    fecha.value;
    if (!fecha) {
        errors.push("Debes escoger una fecha.");
    }

    // Validar mensaje
    mensaje.value.trim();
    if (mensaje === '') {
        errors.push("El mensaje es obligatorio.");
    }

    // Si hay errores, mostrar y evitar el envío del formulario
    if (errors.length > 0) {
        event.preventDefault();  
        document.getElementById('msjError').innerText = errors.join(' \n');
    }
});