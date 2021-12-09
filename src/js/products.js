
function searchSesion(){
  let sesion = sessionStorage.getItem('sesion');
  return sesion;
}

window.onload = function(){
  const idsesion = searchSesion();
  initSesion(idsesion);
}/* window.onload */


function initSesion(idsesion){
  let iconSesion = document.getElementById("sesiontools");
  if(searchSesion() != null){
     
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
    <form class="form-inline my-2 my-lg-0" id="formBlack" style="color: black;">
      
      <ul class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge; color: black;">
            Bienvenido
           </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./addcard.html" style="font-size:large; color: black;">
             Agregar Producto
            </a>
            <a class="nav-link" type="click" id="cerrarsesion" style="font-size:large; color: black;">
            Cerrar Sesión
           </a>
          </div>
      </ul>
        <ul class="nav-item active">
          <a class="nav-link"href="./carritoCompras.html" ><i id="icono" class="bi bi-cart4"></i></a>
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
        sessionStorage.removeItem('sesion')
        location.href = "./../index.html";
      }
    })/* fire */

    function closeSesion(e){
        const aEvent = e.target;
        alertmodal()
    }/* closeSesion */
}/* alertmodal */





const endpoint = "http://127.0.0.1:8085/api/productos/";
const productosPromise = fetch(endpoint);
let itemsProducts= document.getElementById("list-products");

productosPromise
.then(function(data){
  return data.json();
}).then(function(data){
  addItem(data)
}).catch(function(error){
  console.log(error);
  /* como se trabaja enJSON, se necesita convertirlo en algo que yo pueda interpretar */
})/* productosPromise */


function addItem(products){
  products.forEach(function(item){
    let other = format(item.precio)
    itemsProducts.innerHTML +=`
    <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
          <div class="card " style="height: 650px;">
            <img src="${item.img}" class="card-img-top" height= "50%" alt="...">
             <div class="card-body" margin-bottom= "15px">
                <center><h5 class="card-title">${item.nombre}</h5></center>
                <p class="card-text">Presentación</p>
                <p class="card-text">${item.presentacion}</p>
                <p class="card-text">$${other} MXN</p> 
                <center><a type="button" href="./details.html?id=${item.id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">Ver más</a></center>
              </div>
          </div><br>
        </div>
    <br>
    `
    let element = {
      id:item.id,
      name:item.nombre,
      img: item.img,
      size: item.presentacion,
      costo: item.precio,
      description: item.descripcion
    }
    localStorage.setItem(item.id, JSON.stringify(element));
  })
  
}//function
  
function format(num){
  if(num < 1000){
    return num;
  }else if(!isNaN(num)){
  num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
  num = num.split('').reverse().join('').replace(/^[\.]/,'');
  return num;
  }
}/* format */  

function alertDescription(description){
    Swal.fire({
      title: '<strong>Descripción</strong>',
      icon: 'info',
      html:
        `${description.value}`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
}/* alertDescription */
