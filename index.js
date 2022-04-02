class Articulo{

    constructor(articulo,precio){

        this.articulo = articulo;
        this.precio = parseInt(precio); 
    }

    precioTotal(){

        return this.precio * 1.21;
    }
}

const producto1 = new Articulo("almohadon",3000);
const producto2 = new Articulo("tela",1000);
const producto3 = new Articulo("sillon",20000);
const producto4 = new Articulo("silla",8000);
const producto5 = new Articulo("cuerina",2000);
const producto6 = new Articulo("cuero",4000);

let articuloElegido = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6
]

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

let eleccion = prompt(
    `Hola ${nombre}, bienvenido a Tapisar, digite tu producto a comprar:
    1 para ${producto1.articulo}, precio ${producto1.precio}.
    2 para ${producto2.articulo}, precio ${producto2.precio}.
    3 para ${producto3.articulo}, precio ${producto3.precio}.
    4 para ${producto4.articulo}, precio ${producto4.precio}.
    5 para ${producto5.articulo}, precio ${producto5.precio}.
    6 para ${producto6.articulo}, precio ${producto6.precio}.`
)

let total = 0;

function eleccionProducto(){

    console.log(`${nombre}, tus prendas elegidas son ${articuloElegido[eleccion-1].articulo}`);
    
    total += articuloElegido[eleccion-1.].precioTotal();

    while(eleccion != "no"){
        eleccion = prompt(
            `${nombre}, ¿desea realizar alguna otra compra?
            De lo contrario digite "no":
            1 para ${producto1.articulo}, precio ${producto1.precio}.
            2 para ${producto2.articulo}, precio ${producto2.precio}.
            3 para ${producto3.articulo}, precio ${producto3.precio}.
            4 para ${producto4.articulo}, precio ${producto4.precio}.
            5 para ${producto5.articulo}, precio ${producto5.precio}.
            6 para ${producto6.articulo}, precio ${producto6.precio}.`
        )

        console.log(`Total a pagar ${total}`);
    }
}

eleccionProducto();

function pagar(){

    let formaPago = parseInt(prompt(`${nombre}, su monto a pagar es de ${total}
    1 para credito
    2 para debito: `))

    if(formaPago === 1){

        let pago = prompt('Ingresa el numero de tu tarjeta: ');

        let cuotas = parseInt(prompt(`${nombre}, seleccione las cuotas deseadas
        1 para 3 cuotas con 10% de recargo
        2 para 6 cuotas con 15% de recargo
        3 para 12 cuotas con 20% de recargo`));

        let recargo = 0;
        let cuota = 0;

        switch(cuotas) {
            case 1:
                recargo = total * 0.10;
                total += recargo;

                alert(`${nombre}, su pago fue aprobado
                Total abonado ${total}`);
                break;
            case 2:
                recargo = total * 0.15;
                total += recargo;

                alert(`${nombre}, su pago fue aprobado
                Total abonado ${total}`);
                break;
            case 3:
                recargo = total * 0.20;
                total += recargo;

                alert(`${nombre}, su pago fue aprobado
                Total abonado ${total}`);
                break;
        }
    }
    else if(formaPago === 2){

        let pago = prompt('Ingresa el numero de tu tarjeta: ');

        alert(`${nombre}, tu pago fue aprobado
        Total abonado ${total}`); 
    }
    else{
        alert("No se pudo realizar el pago, intente nuevamente")
    }
}