
let Total = document.querySelector("#total-value span");
let tbody = document.querySelector(".tbody")

window.onload = function(){
    carValid()
    if(serachURL() == null){
        addItemCar()
    }else{
        location.href="./carritoCompras.html"
    }/* else */
}/* window.onload */

function serachURL(){
    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;
}/* serachUR */

function carValid(){
    let carStay = JSON.parse(localStorage.getItem("carrito"));
    if(carStay == null){
        let carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log("no habia carrito y se creo")
        addCar()
    }else{
        addCar()
    }/* else */
}/* carValid */

function addCar(){

    const idProducto = serachURL();
    if(idProducto == null){
        addItemCar
    }else{
        let iD= JSON.parse(localStorage.getItem(idProducto));
        let element={
            id:iD.id,
            name:iD.name,
            img: iD.img,
            size: iD.size,
            costo: parseInt(iD.costo,10),
            description: iD.description,
            cantidad: 1
        }
        let flag=false;
        let newItem = [];
        newItem = JSON.parse(localStorage.getItem("carrito"));
        newItem.forEach(elemento=>{
            if(element.id === elemento.id){
                elemento.cantidad+=element.cantidad
                localStorage.setItem("carrito", JSON.stringify(newItem));
                flag=true; 
            }
        })
        if(!flag){    
            newItem.push(element);
            localStorage.setItem("carrito", JSON.stringify(newItem)); 
        }
        addItemCar()
    }/* else */    
}/* addCar */

function addItemCar(){
    let newItem = [];
    newItem = JSON.parse(localStorage.getItem("carrito"));
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
                <span>${item.cantidad}</span>
            </td>
            <td class="subtot">
                $<span>0</span>
            </td>
            <td class="rm">
                <button class="btn btn-dark" id="delete" type="button"><b>Borrar</b></button>
            </td>
        </tr>
        `
        calculaTodoTotal();
        tbody.querySelectorAll("#delete").forEach(item =>{
            item.addEventListener('click', removeitem); 
        })/* forEach.addEventListener */   
    }); /* newItem.forEach */

}/* addItemCar */


function updateSub(producto){
    const priceUnit = producto.querySelector(".pu span").textContent;
    const quantify = producto.querySelector(".qty span").textContent;
    const total = (parseFloat(priceUnit))*(parseFloat(quantify));
    const subtotal = producto.querySelector(".subtot span");
    subtotal.innerHTML= parseFloat(total);
    return total
}/* updateSub */


function calculaTodoTotal(){
    const productos = document.getElementsByClassName("product");
    let totaldeTotales = 0;
    for (let i = 0; i < productos.length ; i++){
        totaldeTotales += updateSub(productos[i]); 
    }/* for */
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


function removeitem(e){
    e.preventDefault();
    const buttonClicked = e.target;
    
    let newItem = [];
    newItem = JSON.parse(localStorage.getItem("carrito"));
    let flag = true;
    newItem.forEach(elemento=>{

        if(elemento.cantidad > 1){
            elemento.cantidad-=1;
            calculaTodoTotal();
            localStorage.setItem("carrito", JSON.stringify(newItem));
            flag =false;   
            tbody.innerHTML="";
        }
    })/* forEach */

    if(flag == false){
        let newItem = [];
        newItem = JSON.parse(localStorage.getItem("carrito"));
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
                    <span>${item.cantidad}</span>
                </td>
                <td class="subtot">
                    $<span>0</span>
                </td>
                <td class="rm">
                    <button class="btn btn-dark" id="delete" type="button"><b>Borrar</b></button>
                </td>
            </tr>
            `
            calculaTodoTotal();
            
            tbody.querySelectorAll("#delete").forEach(item =>{
                item.addEventListener('click', removeitem); 
            })/* forEach.addEventListener */   
        }); /* newItem.forEach */
    }/* ifFlagFalse */

    if(flag){
        newItem.shift();
        localStorage.setItem("carrito", JSON.stringify(newItem));
        buttonClicked.closest(".product").remove(); 
    }/* ifFlagTrue */

    calculaTodoTotal();
}/* removeitem */





