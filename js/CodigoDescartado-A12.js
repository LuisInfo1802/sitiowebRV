
var formulario = document.getElementById('contacto');
var nombre;
var correo;
var telefono;
var mensaje;



function leerFormulario() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    telefono = document.getElementById('telefono').value;
    mensaje = document.getElementById('mensaje').value;
}


function comprobarCampos()
{
    leerFormulario();

    if(nombre=="")
    {
        alert("LLENE EL CAMPO NOMBRE");
    }
    else if(correo=="")
    {
        alert("LLENE EL CAMPO CORREO");
    }
    else if(telefono=="")
    {
        alert("LLENE EL CAMPO TELEFONO");
    }
    else if(mensaje=="")
    {
        alert("LLENE EL CAMPO MENSAJE")
    }
    else{

    }

}
