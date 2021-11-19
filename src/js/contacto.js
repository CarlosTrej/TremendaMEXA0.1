
/* traigo el form por su id */
let form = document.getElementById("contact-form");



form.addEventListener("submit",function(e){

    e.preventDefault();
    let nme = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");
    /* parseamos el dato phone a number */
    let phone_number=parseInt(phone.value,10);
    
    /* validacion del campo nombre */
    if(nme.value.length == 0){
        /* para validar que no este vacío el campo nombre */
        alertModal("El campo nombre no puede quedar vacío");

    }else{

        /* validación del campo email */
        if(email.value.length <= 8 ){
            /* Para validar si el email es corto */
            email.classList.add("is-invalid");
            alertModal("Tu correo necesíta al menos 8 carácteres para ser válido");
            email.value = "";

        }else if(email.value.length >=40){
            /* Para validar si el email es demasiado largo*/
            email.classList.add("is-invalid");
            alertModal("Tu correo excede el máximo de  40 carácteres para ser válido");
            email.value = "";

        }else if(email.value.length == 0){
             /* para validar que no este vacío el campo email */
            alertModal("El campo correo electrónico no puede quedar vacío");
        
        }else{

            /* validaciones del campo telefono */
            if(phone.value.length<10 || phone_number <= 0 || phone.value.length >=11){
                /* Validar los 10 digitos del valor del campo teléfono */
                phone.classList.add("is-invalid");
                alertModal("Número de teléfono erróneo, verifica tu número");
                phone.value = "";

            }else if(isNaN(phone.value)){
                /* validar que no ingresen letras en el campo teléfono */
                phone.classList.add("is-invalid");
                alertModal("No ingresar palabras en el campo de teléfono");

            /* Validaciones del campo message */
            }else{
                    
                    if(message.value.length == 0 || message.value.length <20){
                        /* Validar el mínimo de caracteres del campo message */
                        alertModal("El campo texto necesita al menos 20 caracteres");
                    }else{
                        /* función para mandar el email */
                        sendEmail(nme,email,message,phone);
                    }/* sendEmail */

                }/* phone.values */

            }/* email.values */

        }/* nme.values */
        

});/* form.addEventListener */
    


function sendEmail(nme,email,message,phone){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "carlostrejo182@gmail.com",
        Password : "CEE868D15EBDAA1830EFDE0D2589DEB74A8B",
        To : 'carlostrejo182@gmail.com',
        From : "carlostrejo182@gmail.com",
        Subject : "This is the subject",
        Body : `Hola soy ${nme.value} mi correo es ${email.value} ${message.value} mi telefono es ${phone.value}`
    }).then(
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tus datos han sido enviados satisfactoriamente.',
            showConfirmButton: false,
            timer: 1500
          })
          
    );
    clearInputs(nme,email,message,phone);

}/* function sendEmail */

function alertModal(text){
    Swal.fire({
        title: 'Alerta',
        text: `¡${text}!`,
        icon: 'warning',
        cancelButtonColor: '#d33',
        cancelButtonText: "Okay"
        
      })
}/* function alertModal */

function clearInputs(nme,email,message,phone){
    nme.value = "";
    email.value = "";
    message.value = "";
    phone.value = "";
    email.classList.remove("is-invalid");
    phone.classList.remove("is-invalid");
}/* function clearInputs */