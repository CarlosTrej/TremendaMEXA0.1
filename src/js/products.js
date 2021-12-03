
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
    <form class="form-inline my-2 my-lg-0">
      
      <ul class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge;">
            Bienvenido
           </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./addcard.html?usuarioactivo=${idsesion}" style="font-size:large;">
             Agregar Producto
            </a>
            <a class="nav-link" type="click" id="cerrarsesion" style="font-size:large;">
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





let text= `[{"id":1,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/53354671_579503035870606_6664139277111411912_n_begudt.jpg",
 "description": "Mandil elaborado en piel genuina de res. Cortado, ensamblado y cosido totalmente a mano.",
 "size":"S, M, L", "costo": "2000"},{"id":2,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg",
 "description": "Mandiles en piel de res hechos completamente a mano.",
 "size":"S, M, L","costo":"1600"},{"id":3,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg",
 "description": "Corte de lujo en loneta color oro viejo y bolsas color chocolate, aplicaciones desmontables en piel color tabaco, tirantes desmontables y ajustables con estabilizador de cuero hechos a mano. "
 ,"size":"S, M, L", "costo": "1600"},{"id":4,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/59771119_129001591615867_4798543424333610055_n_kjumpx.jpg",
 "description": "Con tirantes en cuero de res y estabilizador trasero elaborados completamente a mano, etiqueta de cuero personalizada con nombre, ambas desmontables para su mayor cuidado y durabilidad.",
 "size":"S, M, L","costo":"1450"},{"id":5,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png",
 "description": "En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables. ",
 "size":"S, M, L", "costo":"1350"},{"id":6,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/71189068_673387299850155_4273578602593480175_n_iauq2i.jpg",
 "description": "En loneta obscura sublimada y tirantes textiles fijos al mandil, personalizado con logo.",
 "size":"S, M, L", "costo":"950"},{"id":7,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png",
 "description": "Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano. ",
 "size":"S, M, L", "costo": "1100"},{"id":8,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/117581943_135060258267915_7377965767371888466_n_m60usg.jpg",
 "description": "Corte básico en mezclilla industrial y bolsas en loneta, con tirantes textiles fijos al mandil, personalizado con logo en etiqueta de cuero desmontable y aplicaciones en piel.",
 "size":"30x20cm", "costo":"1100"},{"id":9,"name":"Bolsa", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png",
 "description": "Realizadas en mezclilla industrial color azul con correas y aplicaciones en piel de res.",
 "size":"30x20cm","costo":"300"},{"id":10,"name":"Bolsa ", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png",
 "description": "Realizadas en mezclilla industrial color azul índigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada " 
,"size":"30x20cm", "costo": "300"},{"id":11,"name":"Café Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
 "size":"500grs", "costo":"180"},{"id":12,"name":"Café Tostado Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
"size":"500grs", "costo": "110"}]`;

let itemsProducts= document.getElementById("list-products");

let products = JSON.parse(text);

addItem(products)



function addItem(products){

  let id =1;
  

  products.forEach(function(item){

    let other = format(item.costo)
    itemsProducts.innerHTML +=`
    <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
          <div class="card " style="height: 650px;">
            <img src="${item.img}" class="card-img-top" height= "50%" alt="...">
             <div class="card-body" margin-bottom= "15px">
                <center><h5 class="card-title">${item.name}</h5></center>
                <p class="card-text">Presentación</p>
                <p class="card-text">${item.size}</p>
                <p class="card-text">$${other} MXN</p> 
                <center><a type="button" href="./details.html?id=${item.id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">Ver más</a></center>
              </div>
          </div><br>
        </div>
    <br>
    `
    let element = {
      id:item.id,
      name:item.name,
      img: item.img,
      size: item.size,
      costo: item.costo,
      description: item.description
    }
    localStorage.setItem(id, JSON.stringify(element));
    id++
   

  })
  if(localStorage.getItem("producto")){
    executeJSON();
    
  }

  
  
}//function



function executeJSON(){

  let x = (products.length)+1
  
  let valueInLocalStorage = localStorage.getItem("producto");
  
  let addLocalStorage =[];

  addLocalStorage = JSON.parse(valueInLocalStorage);

  let elementsProducts2= document.getElementById("list-products");
  
    addLocalStorage.forEach(element => {
      elementsProducts2.innerHTML += `
      <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
      <div class="card" style="height: 650px;">
            <img src="${element.img}" class="card-img-top" height= "50%" alt="...">
             <div class="card-body" margin-bottom= "15px">
                <center><h5 class="card-title">${element.name}</h5></center>
                <p class="card-text">Presentación</p>
                <p class="card-text">${element.size}</p>   
                <p class="card-text">$${format(element.costo)} MXN</p> 
                <center><a type="button" href="./details.html?id=${x}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">Ver mas </a></center>
              </div>
          </div><br>
        </div><br>
     `
    
    let elemento = {
      id:x,
      name:element.name,
      img: element.img,
      size: element.size,
      costo: element.costo,
      description: element.description
    }
    localStorage.setItem(x, JSON.stringify(elemento));
    x++

  });
    


  }/* executeJSON */

  
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
