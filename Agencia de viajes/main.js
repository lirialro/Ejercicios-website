var usuariosArray = new Array();
function informacionUsuario() {
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var destino = document.getElementById("destino").value;
    var datosj = { "Name": nombre, "Teléfono": telefono, "E-mail": email, "Destino": destino };
    usuariosArray.push(datosj);
    alert("Hemos recopilado tus datos. Pronto te contactaremos." + JSON.stringify(usuariosArray));
}
function filtrarR() {
    var usuariosConR = new Array();
    console.log(usuariosArray[0].Name);
    for (var i = 0; i < usuariosArray.length; i++) {
        for (var j = 0; j < usuariosArray[i].Name.length; j++) {
            if (usuariosArray[i].Name[j] == 'R' || usuariosArray[i].Name[j] == 'r') {
                usuariosConR.push(usuariosArray[i]);
                break;
            }
        }
    }
    alert("Nombres con R: " + JSON.stringify(usuariosConR));
}
