productosCarrito = new Array();




function agregaProducto(name, price, pic) { 
   productosCarrito.push({"name":name, "price": price, "pic" : pic});
   console.log(productosCarrito.length);
}

function mostrarPrincipal() { 
    document.getElementById("totalCompra").style.display = "none";
    document.getElementById("seleccionar").style.display = "block";
}

function mostrarCarrito() { 
    document.getElementById("totalCompra").style.display = "block";
    document.getElementById("seleccionar").style.display = "none";

    console.log(productosCarrito.lenght);

    var html = "";
    var total = 0;

    for (var i = 0; i < productosCarrito.length; i++)
    {
        html += '<div class="row" style="margin-top: 2%;"><div class="col-6 col-md-6 col-xl-6"><div class="card"><img class="card-img-top" src="'+productosCarrito[i].pic +'" style=width:150px alt="Pantalón"></div></div><div class="col-6 col-md-6 col-xl-6"><div class="card"><div class="card-body"><h4 class="card-title">'+productosCarrito[i].name+'<br>'+productosCarrito[i].price+'€</h4></div></div></div></div>';
        total += productosCarrito[i].price;
    }
    html += '<h4 style="text-align:center; margin-top: 2%">Total ' + total + '€</h4>';
    document.getElementById("totalCompra").innerHTML = html;

}


