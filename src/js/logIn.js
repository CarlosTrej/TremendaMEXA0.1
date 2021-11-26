

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
        
        if(password.value.length <8){

            password.classList.add("is-invalid");
            alertModal("La contraseña debe contener al menos 8 caractére. ")
            password.value = "";

        }else{
            let user={
                mail: email.value,
                pass: password.value
            }

            let addLocalStorage =[];
            
            addLocalStorage.push(user);
            
            
                
            if(localStorage.getItem("usuario") == null){
                /* validTrue(); */
                
                
               window.localStorage.setItem("usuario", JSON.stringify(addLocalStorage));
                
            }else{
                let flag = false

                let newUser = []
                newUser = JSON.parse(localStorage.getItem("usuario"))

                newUser.forEach(function( element){
                    
                    if(email.value == element.Email && password.value == element.Password){
                        
                        return flag = true;
                        
                    }else{
                        
                        return flag = false;
                    }
                }); 

                if(flag){
                    
                    alertModal("Inicio de sesión válido.")
                    clearInputs(email,password)
                    location.href = "./../index.html";

                }else{
                    
                    alertModal("Verifica el correo electrónico y/o contraseña.")
                    email.classList.add("is-invalid");
                    password.classList.add("is-invalid");

                }


            }


        }

    }/* else before valid inputs */
        
    });/* form addenevtlistener */


function alertModal(text){
    Swal.fire({
        title: 'Alerta',
        text: `¡${text}!`,
        icon: 'warning',
        cancelButtonColor: '#d33',
        cancelButtonText: "Okay"
      })
}/*  alertModal */

/* function passwordValid(password){
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.exec(password.value) == null){
        return false
    }else{
        return true;
    }
} *//* passwordValid */


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