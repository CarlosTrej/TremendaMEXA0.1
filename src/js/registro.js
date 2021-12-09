/*identificamos el form por su id */
let form = document.getElementById("register-form");



form.addEventListener("submit",function(e){

    e.preventDefault();
    let name = document.getElementById("inputName");
    let apellido = document.getElementById("inputApellido");
    let email = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    let passwordEq = document.getElementById("inputPasswordEq");
    /* parseamos el dato phone a number 
    let phone_number=parseInt(phone.value,10);*/
    
    /* validacion del campo nombre */
    if(name.value.length == 0){
        /* para validar que no este vacío el campo nombre */
        alertModal("El campo nombre no puede quedar vacío");
    }else if(apellido.value.length == 0){
        /* No puede quedar vacio el compo apellido */
        alertModal("El campo apellido no puede quedar vacío");
    }else if(email.value.length <= 8 ){

        /* validación del campo email */
       // if(email.value.length <= 8 ){
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
        if(password.value.length<9 || password <= 0 ){
            alertModal("minimo 8 caracteres, verifica contraseña");
            password.value = "";
        }else{
            if(password.value != passwordEq.value){
                alertModal("Las contraseñas no son iguales");
                passwordEq.value="";
            }else{

                fetch('http://127.0.0.1:8085/api/usuarios/',{
                    method: 'POST',
                    body: JSON.stringify({
                        "nombre": name.value,
                        "apellido": apellido.value,
                        "correo": email.value,
                        "password": password.value,
                        
                    }),
                    headers: {
                          'Content-Type': 'application/json',
                          'Access-Control-Allow-Origin': '*' 
                      }
                    }).then(resp => {
                      validTrue();
                      clearInputs(name,email,apellido,password,passwordEq);
                    }).catch(function(error){
                      console.log(error);
                    })
                    
            }/* newUser */
                
            }/*Evalua Contraseñas*/

        }/*contraseña y confirmacion*/
});/* form.addEventListener */
    
function validTrue(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Felicidades! Registro exitoso.',
        showConfirmButton: false,
        timer: 1500
      })
}/*  validTrue */
  
function alertModal(text){
    Swal.fire({
        title: 'Alerta',
        text: `¡${text}!`,
        icon: 'warning',
        cancelButtonColor: '#d33',
        cancelButtonText: "Okay"
      })
}/* function alertModal */

function clearInputs(name,email,apellido,password,passwordEq){
    name.value = "";
    email.value = "";
    apellido.value = "";
    password.value = "";
    passwordEq.value = "";
    email.classList.remove("is-invalid");
    /* phone.classList.remove("is-invalid"); */
}/* function clearInputs */


