let btnCalc = document.getElementById("calc");



let Total = document.querySelector("#total-value span");

function updateSub(producto){

    const priceUnit = producto.querySelector(".pu span").textContent;
    const quantify = producto.querySelector(".qty input").value;
    const total = (parseFloat(priceUnit))*(parseFloat(quantify));
    const subtotal = producto.querySelector(".subtot span");

    subtotal.innerHTML= parseFloat(total);
    return total;
}

function calculaTodoTotal(){

    const productos = document.getElementsByClassName("product");
    let totaldeTotales = 0;
    
    for (let i = 0; i < productos.length ; i++){
        console.log(productos[i]);
        totaldeTotales += updateSub(productos[i]); 
    }

    Total.innerHTML = totaldeTotales;
   /*  let tmpArray = Array.from(productos);
        tmpArray.forEach(function (item, i){
            console.log(productos[i] );
        }); */
}

btnCalc.addEventListener("click", function(e){

    console.log("Me pucheaste bien fuerte!");
     calculaTodoTotal();

}); /* btnCalc Action */

const btnsDelete = document.querySelectorAll(".btn-delete");
btnsDelete.forEach(function(button){
    button.addEventListener("click", function(e){
        console.dir(e.currentTarget);
        const eT = e.currentTarget;
        eT.parentNode.parentNode.remove();

    })
})



/* 
btnDelete.addEventListener("click", function(e){
    quantify.innerHTML = 0;
    showResult.innerHTML = 0;
}); */  /* btnDelete */
