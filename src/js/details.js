

function searchSesion(){
  let sesion = sessionStorage.getItem('sesion');
  return sesion;
}



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

let itemsProducts= document.getElementById("list-products-details");
let buttonCar = document.getElementById("button-id");


function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}

window.onload = function(){
    const idsesion = searchSesion();
    initSesion(idsesion);
    const idProducto = serachURL();
    
    if(idProducto==null){
      console.log(idProducto)
      location.href="./products.html"
    }else{
      let iD= JSON.parse(localStorage.getItem(idProducto));
      addItem(iD)
    }

}/* window.onload */



function addItem(iD){
  
  
      itemsProducts.innerHTML =`
      <br>
      <div class="g-col-7 col-sm-12 col-md-6 col-lg-7 col-xl-7" >
        <img src="${iD.img}" id="img-detail" class="card-img-top" height= "550px">
      </div>
      <div class="g-col-1 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="g-col-4 col-sm-12 col-md-5 col-lg-4 col-xl-4" id="content-detail"><br>
          <h3 class="card-title"><b>${iD.name}</b></h3><br><br>
          <h4 class="card-title"><b>Presentación</b></h4><br>
          <h4 class="card-title">${iD.size}</h4><br>
          <br> 
          <h4 class="card-text">$${iD.costo} MXN</h4><br>
          <form>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5"><label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4"><label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3"><label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2"><label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1"><label for="radio5">★</label>
            </p>
          </form>
              <a type="submit" href="./carritoCompras.html?id=${iD.id}"  class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784; ">
                  <b>Agregar al carrito</b>
              </a>   
      </div>
          <div class="row" >
            <div class="col-12" style="text-align: justify; padding: 50px;"><br>
              <h3 class="card-title">Información del producto</h3><br>
              <h4 class="card-text" >${iD.description}</h4><br>
            </div>
            <div class="col"><br></div>
          </div>           
      `

      
  }//function


