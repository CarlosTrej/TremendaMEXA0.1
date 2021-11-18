

let form = document.getElementById("formLogin");

form.addEventListener("submit", function(e){

    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    
    if(email.value.length <= 8 ){

        email.classList.add("is-invalid");
        alertModal("Tu correo necesíta al menos 8 carácteres para ser válido");
        email.value = "";

    }else if(email.value.length >=40){

        email.classList.add("is-invalid");
        alertModal("Tu correo excede el máximo de  40 carácteres para ser válido");
        email.value = "";

    }else if(email.value == 0){

        alertModal("El campo correo electrónico no puede quedar vacío");

    }else{
        
        if(passwordValid(password) == false){

            password.classList.add("is-invalid");
            alertModal("La contraseña debe contener al menos 8 caractéres, con una letra mayuscula, un número y un carácter especial. ")
            password.value = "";

        }else{

            validTrue();

        }/* end password if */

       
    }/* end if */


});/*form.addEventListener  */

function alertModal(text){
    Swal.fire({
        title: 'Alerta',
        text: `¡${text}!`,
        icon: 'warning',
        cancelButtonColor: '#d33',
        cancelButtonText: "Okay"
      })
}/*  alertModal */

function passwordValid(password){
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.exec(password.value) == null){
        return false
    }else{
        return true;
    }
}/* passwordValid */


function validTrue(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inicio de sesión valido.',
        showConfirmButton: false,
        timer: 1500
      })
      clearInputs(email,password);

}/*  validTrue */


function clearInputs(email,password){
    email.value = "";
    password.value = "";
    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");
}/* clearInputs */