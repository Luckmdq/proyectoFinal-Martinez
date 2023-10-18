class Abertura {
	constructor(id, nombre, cantidad, valor) {
		(this.id = id),
			(this.nombre = nombre),
			(this.cantidad = cantidad),
			(this.valor = valor);
	}
	getElement() {
		return {
			id: this.id,
			nombre: this.nombre,
			cantidad: this.cantidad,
			valor: this.valor,
		};
	}
}

class Cliente {
	constructor(id, dni, nombre, direcion, compra, vendedor) {
		(this.id = id),
			(this.dni = dni),
			(this.nombre = nombre),
			(this.direcion = direcion),
			(this.compra = compra),
			(this.vendedor = vendedor);
	}
	//metodos propios de la clase
}

class Pedido {
	constructor(id, pedidos) {
		(this.id = id), (this.pedidos = pedidos);
	}
	//metodos propios de la clase
}

class Vendedor {
	constructor(id, nombre, contraseña, clientes) {
		(this.id = id),
			(this.nombre = nombre),
			(this.contraseña = contraseña),
			(this.clientes = clientes);
	}
	//metodos propios de la clase
}

//declaracion de variables
const iva = 0.21;
const loginFF = false;
const stock = [];
const usuarios = [];
const cartera = [];
const obligaciones = [];
//carga de cada .json y se instancia para guardarlo en el local storage linkeando desde el html

const cargaAberturas = async () => {
	const resp = await fetch("./js/datos/aberturas.json");
	const aberturas = await resp.json();
	aberturas.map((dato) => {
		let newAbertura = new Abertura(
			dato.id,
			dato.nombre,
			dato.cantidad,
			dato.valor
		);
		stock.push(newAbertura);
	});
	almacenamiento.setItem("Stock", JSON.stringify(stock));
};

const cargaClientes = async () => {
	const resp = await fetch("./js/datos/clientes.json");
	const clientes = await resp.json();
	clientes.map((dato) => {
		let newCliente = new Cliente(
			dato.id,
			dato.dni,
			dato.nombre,
			dato.direcion,
			dato.compra,
			dato.vendedor
		);
		cartera.push(newCliente);
	});
	almacenamiento.setItem("Cartera", JSON.stringify(cartera));
};

const cargaPedidos = async () => {
	const resp = await fetch("./js/datos/pedidos.json");
	const aberturas = await resp.json();
	aberturas.map((dato) => {
		let newPedido = new Pedido(dato.id, dato.pedido);
		obligaciones.push(newPedido);
	});
	almacenamiento.setItem("Obligaciones", JSON.stringify(obligaciones));
};

const cargaVendedores = async () => {
	const resp = await fetch("./js/datos/vendedores.json");
	const vendedores = await resp.json();
	vendedores.map((dato) => {
		let newVendedor = new Vendedor(
			dato.id,
			dato.nombre,
			dato.contraseña,
			dato.clientes
		);
		usuarios.push(newVendedor);
	});
	almacenamiento.setItem("Usuarios", JSON.stringify(usuarios));
};

if (almacenamiento.getItem("Stock")) {
	// ya se a ingresado
	JSON.parse(almacenamiento.getItem("Stock")).map((elemento) =>
		stock.push(elemento)
	);
	JSON.parse(almacenamiento.getItem("Cartera")).map((elemento) =>
		cartera.push(elemento)
	);
	JSON.parse(almacenamiento.getItem("Obligaciones")).map((elemento) =>
		obligaciones.push(elemento)
	);
	JSON.parse(almacenamiento.getItem("Usuarios")).map((elemento) =>
		usuarios.push(elemento)
	);
} else {
	// primer ingreso
	cargaAberturas();
	cargaClientes();
	cargaPedidos();
	cargaVendedores();
}

/* Vistas */


const showpicker = () => {
	/* creacion de cada nodo */
	stock.map((elemento) => {
		let nodo = document.createElement("div");
		if (elemento.id=="1"){
			nodo.className =
				`duration-700 ease-in-out w-full max-w-sm   bg-white border border-gray-200 rounded-lg shadow py-2 flex justify-center items-center`;
			currentPick=elemento.id;
			}
		else {
			nodo.className =
				`hidden duration-700 ease-in-out w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow my-6`;

		}
		nodo.setAttribute("id", elemento.id);

		nodo.innerHTML = `
				<div class="flex justify-center px-4 pt-4">
					<div class="w-full mx-auto flex flex-col items-center ">
						<img class="w-16 h-16 mb-3 ring-2" src="./img/${elemento.nombre}.jpeg"
							alt="${elemento.nombre} img" />
						<h5 class="mb-1 text-xl font-medium select-none">${elemento.nombre}</h5>
						<span class="text-sm text-gray-500 select-none">${elemento.cantidad}</span>
						<div class="flex mt-4 space-x-3 md:mt-6">
							<a href="#"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 z-50">Add</a>
							<a href="#"
								class=" z-50 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Edit</a>
						</div>
					</div>
				</div>`;
		pickerBody.appendChild(nodo);
	});
};
showpicker();
