
function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("usuarioactivo");
    return idParam;

}/* serachURL */

window.onload = function(){

    const idsesion = serachURL();
    
    initSesion(idsesion);

}/* window.onload */


function initSesion(idsesion){

    
    let iconSesion = document.getElementById("sesiontools");

    if(serachURL() != null){
       
        iconSesion.innerHTML=`
        <a class="navbar-brand" href="./../index.html?usuarioactivo=${idsesion}">
        <img src="../src/images/logoTremenda.png" width="50" height="50" class="d-inline-block align-top" alt="">
      TremendaMexa</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="./../index.html?usuarioactivo=${idsesion}">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./contacto_form.html?usuarioactivo=${idsesion}">Contacto</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="./products.html?usuarioactivo=${idsesion}">Mandiles</a>
              <a class="dropdown-item" href="./products.html?usuarioactivo=${idsesion}">Bolsas</a>
              <a class="dropdown-item" href="./products.html?usuarioactivo=${idsesion}">Café</a>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nosotros
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="./tremendaMexaAbout.html?usuarioactivo=${idsesion}">TremendaMexa</a>
              <a class="dropdown-item" href="./acercaDeNosotros.html?usuarioactivo=${idsesion}">Acerca de Nosotros</a>
            </div>
          </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" id="formBlack" style="color: black;">
        
        <ul class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge; color: black;">
              Bienvenido
             </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./addcard.html?usuarioactivo=${idsesion}" style="font-size:large; color: black;">
               Agregar Producto
              </a>
              <a class="nav-link" type="click" id="cerrarsesion" style="font-size:large; color: black;">
              Cerrar Sesión
             </a>
            </div>
        </ul>
          <ul class="nav-item active">
            <a class="nav-link"href="./carritoCompras.html?usuarioactivo=${idsesion}" ><i id="icono" class="bi bi-cart4"></i></a>
          </ul>
      </form>
    </div>
  
    
    `;
    let button = iconSesion.querySelector("#cerrarsesion");
    if(button.getAttribute('listener') !=='true' ){
        button.addEventListener('click', function(e){
            alertmodall()
        })
        

    }
}else{
    iconSesion.innerHTML=`
    <a class="navbar-brand" href="./../index.html">
          <img src="../src/images/logoTremenda.png" width="50" height="50" class="d-inline-block align-top" alt="">
        TremendaMexa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="./../index.html">Inicio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./contacto_form.html">Contacto</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./products.html">Mandiles</a>
                <a class="dropdown-item" href="./products.html">Bolsas</a>
                <a class="dropdown-item" href="./products.html">Café</a>
              </div>
            </li>
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nosotros
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./tremendaMexaAbout.html">TremendaMexa</a>
                <a class="dropdown-item" href="./acercaDeNosotros.html">Acerca de Nosotros</a>
              </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          
          <ul class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i   id ="icono" class="bi bi-person-circle"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./logIn.html">Inicia sesion</a>
                <a class="dropdown-item" href="./registro.html">Registro</a>
              </div>
          </ul>
            <ul class="nav-item active">
              <a class="nav-link"href="./carritoCompras.html" ><i id="icono" class="bi bi-cart4"></i></a>
            </ul>
        </form>
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
        cancelButtonText: 'Cancelar' 
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

let form = document.querySelector("#add-form");
cloud();
let cloudImage;
                        
function cloud ()
{
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'rookiesquad', 
        uploadPreset: 'vmuljc8k'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            cloudImage = JSON.stringify(result.info.secure_url)
            console.log(cloudImage)
            
          }
        }
      )
      
      document.getElementById("upload_widget").addEventListener("click", function(){
          myWidget.open();
        }, false);
}

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

     

          if(describcion.value.length == 0){

              alertModal("El campo descripción no puede quedar vacío");
          }else{

              if(tamano.value.length == 0){

                  alertModal("El campo del tamaño no puede quedar vacío");
              }else{

                  if(precio_number <=0){

                      alertModal("Verifíca el precio del producto");

                  }else{

                    if(cloudImage == null){
                        alertModal("Se necesita una imagen.")
                    }else{

                        

                        if(localStorage.getItem("producto") == null){
                  

                            let item ={
                                id:0,
                                name: nombre.value,
                                img: cloudImage.replace('\"',''),
                                description: describcion.value,
                                size: tamano.value,
                                costo:precio.value
                            }/* Object item */
                            
                            addLocalStorage.push(item);
                            window.localStorage.setItem("producto", JSON.stringify(addLocalStorage));
                            validTrue();
                            clear(nombre, describcion, tamano, precio);
  
                        }else{
  
                             
                            let newProducts = JSON.parse(localStorage.getItem("producto"))
                            let x = parseInt(newProducts.length,10)
  
                            let item ={
                                id: x,
                                name: nombre.value,
                                img: cloudImage.replace('\"',''),
                                description: describcion.value,
                                size: tamano.value,
                                costo:precio.value
                            }/* Object item */ 
                            
                            newProducts.push(item)
                            localStorage.setItem("producto", JSON.stringify(newProducts));
                            validTrue();
                            clear(nombre, describcion, tamano, precio);
  
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


function clear(nombre, describcion, tamano, precio){
  nombre.value = "";
  describcion.value = "";
  tamano.value = "";
  precio.value = "";
}/* clear */
