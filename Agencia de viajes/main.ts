let usuariosArray = new Array();

function informacionUsuario()
{
    let nombre: string = document.getElementById("name").value;
    let telefono: number = document.getElementById("telefono").value;
    let email: string = document.getElementById("email").value;
    let destino: string = document.getElementById("destino").value;
    let datosj: JSON = {"Name": nombre, "Teléfono": telefono, "E-mail": email, "Destino": destino}

    usuariosArray.push(datosj);
    alert ("Hemos recopilado tus datos. Pronto te contactaremos." + JSON.stringify(usuariosArray));
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