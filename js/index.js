const iva=0.21;


const pedidos=[
	{
		id:21,
		pedido:[
			{abertura:1,cantidad:2},
			{abertura:2,cantidad:3},
		],
		total:0,
	},
	{
		id:1,
		pedido:[
			{abertura:2,cantidad:1},
		],
		total:0,
	}
]

const clientes=[
	{
		dni:"35764127",
		nombre:"pedro",
		direcion:"",
		compra:[21],
		vendedor:"1"
	},
	{
		dni:"33273700",
		nombre:"jesi",
		compra:[1],
		vendedor:"1",
	}
]

const vendedor=[
	{
		id:1,
		nombre:"pedro",
		contraseña:"123",
		clientes:["35764127","33273700"],
	},
	{
		id:2,
		nombre:"jesi",
		contraseña:"123",
		clientes:["35764127","33273700"],
	}
]

const abertura=[{
	id:1,
	nombre:"corrediza",
	cantidad:0,
	valor:125,
},
{
	id:2,
	nombre:"abrir",
	cantidad:0,
	valor:123,
},
{
	id:3,
	nombre:"puerta",
	cantidad:0,
	valor:122,
}
];

/* login de usuario */
const login=()=>{
	return contraseña === prompt(`ingrese su contraseña`);
};

const ingresoUsuario=()=>{
	let pass="";
	let idVendedor=null;
	let intentos=0;
	vendedor.map(elemento=>(
		console.log(`id: ${elemento.id}. Nombre: ${elemento.nombre}`)
	))
	idVendedor=parseInt(prompt(`escriba su id`));
	console.log(vendedor[idVendedor-1].contraseña)
	while (intentos<3 && pass!==vendedor[idVendedor-1].contraseña) {
		pass=prompt(`ingrese su contraseña`).toLowerCase();
		intentos++;
	}return pass===vendedor[idVendedor-1].contraseña;
	//al tener el id de encontrado(valido en el array) solo retornaria true si lo allo si no seria false por lo tanto el ingreso del usuario se revotaria
}
const agregarVendedor=()=>{
	const newVendedor={
		id:-1,
		nombre:"",
		contraseña:"",
		clientes:[],
	}
	newVendedor.nombre=prompt(`ingrese un nombre`);
	newVendedor.contraseña=prompt("ingrese una contraseña")
	newVendedor.id=vendedor.length+1;
	vendedor.push(newVendedor);
	console.table(vendedor);
}

const venta=()=>{
	let tipoVenta;
	do {
		tipoVenta=prompt("A-. Ya es un cliente.\nB-. Cliente nuevo.\nS-.Salir");
		tipoVenta=tipoVenta.toUpperCase()
		if (tipoVenta==='S') {
			console.log(`buena suerte`)
		} else {
			if(tipoVenta==="A"){
				let dniBuscado;

				/* agregar compra con id de cliente ya creado */
				console.table(`${clientes}`)
				dniBuscado=prompt(`ingrese el dni del cliente`);
				
			}else{
				/* venta a nuevo cliente */
				if (tipoVenta==="B")
				
			}
		}
	} while (tipoVenta!==`S`);
}


const cancelarVenta=()=>{

}
/* 
modificarVenta() */

/* ingreso de cantidades al stock */
const ingreso= (condicion,cantidad)=>{
	switch (condicion) {
		case "A":
			abertura[0].cantidad+=cantidad;
			break;
		case "B":
			abertura[1].cantidad+= cantidad;
			break;
		case "C":
			abertura[2].cantidad+=cantidad;
			break;
	};
}

/* menu de ingreso  de stock*/
const entrada = ()=>{	
	let dato="";
	let cantidad=0;
	do {
		dato=prompt("ingrese el producto: \n A) Corrediza.\n B) Abrir.\n C)Puerta.\n S) Salir").toUpperCase();
		if (dato!=="S") {
			//teniendo que validad la cantidad?
			cantidad=parseInt( prompt("ingrese la cantidad"))
			ingreso(dato,cantidad)
		}
	} while (dato !=="S");
}

const total=()=>{
	let acumulado=0;
	for (let i=0 ; i<abertura.length ; i++) {
		acumulado+=abertura[i].valor*abertura[i].cantidad;
	}
	return acumulado*(iva+1);
}


/* main */
/* ingreso valido */
let usuario=""
do {
	usuario=prompt(`desea entrar como vendedor? \n Y/N`).toUpperCase();
} while (usuario!=="N" && usuario !=="Y");
if (usuario==="Y"){ 
	if (ingresoUsuario()){
		let opcion
		do {
			opcion=prompt(`ingrese la accion \n A.- Agregar vendedor \n B.- Venta \n C.- Cancelar una venta \n D.- Modificar la compra de un cliente \n S.- Salir`).toUpperCase();
			//agregar vendedor
			switch (opcion) {
				case "A":
					agregarVendedor();
					break;
				case "B":
					venta();
					break;
				case "C":
					cancelarVenta();
					break;
				case "D":
					modificarVenta();
					break;
			}
		} while (opcion!=='S');
	} 
}else ingresoCliente();

