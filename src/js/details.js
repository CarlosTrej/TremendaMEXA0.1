
let itemsProducts= document.getElementById("list-products");


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
      <div class="g-col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
            <img src="${iD.img}" class="card-img-top" height= "60%"  width="45%" style="align-content: center; border-radius: 8%; ">
          </div>
          <div class="g-col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          
              <h3 class="card-title"><b>${iD.name}</b></h3><br><br>
              <h4 class="card-text">${iD.size}</h4><br>   
              <h4 class="card-text">$${iD.costo} MXN</h4><br><br>
              <form>
                <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5"><label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4"><label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3"><label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2"><label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1"><label for="radio5">★</label>
                </p>
              </form>
              <a type="button" href="./carritoCompras.html" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">
                  <b>Agregar al carrito</b>
              </a>   
          </div>
          <div class="row">
          <div class="col-12" style="text-align: justify;"><br>
          <h4 class="card-title">Información del producto</h4><br>
          <p class="card-text" >${iD.description}</p><br>
          </div>
          <div class="col"><br></div>
        </div>           
      `
    
  }//function