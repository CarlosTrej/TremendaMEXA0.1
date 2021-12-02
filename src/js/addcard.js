
function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}/* serachURL */

window.onload = function(){

    const idsesion = serachURL();
    
    initSesion(idsesion);

}/* window.onload */


function initSesion(idsesion){

    
    let iconSesion = document.getElementById("sesiontools");

    if(serachURL() != null){
        
        console.log(serachURL())
       
        iconSesion.innerHTML=`
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="sesiontools">
          <ul class="navbar-nav ml-auto">
            <a class="nav-link" type="click" id="navbarScrollingDropdown" style="font-size:large;">
              Cerrar Sesión
            </a>
            <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./addcard.html?id=${idsesion}" style="font-size:large;">
              Agregar Producto
            </a>
            <li class="nav-item">
              <a class="nav-link" href="./carritoCompras.html"><i id="icono"class="bi bi-cart4"></i></a>
            </li>
          </ul>
        </div>
        `;
        let button = iconSesion.querySelector("#navbarScrollingDropdown");
        if(button.getAttribute('listener') !=='true' ){
            button.addEventListener('click', function(e){
                alertmodall()
            })
            

        }
    }else{
        iconSesion.innerHTML=`
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="sesiontools">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                <i   id ="icono" class="bi bi-person-circle"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a class="dropdown-item"href="./logIn.html" >Inicia sesion</a></li>
                <li><a class="dropdown-item" href="./registro.html">Registro</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./carritoCompras.html"><i id="icono"class="bi bi-cart4"></i></a>
            </li>
          </ul>
        </div>
        `;
    }
}/* initSesion */

function alertmodall(){

    Swal.fire({
        title: '¿Quieres cerrar tu sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0E8784',
        cancelButtonColor: 'black',
        confirmButtonText: 'Cerrar sesión',
        cancelButtontext: 'Cancelar' 
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Haz cerrado sesión'
            
          )
          location.href = "./../index.html";
        }
      })

      function closeSesion(e){
          const aEvent = e.target;
          alertmodal()

      }
}/* alertmodal */


let form = document.querySelector("#add-form")


form.addEventListener("submit",function(e){

    e.preventDefault();
    
    let addLocalStorage =[];
    addLocalStorage.length
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

                        if(localStorage.getItem("producto") == null){

                            let item ={
                                id:0,
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

                        }else{

                             
                            let newProducts = JSON.parse(localStorage.getItem("producto"))
                            let x = parseInt(newProducts.length,10)

                            let item ={
                                id: x,
                                name: nombre.value,
                                img: imagen.value,
                                description: describcion.value,
                                size: tamano.value,
                                costo:precio.value
                            }/* Object item */ 
                            
                            newProducts.push(item)
                            localStorage.setItem("producto", JSON.stringify(newProducts));
                            validTrue();
                            clear(nombre, imagen, describcion, tamano, precio);

                        }
                        
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
