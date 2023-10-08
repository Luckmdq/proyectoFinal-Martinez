class Abertura{
	constructor(id, nombre,cantidad,valor){
		this.id=id,
		this.nombre=nombre,
		this.cantidad=cantidad,
		this.valor=valor
	}
	//metodos propios de la clase
}
class Clientes{
	constructor(id, dni, nombre, direcion, compra, vendedor){
		this.id=id,
		this.dni=dni,
		this.nombre=nombre,
		this.direcion=direcion,
		this.compra=compra,
		this.vendedor=vendedor
	}
	//metodos propios de la clase
}
class Pedidos{
	constructor(id, pedidos){
		this.id=id,
		this.pedidos=pedidos
	}
	//metodos propios de la clase
}
class Vendedor{
	constructor(id, nombre,contraseña,clientes){
		this.id=id,
		this.nombre=nombre,
		this.contraseña=contraseña,
		this.clientes=clientes
	}
	//metodos propios de la clase
}
const iva = 0.21;
let loginFF=false;



/* instansiacion de cada dato */
/* 
almacenamiento.clear() 
almacenamiento.setItem("abertura",JSON.stringify(abertura))
almacenamiento.setItem("vendedor",JSON.stringify(vendedor))
almacenamiento.setItem("clientes",JSON.stringify(clientes))
almacenamiento.setItem("pedidos",JSON.stringify(pedidos)) 
const abertura=JSON.parse(almacenamiento.getItem("abertura"))
const vendedor=JSON.parse(almacenamiento.getItem("vendedor"))
const clientes=JSON.parse(almacenamiento.getItem("clientes"))
const pedidos=JSON.parse(almacenamiento.getItem("pedidos")) */


//carga de cada .json y se instancia para guardarlo en el local storage desde el html
const cargaAberturas = async () =>{
    const resp = await fetch("./js/datos/aberturas.json")
    const aberturas = await resp.json()
	aberturas.map(dato=>{
		let newAbertura= new abertura (dato.id, dato.nombre, dato.cantidad, dato.valor)
		stock.push(newAbertura);
	})
    almacenamiento.setItem("estanteria", JSON.stringify(estanteria));
}