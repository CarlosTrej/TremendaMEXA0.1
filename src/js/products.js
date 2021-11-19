let text= `[{"name":"Café Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
 "size": "Presentación 500gr", "costo":"$180.00MXN"},{"name":"Café Tostado Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
"size": "Presentación 250gr", "costo": "$110MXN"},{"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/53354671_579503035870606_6664139277111411912_n_begudt.jpg",
 "description": "Mandil elaborado en piel genuina de res. Cortado, ensamblado y cosido totalmente a mano.",
 "size": "Tamaño: S ,M ,L", "costo": "$2000.00MXN"},{"name":"Mandil, corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg",
 "description": "En Mandiles en piel de res hechos completamente a mano.",
 "size": "Tamaño: S ,M ,L","costo":"$1600.00MXN"},{"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg",
 "description": "Corte de lujo en loneta color oro viejo y bolsas color xocolat, aplicaciones desmontables en piel color tabaco, tirantes desmontables y ajustables con estabilizador de cuero hechos a mano. "
 ,"size": "Tamaño: S ,M ,L", "costo": "$1600.00MXN"},{"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/59771119_129001591615867_4798543424333610055_n_kjumpx.jpg",
 "description": "Con tirantes en cuero de res y estabilizador trasero elaborados completamente a mano, etiqueta de cuero personalizada con nombre, ambas desmontables para su mayor cuidado y durabilidad.",
 "size": "Tamaño: S ,M ,L","costo":"$1450.00MXN"},{"name":"Mandil corte Industrial con sublimado", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png",
 "description": "En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables. ",
 "size": "Tamaño: S ,M ,L", "costo":"$1350MXN"},{"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/71189068_673387299850155_4273578602593480175_n_iauq2i.jpg",
 "description": "En loneta obscura sublimada y tirantes textiles fijos al mandil, personalizado con logo.",
 "size": "Tamaño: S ,M ,L", "costo":"$950.00MXN"},{"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png",
 "description": "Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano. ",
 "size": "Tamaño: S ,M ,L", "costo": "$1100.00MXN"},{"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/117581943_135060258267915_7377965767371888466_n_m60usg.jpg",
 "description": "Corte básico en mezclilla industrial y bolsas en loneta, con tirantes textiles fijos al mandil, personalizado con logo en etiqueta de cuero desmontable y aplicaciones en piel.",
 "size": "Tamaño: S ,M ,L", "costo":"$1100.00MXN"},{"name":"Bolsa", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png",
 "description": "Realizadas en mezclilla industrial color azul con correas y aplicaciones en piel de res.",
 "size": "Medidas: 30 x 20","costo":"$300.00MXN"},{"name":"Bolsa ", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png",
 "description": "Realizadas en mezclilla industrial color azul indigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada " 
,"size": "Medidas: 30x 20", "costo": "$300.00MXN"}]`;

let itemsProducts= document.getElementById("list-products");

let products = JSON.parse(text);

addItem(products)

function addItem(products){

  products.forEach(function(item){
    itemsProducts.innerHTML +=`
    <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
      <div class="card ">
        <img src="${item.img}" class="card-img-top" height= "50%" alt="...">
        <div class="card-body" margin-bottom= "15px">
        <center><h5 class="card-title">${item.name}</h5></center>
          <p class="card-text">${item.size}</p>   
          <p class="card-text">${item.costo}</p> 
          <div id="accordionExample">
          <div  id="headingOne">
          <p class="mb-0">  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Ver más...
        </button>
        </div> </div>
  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        ${item.description}
      </div>
    </div><br>
  </div>
</div><br>
          </div>
      </div>
    </div> `

  })
  executeJSON()
  
  
}//function







function executeJSON(){
  let valueInLocalStorage = window.localStorage.getItem("producto");
  let addLocalStorage =[];
  addLocalStorage = JSON.parse(valueInLocalStorage);
  let elementsProducts= document.getElementById("list-products2");
  
    addLocalStorage.forEach(element => {
      elementsProducts.innerHTML += `
      <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
        <div class="card ">
          <img src="${element.img}" class="card-img-top" height= "50%" alt="...">
          <div class="card-body" margin-bottom= "15px">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.size}</p>   
            <p class="card-text">${element.costo.value}</p> 
            <div id="accordionExample">
            <div  id="headingOne">
            <p class="mb-0">  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Ver más...
          </button>
          </div> </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
          ${element.description}
        </div>
      </div><br>
    </div>
  </div><br>
            </div>
        </div>
      </div> `
      
    });

  }/* executeJSON */

