
let itemsProducts= document.getElementById("list-products-details");
let buttonCar = document.getElementById("button-id");


function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}

window.onload = function(){

    const idProducto = serachURL();
    let iD= JSON.parse(localStorage.getItem(idProducto));
    addItem(iD)

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
              <a type="submit" href="./carritoCompras.html" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784; ">
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

buttonCar.addEventListener("submit",function(e){
  let addLocalStorage =[];
  if(localStorage.getItem("Carrito") == null){

    let item ={
        id:0,
        name: iD.name,
        img: iD.img,
        description: iD.description,
        size: iD.size,
        costo:iD.costo
    }/* Object item */
    
    addLocalStorage.push(item);
    window.localStorage.setItem("Carrito", JSON.stringify(addLocalStorage));
    

}else{

    
    let newProducts = JSON.parse(localStorage.getItem("Carrito"))
    let x = parseInt(newProducts.length,10)

    let item ={
      id:x,
      name: iD.name,
      img: iD.img,
      description: iD.description,
      size: iD.size,
      costo:iD.costo
    }/* Object item */ 
    
    newProducts.push(item)
    localStorage.setItem("Carrito", JSON.stringify(newProducts));

}


});