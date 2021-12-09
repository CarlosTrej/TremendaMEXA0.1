
function searchSesion(){
  let sesion = sessionStorage.getItem('sesion');
  return sesion;
}

window.onload = function(){
  const idsesion = searchSesion();
  initSesion(idsesion);
}/* window.onload */


function initSesion(idsesion){
  let iconSesion = document.querySelector("#sesiontools")
  if(searchSesion() !== null){
      sayHello();
      iconSesion.innerHTML=`
      <a class="navbar-brand" href="./index.html">
          <img src="../src/images/logoTremenda.png" width="50" height="50" class="d-inline-block align-top" alt="">
        TremendaMexa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="./index.html">Inicio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./pages/contacto_form.html">Contacto</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./pages/products.html">Mandiles</a>
                <a class="dropdown-item" href="./pages/products.html">Bolsas</a>
                <a class="dropdown-item" href="./pages/products.html">Café</a>
              </div>
            </li>
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nosotros
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./pages/tremendaMexaAbout.html">TremendaMexa</a>
                <a class="dropdown-item" href="./pages/acercaDeNosotros.html}">Acerca de Nosotros</a>
              </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" id="formBlack" style="color: black;">
          
          <ul class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge; color: black;">
            	  Bienvenido
               </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./pages/addcard.html?usuarioactivo=${idsesion}" style="font-size:large; color: black;">
            	   Agregar Producto
          	    </a>
                <a class="nav-link" type="click" id="cerrarsesion" style="font-size:large; color: black;">
            	  Cerrar Sesión
               </a>
              </div>
          </ul>
            <ul class="nav-item active">
              <a class="nav-link"href="./pages/carritoCompras.html" ><i id="icono" class="bi bi-cart4"></i></a>
            </ul>
        </form>
      </div>
      `;
      let button = iconSesion.querySelector("#cerrarsesion");
      if(button.getAttribute('listener') !=='true' ){
          button.addEventListener('click', function(e){
              alertmodal()
          })
      }
  }
}/* initSesion */

function alertmodal(){
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
        location.href = "./index.html";
      }
    })/* fire */

    function closeSesion(e){
        const aEvent = e.target;
        alertmodal()
    }/* closeSesion */

}/* alertmodal */

function sayHello(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Bienvenid@`,
    showConfirmButton: false,
    timer: 1500
  })
}/* sayHello */