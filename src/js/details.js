
let itemsProducts= document.getElementById("list-products");

function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}

window.onload = function(){

    const idProducto = serachURL();
    console.log("Agregue producto "+ idProducto);
    /* buscar en el localstorage que existe el id; si existe puede crear una card en detail. 
        */
    let iD= JSON.parse(localStorage.getItem(idProducto));
    console.log(typeof(iD));
    addItem(iD)

}/* window.onload */

function addItem(iD){
  
      itemsProducts.innerHTML =`
      <center>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" ><br><br>
            <center><h1 class="card-title">${iD.name}</h1></center><br>
            <img src="${iD.img}" class="card-img-top" height= "50%"  width="50%" style="align-content: center;">
            <div class="card-body" margin-bottom= "15px">
                <h2 class="card-text">${iD.description}</h2><br>
                <h3 class="card-text">${iD.size}</h3>   
                <h3 class="card-text">$${iD.costo} MXN</h3> <br>
                <center>
                    <a type="button" href="./carritoCompras.html" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">
                    <b>Agregar al carrito</b>
                    </a>
                </center>
            </div>
        </div>
     </center>

      
      `
      
  
    
    
   
    
    
  }//function

