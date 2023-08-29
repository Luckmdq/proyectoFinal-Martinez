const iva=0.21;

const abertura=[{
	nombre:"corrediza",
	valor:125,
	cantidad:0,
},
{
	nombre:"abrir",
	valor:123,
	cantidad:0,
},
{
	nombre:"puerta",
	valor:122,
	cantidad:0,
}
];


/* ingreso de datos */
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
/* menu de ingreso */
const entrada = ()=>{	
	let dato="";
	let cantidad=0;
	do {
		dato=prompt("ingrese el producto: \n A) Corrediza.\n B) Abrir.\n C)Puerta.\n S) Salir").toUpperCase();
		if (!(dato==="S")) {
			//teniendo que validad la cantidad?
			cantidad=parseInt( prompt("ingrese la cantidad"))
			ingreso(dato,cantidad)
		}
	} while (!(dato ==="S"));
}

const total=()=>{
	let acumulado=0;
	for (let i=0 ; i<abertura.length ; i++) {
		acumulado+=abertura[i].valor*abertura[i].cantidad;
	}
	return acumulado*(iva+1);
}


//console.log(abertura.length)
entrada();
alert(`el total a pagar por la compra es de:${total()}`)
