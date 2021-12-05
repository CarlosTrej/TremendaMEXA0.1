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
                obtener_localStorage();
                guadar_localStorage();
                new Swal({
                     icon: 'success',
                     title: 'Success...',
                     text: 'Guardado exitosamente!',
               
                })
                    
                /*  guardaUs(); */
                /* guadar_localStorage(); */
                clearInputs(name,email,apellido,password,passwordEq);
                alertModal("Felicidades");

            }/* newUser */
                
            }/*Evalua Contraseñas*/

        }/*contraseña y confirmacion*/
});/* form.addEventListener */
    


function alertModal(text){
    Swal.fire({
        title: 'Registro exitoso',
        text: `¡${text}!`,
        icon: 'success',
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

function guadar_localStorage() {
    //Obtenemos los valores del html.
    let id = document.getElementById("inputEmail").value;
    let clave = document.getElementById("inputPassword").value;

    //Si el id existe en el localStorage vamos a comprobar la clave
    if (id in localStorage) {
        //Si la clave coincide le permitimos el acceso.
        if (clave == localStorage.getItem(id)) {
            location.href="newregister.html";
        }
        //Si la clave no concuerda, le informamos de que no es correcta.
        else {
            alert("Su contraseña es incorrecta.");
        }
    }
    else { 
        //Si el id no se encuentra, le preguntamos si quiere agregarlo.
        let answer = prompt("Su Id y pass no se encuentran registrado desea guardarlos (S/N)");
            if (answer == 's' || answer == 'S') {
                localStorage.setItem(id,clave);
                document.getElementById("inputEmail").value = "";
                document.getElementById("inputPassword").value = "";
            }
    }
}
function obtener_localStorage(){
    if(localStorage.getItem("usuario")){
        //existe un registro en el localStorage
        let newUser=JSON.parse(localStorage.getItem("usuario"));
        console.log("usuario");
    }else{
        console.log("no hay ");
        /* localStorage.setItem("newUser",JSON.stringify()) */
        guadar_localStorage();
        console.log("se guardo");
    }
}
function guadar_localStorage(){
    let nameUs = document.getElementById("inputName").value;
    let apellidoUS = document.getElementById("inputApellido").value;
    let emailUs = document.getElementById("inputEmail").value;
    let passwordUs = document.getElementById("inputPassword").value;

    let usuario={
        "nombre":nameUs,
        "Apellido":apellidoUS,
        "Email":emailUs,
        "Password":passwordUs
    }
    let listaUsuario = JSON.parse(localStorage.getItem("usuario")) || [];
    listaUsuario.push(usuario);
    let listaUsuarioJSON = JSON.stringify(listaUsuario);
    localStorage.setItem("usuario",listaUsuarioJSON);
}
