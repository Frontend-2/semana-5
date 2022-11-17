// Vamos implementar esta funcion en el script de Clase 13 al principio.
// La idea es que antes de la carga de la window hagamos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {

    // 👇 objeto que obtenemos del storage
    const usuario = JSON.parse(localStorage.getItem('user'));

    // chequeamos las propiedades del objeto
    
    
    if(usuario !== null){
        // 👇utilizamos destructuring para separar las variables
        const { email, password, rol, terminos } = usuario;
        console.log("Usuario");
        console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}`);
    }else{
        location.replace('./')
        localStorage.clear();
    }

}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
