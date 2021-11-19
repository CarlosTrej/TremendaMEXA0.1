
let form = document.querySelector("#add-form")


form.addEventListener("submit",function(e){

    e.preventDefault();
    
    let addLocalStorage =[];
    let nombre = document.getElementById("name");
    let imagen = document.getElementById("image");
    let describcion = document.getElementById("description");
    let tamano = document.getElementById("size");
    let precio = document.getElementById("price");
    let precio_number = parseFloat(precio.value);

    if(nombre.value.length == 0){

        alertModal("El campo nombre no puede quedar vacío");
    }else{

        if(imagen.value.length == 0){

            alertModal("El campo de la url de imágen no puede quedar vacío");
        }else if(URLValid(imagen) == false){

            alertModal("Verifíca la URL de la imagen");

        }else{

            if(describcion.value.length == 0){

                alertModal("El campo descripción no puede quedar vacío");
            }else{

                if(tamano.value.length == 0){

                    alertModal("El campo del tamaño no puede quedar vacío");
                }else{

                    if(precio_number <=0){

                        alertModal("Verifíca el precio del producto");

                    }else{
                        let item ={
                            
                            name: nombre.value,
                            img: imagen.value,
                            description: describcion.value,
                            size: tamano.value,
                            costo:precio.value
                        }/* Object item */
                        addLocalStorage.push(item);
                        window.localStorage.setItem("producto", JSON.stringify(addLocalStorage));
                        validTrue();
                        clear(nombre, imagen, describcion, tamano, precio);
                    }

                }
            }
        }
    }
});/* form addEventlistener *//* validaciones */

   

function validTrue(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nuevo producto añadido.',
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

function URLValid(imagen){
    regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/;
    if(regex.exec(imagen.value) == null){
        return false
    }else{
        return true;
    }
}/* URLValid*/

function clear(nombre, imagen, describcion, tamano, precio){
    nombre.value = "";
    imagen.value = "";
    describcion.value = "";
    tamano.value = "";
    precio.value = "";
}/* clear */
