class Abertura {
	constructor(id, nombre, cantidad, valor) {
		this.id = id,
			this.nombre = nombre,
			this.cantidad = cantidad,
			this.valor = valor
	}
	//metodos propios de la clase
}
class Cliente {
	constructor(id, dni, nombre, direcion, compra, vendedor) {
		this.id = id,
			this.dni = dni,
			this.nombre = nombre,
			this.direcion = direcion,
			this.compra = compra,
			this.vendedor = vendedor
	}
	//metodos propios de la clase
}
class Pedido {
	constructor(id, pedidos) {
		this.id = id,
			this.pedidos = pedidos
	}
	//metodos propios de la clase
}
class Vendedor {
	constructor(id, nombre, contraseña, clientes) {
		this.id = id,
			this.nombre = nombre,
			this.contraseña = contraseña,
			this.clientes = clientes
	}
	//metodos propios de la clase
}

//declaracion de variables
const iva = 0.21;
let loginFF = false;
let stock = [];
let usuarios = [];
let cartera = [];
let obligaciones = [];

//carga de cada .json y se instancia para guardarlo en el local storage linkeando desde el html
const cargaAberturas = async () => {
	const resp = await fetch("./js/datos/aberturas.json");
	const aberturas = await resp.json();
	aberturas.map(dato => {
		let newAbertura = new Abertura(dato.id, dato.nombre, dato.cantidad, dato.valor)
		stock.push(newAbertura);
	})
	almacenamiento.setItem("Stock", JSON.stringify(stock));
}
const cargaClientes = async () => {
	const resp = await fetch("./js/datos/clientes.json");
	const clientes = await resp.json();
	clientes.map(dato => {
		let newCliente = new Cliente(dato.id, dato.dni, dato.nombre, dato.direcion, dato.compra, dato.vendedor);
		cartera.push(newCliente);
	})
	almacenamiento.setItem("Cartera", JSON.stringify(cartera));
}
const cargaPedidos = async () => {
	const resp = await fetch("./js/datos/pedidos.json")
	const aberturas = await resp.json()
	aberturas.map(dato => {
		let newPedido = new Pedido(dato.id, dato.pedido);
		obligaciones.push(newPedido);
	})
	almacenamiento.setItem("Obligaciones", JSON.stringify(obligaciones));
}
const cargaVendedores = async () => {
	const resp = await fetch("./js/datos/vendedores.json")
	const vendedores = await resp.json()
	vendedores.map(dato => {
		let newVendedor = new Vendedor(dato.id, dato.nombre, dato.contraseña, dato.clientes);
		usuarios.push(newVendedor);
	})
	almacenamiento.setItem("Usuarios", JSON.stringify(usuarios));
}

if (almacenamiento.lengt > 0) {
	// ya se a ingresado
	JSON.parse(almacenamiento.getItem("Stock")).map(elemento=>stock.push(elemento));
	JSON.parse(almacenamiento.getItem("Cartera")).map(elemento=>cartera.push(elemento));
	JSON.parse(almacenamiento.getItem("Obligaciones")).map(elemento=>obligaciones.push(elemento));
	JSON.parse(almacenamiento.getItem("Usuarios")).map(elemento=>usuarios.push(elemento));
} else {
	// primer ingreso
	cargaAberturas();
	cargaClientes();
	cargaPedidos();
	cargaVendedores();
}