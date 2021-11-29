let btnCalc = document.getElementById("calc");
let Total = document.querySelector("#total-value span");
let tbody = document.querySelector(".tbody")

function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}/* serachUR */

window.onload = function(){

    const idProducto = serachURL();
    let iD= JSON.parse(localStorage.getItem(idProducto));
    addCar(iD)
    
    
}/* window.onload */


function addCar(iD){

    let element={

        id:iD.id,
        name:iD.name,
        img: iD.img,
        size: iD.size,
        costo: parseInt(iD.costo,10),
        description: iD.description

    }

    let arrayCar = [];
    if(localStorage.getItem("Carrito") == null){

        arrayCar.push(element);
        localStorage.setItem("Carrito", JSON.stringify(arrayCar));
        addItemCar()

    }else{

        let newItem = [];
        newItem = JSON.parse(localStorage.getItem("Carrito"));
        newItem.push(element);
        localStorage.setItem("Carrito", JSON.stringify(newItem));
        addItemCar()
        

    }
    

}/* addCar */

function addItemCar(){
    
    let newItem = [];
    newItem = JSON.parse(localStorage.getItem("Carrito"));
    
    newItem.forEach(function(item){

        tbody.innerHTML += `
        <tr class="product" >
            <td class="name">
                <span>${item.name}</span>
            </td>
            <td class="pu">
                $<span>${item.costo}</span>
            </td>
            <td class="qty">
                <label>
                    <input type="text" value = "0" min="0">
                </label>
            </td>
            <td class="subtot">
                $<span>0</span>
            </td>
            <td class="rm">
                <button class="btn btn-dark" id="delete" type="button"><b>Borrar</b></button>
            </td>
        </tr>
        `
        
        tbody.querySelector("#delete").addEventListener('click', removeitem);    
        
    }); /* newItem.forEach */

}/* addItemCar */



function updateSub(producto){

    const priceUnit = producto.querySelector(".pu span").textContent;
    const quantify = producto.querySelector(".qty input").value;
    const total = (parseFloat(priceUnit))*(parseFloat(quantify));
    const subtotal = producto.querySelector(".subtot span");
    subtotal.innerHTML= parseFloat(total);
    return total;

}/* updateSub */


function calculaTodoTotal(){

    const productos = document.getElementsByClassName("product");
    let totaldeTotales = 0;
    
    for (let i = 0; i < productos.length ; i++){

        totaldeTotales += updateSub(productos[i]); 

    }
    Total.innerHTML = format(totaldeTotales)+" MXN";
   
}/* calculaTodoTotal */


function format(num){

    if(num < 1000){

      return num;

    }else if(!isNaN(num)){

    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    return num;

    }
  }/* format */


btnCalc.addEventListener("click", function(e){

     calculaTodoTotal();

}); /* btnCalc Action */

function removeitem(e){

    e.preventDefault();
    const buttonClicked = e.target;
    buttonClicked.closest(".product").remove();
    
}





