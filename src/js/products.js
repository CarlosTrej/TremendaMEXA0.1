let text= `[{"id":1,"name":"Café Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
 "size": "Presentación 500gr", "costo":"180.00"},{"id":2,"name":"Café Tostado Orgánico", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg",
 "description": "Hecho con el mejor café tostado, originario de Chiapas",
"size": "Presentación 250gr", "costo": "110"},{"id":3,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/53354671_579503035870606_6664139277111411912_n_begudt.jpg",
 "description": "Mandil elaborado en piel genuina de res. Cortado, ensamblado y cosido totalmente a mano.",
 "size": "Tamaño: S ,M ,L", "costo": "2000.00"},{"id":4,"name":"Mandil, corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg",
 "description": "En Mandiles en piel de res hechos completamente a mano.",
 "size": "Tamaño: S ,M ,L","costo":"1600.00"},{"id":5,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg",
 "description": "Corte de lujo en loneta color oro viejo y bolsas color xocolat, aplicaciones desmontables en piel color tabaco, tirantes desmontables y ajustables con estabilizador de cuero hechos a mano. "
 ,"size": "Tamaño: S ,M ,L", "costo": "1600.00"},{"id":6,"name":"Mandil corte de Lujo", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/59771119_129001591615867_4798543424333610055_n_kjumpx.jpg",
 "description": "Con tirantes en cuero de res y estabilizador trasero elaborados completamente a mano, etiqueta de cuero personalizada con nombre, ambas desmontables para su mayor cuidado y durabilidad.",
 "size": "Tamaño: S ,M ,L","costo":"1450.00"},{"id":7,"name":"Mandil corte Industrial con sublimado", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png",
 "description": "En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables. ",
 "size": "Tamaño: S ,M ,L", "costo":"1350"},{"id":8,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/71189068_673387299850155_4273578602593480175_n_iauq2i.jpg",
 "description": "En loneta obscura sublimada y tirantes textiles fijos al mandil, personalizado con logo.",
 "size": "Tamaño: S ,M ,L", "costo":"950.00"},{"id":9,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png",
 "description": "Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano. ",
 "size": "Tamaño: S ,M ,L", "costo": "1100.00"},{"id":10,"name":"Mandil corte Industrial", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/117581943_135060258267915_7377965767371888466_n_m60usg.jpg",
 "description": "Corte básico en mezclilla industrial y bolsas en loneta, con tirantes textiles fijos al mandil, personalizado con logo en etiqueta de cuero desmontable y aplicaciones en piel.",
 "size": "Tamaño: S ,M ,L", "costo":"1100.00"},{"id":11,"name":"Bolsa", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png",
 "description": "Realizadas en mezclilla industrial color azul con correas y aplicaciones en piel de res.",
 "size": "Medidas: 30 x 20","costo":"300.00"},{"id":12,"name":"Bolsa ", 
"img":"https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png",
 "description": "Realizadas en mezclilla industrial color azul indigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada " 
,"size": "Medidas: 30x 20", "costo": "300.00"}]`;

let itemsProducts= document.getElementById("list-products");

let products = JSON.parse(text);

addItem(products)


function addItem(products){

  let id =1;
  

  products.forEach(function(item){
    itemsProducts.innerHTML +=`
    <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
          <div class="card ">
            <img src="${item.img}" class="card-img-top" height= "50%" alt="...">
             <div class="card-body" margin-bottom= "15px">
                <center><h5 class="card-title">${item.name}</h5></center>
                <p class="card-text">${item.size}</p>   
                <p class="card-text">$${item.costo} MXN</p> 
                <center><a type="button" href="./details.html?id=${item.id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">Ver mas... </a></center>
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
    x = id

  })
  if(localStorage.getItem("producto")){
    executeJSON();
    
  }

  
  
 
  
  
}//function



function executeJSON(){
  
  let valueInLocalStorage = localStorage.getItem("producto");
  let addLocalStorage =[];
  addLocalStorage = JSON.parse(valueInLocalStorage);
  let elementsProducts= document.getElementById("list-products2");
    addLocalStorage.forEach(element => {
      elementsProducts.innerHTML += `
      <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
          <div class="card ">
            <img src="${element.img}" class="card-img-top" height= "50%" alt="...">
             <div class="card-body" margin-bottom= "15px">
                <center><h5 class="card-title">${element.name}</h5></center>
                <p class="card-text">${element.size}</p>   
                <p class="card-text">$${element.costo} MXN</p> 
                <center><a type="button" href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #0E8784;">Ver mas... </a></center>
              </div>
          </div><br>
        </div>
    <br> `
    });
    let element = {
      
      name:item.name,
      img: item.img,
      size: item.size,
      costo: item.costo,
      description: item.description
    }
    localStorage.setItem("producto", JSON.stringify(element));
    


  }/* executeJSON */

  

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
