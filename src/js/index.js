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
      
      
      sayHello(serachURL())
      iconSesion.innerHTML=`
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="sesiontools">
        <ul class="navbar-nav ml-auto">
          <a class="nav-link" type="click" id="navbarScrollingDropdown" style="font-size:large;">
            Cerrar Sesión
          </a>
          <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./pages/addcard.html?id=${idsesion}" style="font-size:large;">
            Agregar Producto
          </a>
          <li class="nav-item">
            <a class="nav-link" href="./pages/carritoCompras.html"><i id="icono"class="bi bi-cart4"></i></a>
          </li>
        </ul>
      </div>
      `;
      let button = iconSesion.querySelector("#navbarScrollingDropdown");
      if(button.getAttribute('listener') !=='true' ){
          button.addEventListener('click', function(e){
              alertmodal()
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
              <li><a class="dropdown-item"href="./pages/logIn.html" >Inicia sesion</a></li>
              <li><a class="dropdown-item" href="./pages/registro.html">Registro</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./pages/carritoCompras.html"><i id="icono"class="bi bi-cart4"></i></a>
          </li>
        </ul>
      </div>
      `;
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
        location.href = "./index.html";
      }
    })

    function closeSesion(e){
        const aEvent = e.target;
        alertmodal()

    }
}/* alertmodal */

function sayHello(text){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Bienvenid@ ${text}`,
    showConfirmButton: false,
    timer: 1500
  })
}/* sayHello */