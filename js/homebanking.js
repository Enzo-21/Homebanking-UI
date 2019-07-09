/*
NOTA IMPORTANTE:

Para poder ingresar
                    Clave: 1234
*/

//Declaración de variables

let nombreUsuario = 'Enzo';
let saldoCuenta = 5000;
let limiteExtraccion = 2000;
let clave = 1234;

//Funciones que suman y restan dinero a la cuenta

function sumarDinero(cantidadDeDinero) {
    saldoCuenta += cantidadDeDinero;
}

function restarDinero(cantidadDeDinero) {
    saldoCuenta -= cantidadDeDinero;
}

//Limitar la extracción de dinero alert

function limitarExtracción() {
    alert('No tienes suficientes fondos. Prueba con un monto menor.')
}

//Sólo billetes de $100
function soloBilletesDeCien() {
    alert('Sólo puedes extraer billetes de $100')
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


function cambiarLimiteDeExtraccion() {
    let limiteExtraccionNuevo = parseInt(prompt('Ingresá el nuevo limte de extracción: '));
    limiteExtraccion = limiteExtraccionNuevo;
    if (isNaN(limiteExtraccionNuevo)) {
        alert('Por favor, ingresa un monto en números')

    } else {
        actualizarLimiteEnPantalla();
        alert('Podrás extraer hasta: ' + limiteExtraccionNuevo)
    }
}

function extraerDinero() {
    let montoParaExtraer = parseInt(prompt('Ingresá el monto que necesitás extraer:'));
    let saldoAnterior = saldoCuenta;

    if (montoParaExtraer > saldoCuenta) {
        limitarExtracción();
        extraerDinero();
    } else if (montoParaExtraer > limiteExtraccion) {
        alert('El monto que querés extraer supera tu límite de extracción. Probá con un monto menor')
        extraerDinero();
    } else if (isNaN(montoParaExtraer)) {
        //Si no se ingresa ningún valor o el usuario presiona "cancelar", no se ejecuta nada.
    } else if (montoParaExtraer % 100 != 0) {
        soloBilletesDeCien();
    } else {
        restarDinero(montoParaExtraer);
        actualizarSaldoEnPantalla();
        alert('Tu saldo anterior: ' + saldoAnterior + '\nExtracción: ' + montoParaExtraer + '\nTu nuevo saldo será: ' + saldoCuenta);
    }
}

function depositarDinero() {
    let montoParaDepositar = parseInt(prompt('Ingresá el monto que querés depositar:'));
    let saldoAnterior = saldoCuenta;

    if (isNaN(montoParaDepositar)) {
        //Si no se ingresa ningún valor o el usuario presiona "cancelar", no se ejecuta nada.
    } else {
        sumarDinero(montoParaDepositar);
        actualizarSaldoEnPantalla();
        alert('Tu saldo anterior: ' + saldoAnterior + '\nDepositaste: ' + montoParaDepositar + '\nTu nuevo saldo será: ' + saldoCuenta);
    }


}

//Pago de servicios

const agua = 350;
const telefono = 425;
const luz = 210;
const internet = 570;

/*Función que no permite pagar un servicio cuyo valor sea mayor al dinero disponible.
En caso de que sí se pueda, la funcion retorna un alert()*/

function montoServicio(elegirServicio) {
    let saldoAnterior = saldoCuenta;
    if (elegirServicio > saldoCuenta) {
        alert('Ups! \n No tenés fondos suficientes para pagar este servicio.')
    } else if (elegirServicio <= saldoCuenta) {
        alert('Pagaste este servicio con éxito. A continuación se muestran los detalles: \n \nPagaste: $' + elegirServicio + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + (saldoCuenta - elegirServicio));
        restarDinero(elegirServicio);
        actualizarSaldoEnPantalla();
    } else {

    }
}

function pagarServicio() {
    let elegirServicio = prompt('Ingresá el número que se corresponda con el servicio que querés pagar: \n\n1: Agua ($350) \n2: Teléfono ($425) \n3: Luz ($210) \n4: Internet ($570)');


    switch (elegirServicio) {
        case '1':
            montoServicio(agua);
            break;

        case '2':
            montoServicio(telefono);
            break;

        case '3':
            montoServicio(luz);
            break;

        case '4':
            montoServicio(internet);
            break;

        case null:
            break;

        default:
            alert('Por favor, ingresá una opción válida')
            break;
    }
}

//Transferencias de dinero

let cuentaAmigaUno = 1234567
let cuentaAmigaDos = 7654321

function verificarMontoDeTransferencia(montoTransferencia) {
    let saldoAnterior = saldoCuenta;
    if (montoTransferencia > saldoCuenta) {
        alert('Ups! \nEl monto que querés transferir es mayor a tu saldo disponible.')
    } else if (montoTransferencia <= saldoCuenta) {
        let cuentaAmiga = prompt('\nIngresá el CBU de la cuenta a la que querés transferirle $' + montoTransferencia);

        switch (cuentaAmiga) {
            case '1234567':
                alert('\nTransferiste $' + montoTransferencia + ' a tu cuenta amiga con CBU: ' + cuentaAmiga + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + (saldoCuenta - montoTransferencia))
                restarDinero(montoTransferencia);
                actualizarSaldoEnPantalla();
                break;

            case '7654321':
                alert('\nTransferiste $' + montoTransferencia + ' a tu cuenta amiga con CBU: ' + cuentaAmiga + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + (saldoCuenta - montoTransferencia))
                restarDinero(montoTransferencia);
                actualizarSaldoEnPantalla();
                break;

            default:
                alert('\nNo se concretó la operación. \n\nRecordá que solo podés transferir dinero a tus cuentas amigas: \nCuenta Amiga Uno - CBU: 1234567 \nCuenta Amiga Dos - CBU: 7654321 ')
                break;
        }

    } else {

    }

}

//Cambiar contraseña

function cambiarContrasena() {
    let nuevaContraseña = parseInt(prompt('Ingrese su nueva clave numérica de 4 dígitos:'));
    let cantidadDeDigitos = nuevaContraseña.toString().length;
    
    if (isNaN(nuevaContraseña)) {
        alert('Tu contraseña debe contener 4 dígitos numéricos');
    } else if (cantidadDeDigitos > 4) { 
        alert('Tu contraseña es demasiado larga')
    } else if (cantidadDeDigitos < 4) { 
        alert('Tu contraseña es demasiado corta')
    } else {
        alert('¡Contraseña modificada con éxito!\n\nSu clave anterior: ' + clave + '\nSu nueva clave es: ' + nuevaContraseña);
        clave = nuevaContraseña;
    }

}

function transferirDinero() {
    let montoTransferencia = parseInt(prompt('\nPor favor, ingresá el monto a transferir:'))
    verificarMontoDeTransferencia(montoTransferencia);
}
//Funcion que oculta elementos del html (Usada para cuando el usuario ingresa mal la contraseña)
function ocultarElementos() {
    document.getElementsByClassName('links').style.display = 'none';
}

function iniciarSesion() {
    let claveDeIngreso = parseInt(prompt('Ingresa tu clave de homebanking para acceder a tu cuenta:'))

    //Ingreso correcto
    if (claveDeIngreso === clave) {
        alert('Bienvenido Enzo!')

    //Ingreso incorrecto
    } else {
        nombreUsuario = ''
        alert('\nIngresaste un código incorrecto. Por cuestiones de seguridad hemos retenido el dinero de esta cuenta. \n\nSi eres el propietario por favor comunícate al 0800-444-ACÁMICA para recuperar tu cuenta.');
        saldoCuenta = 0;
        limiteExtraccion = 0;
        document.getElementById('cuenta').style.display = 'none';
        document.getElementById('cuenta-suspendida').style.display = 'block';
    }




}


iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}