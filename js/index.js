const iva = 0.21;

/* CAPTURA DE DISPARADORES DE EVENTOS */
const btnLogin = document.getElementById("ctaLogin")
const loginModal = document.getElementById("loginModal")
const closeModal = document.getElementById("closeModal")
const modalSelect = document.getElementById("usuario")
const btnMenu = document.getElementById("ctaMenu")
const menu = document.getElementById("navbar");
const formularioIngreso = document.getElementById("formLogin")
const ctaCarrito = document.getElementById("btnCarrito")
const viewClientes = document.getElementById("clientes")
const modalMod=document.getElementById("modModal")


/* TIPOS DE DATOS  */
const pedidos = [
	{
		id: 21,
		pedido: [
			{ abertura: 1, cantidad: 2 },
			{ abertura: 2, cantidad: 3 },
		]
	},
	{
		id: 1,
		pedido: [
			{ abertura: 2, cantidad: 1 },
		]
	}
]

const clientes = [
	{
		id:3,
		dni: "35764127",
		nombre: "pedro",
		direcion: "456",
		compra: [21],
		vendedor: 1,
	},
	{
		id:44,
		dni: "33273700",
		nombre: "jesi",
		compra: [1],
		vendedor: 1,
	}
]

const vendedor = [
	{
		id: 1,
		nombre: "pedro",
		contraseña: "123",
		clientes: ["35764127", "33273700"],
	},
	{
		id: 2,
		nombre: "jesi",
		contraseña: "123",
		clientes: ["35764127", "33273700"],
	}
]

const abertura = [{
	id: 1,
	nombre: "corrediza",
	cantidad: 0,
	valor: 125,
},
{
	id: 2,
	nombre: "abrir",
	cantidad: 0,
	valor: 123,
},
{
	id: 3,
	nombre: "puerta",
	cantidad: 0,
	valor: 122,
}
];



/* Funciones */
const login = () => {
	let opcion = formularioIngreso.children[1];
	let valorSelect = parseInt(opcion.options[opcion.selectedIndex].value);
	let pass = formularioIngreso.children[3].value;
	let usuario = vendedor.find(e => e.id === valorSelect);
	loginModal.classList.toggle('hidden');
	/* al ingresar tendria que ver los clientes y los pedidos, al no ingresar tendria que mostrar un alert por la contraseña o algo asi */
	if (usuario.contraseña == pass) {
		//ctaCarrito.classList.toggle("hidden");
		showClientes(valorSelect);
		//showVentas();
		//editarStock();
	}
};

const modificarCliente=(cliente)=>{
	modalMod.classList.toggle("hidden");
	let direccion=document.getElementById("direccion")
	let email=document.getElementById("email")
	let dni=document.getElementById("dni")
	let nombre=document.getElementById("nombre")
	let tituloMod=document.getElementById("tituloMod")
	tituloMod.textContent=`${cliente.id}`
	direccion.value=cliente.direcion;
	email.value=cliente.email;
	dni.value=cliente.dni;
	nombre.value=cliente.nombre;
};

const eliminarCliente=(id)=>{
	//elimina el cliente
}


const showClientes = (idVendedor) => {
	/* creacion de cuerpo de tabla para muestra de los clientes */
	viewClientes.innerHTML = `
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
						Cliente
					</th>
					<th scope="col" class="px-6 py-3">
						CantPedidos
					</th>
					<th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
						Monto
					</th>
					<th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
						accion
					</th>
					</tr>
			</thead>
			<tbody id="clientesBody" >
			</tbody>
		</table>
	</div>`
	let body = document.getElementById("clientesBody");
	/* creacion de cada nodo de cliente */
	clientes.map(cliente => {
		let nodo = (`
		<tr id="cliente${cliente.dni}" class="border-b border-gray-200 dark:border-gray-700">
			<th scope="row"
				class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
				${cliente.nombre}
			</th>
			<td class="px-6 py-4">
			 ${cliente.compra.length}
			</td>
			<td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
				$${100.00}
			</td>
			<td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
				<div class="flex justify-between p-2 ">
					<div id="mod${cliente.dni}"	class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
						modificar
					</div>
					<div id="del${cliente.dni}"
						class="hover:text-gray-500 hover:bg-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 text-gray-100 focus:z-10 ">
						Eliminar
					</div>
				</div>
			</td>
		</tr>`
		);
		body.insertAdjacentHTML("beforeend", nodo);
	});
	body.addEventListener("click", event=>{
		let id=event.target.id
		id.includes("mod") && modificarCliente(clientes.find(e=>(e.dni==id.replaceAll("mod",""))))
		id.includes("del") && eliminarCliente(id.replaceAll("del",""))
	});
}

const agregarVendedor = () => {
	const newVendedor = {
		id: -1,
		nombre: "",
		contraseña: "",
		clientes: [],
	}
	newVendedor.nombre = prompt(`ingrese un nombre`);
	newVendedor.contraseña = prompt("ingrese una contraseña")
	newVendedor.id = vendedor.length + 1;
	vendedor.push(newVendedor);
	console.table(vendedor);
}


const agregarPedido = (dni) => {
	let cliente = clientes.find((elemento) => elemento.dni === dni)
	let pedidoNuevo;
	pedidoNuevo.id = cliente.compra[cliente.compra.length - 1] + pedidos.length
}

const venta = () => {
	let tipoVenta;
	do {
		tipoVenta = prompt("A-. Ya es un cliente.\nB-. Cliente nuevo.\nS-.Salir");
		tipoVenta = tipoVenta.toUpperCase()
		if (tipoVenta === 'S') {
			console.log(`buena suerte`)
		} else {
			if (tipoVenta === "A") {
				let dniBuscado;

				/* agregar compra con id de cliente ya creado */
				console.table(clientes)
				dniBuscado = prompt(`ingrese el dni del cliente`);
				agregarPedido(dniBuscado);
			} else {
				/* venta a nuevo cliente */
				if (tipoVenta === "B") {

				}
			}
		}
	} while (tipoVenta !== `S`);
}


const cancelarVenta = () => {

}
/* modificarVenta() */

/* ingreso de cantidades al stock */
const ingreso = (condicion, cantidad) => {
	switch (condicion) {
		case "A":
			abertura[0].cantidad += cantidad;
			break;
		case "B":
			abertura[1].cantidad += cantidad;
			break;
		case "C":
			abertura[2].cantidad += cantidad;
			break;
	};
}

/* menu de ingreso  de stock*/
const entrada = () => {
	let dato = "";
	let cantidad = 0;
	do {
		dato = prompt("ingrese el producto: \n A) Corrediza.\n B) Abrir.\n C)Puerta.\n S) Salir").toUpperCase();
		if (dato !== "S") {
			//teniendo que validad la cantidad?
			cantidad = parseInt(prompt("ingrese la cantidad"))
			ingreso(dato, cantidad)
		}
	} while (dato !== "S");
}

const total = () => {
	let acumulado = 0;
	for (let i = 0; i < abertura.length; i++) {
		acumulado += abertura[i].valor * abertura[i].cantidad;
	}
	return acumulado * (iva + 1);
}


/* Manejo de eventos */

const showSelects = () => {
	vendedor.map(e => {
		nuevaOpcion = document.createElement(`option`);
		nuevaOpcion.value = `${e.id}`;
		nuevaOpcion.text = `${e.nombre}`;
		modalSelect.appendChild(nuevaOpcion);
	})
}

const confirmarMod=()=>{
	let id=parseInt(document.getElementById("tituloMod").textContent)
	let email=document.getElementById("email")
	let dni=document.getElementById("dni")
	let nombre=document.getElementById("nombre")
	let cliente=clientes.find(e=>e.id==id)
	cliente.direcion=direccion.value;
	cliente.email=email.value;
	cliente.dni=dni.value;
	cliente.nombre=nombre.value;
}

/*  */

btnLogin.addEventListener("click", (ev) => {
	loginModal.classList.toggle(`hidden`);
})
btnMenu.addEventListener("click", () => {
	menu.classList.toggle("hidden")
})

loginModal.addEventListener("click", e => {
	switch (e.target.id.toLowerCase()) {
		case "usuario":
			if (modalSelect.children.length == 1) { showSelects() };
			break;
		case "closemodal":
			loginModal.classList.toggle('hidden');
			break;
		case "ingresar":
			login();
			break;
		case "cancelar":
			loginModal.classList.toggle("hidden")
			break;
		case "loginmodal":
			loginModal.classList.toggle('hidden');
			break;
	}
})

loginModal.addEventListener("keydown", e => {
	if (e.key == "Enter") {
		e.preventDefault();
		login();
	} else e.key == "Escape" && loginModal.classList.toggle("hidden")
})


modalMod.addEventListener("click", e => {
	let press=e.target.id.toLowerCase();
	console.log(press);
	switch (press) {
		case "close":
			modalMod.classList.toggle("hidden")
			break;
		case "aceptar":
			confirmarMod();
			showClientes();
			modalMod.classList.toggle("hidden");
			break;
		case "cancelar":
			modalMod.classList.toggle("hidden")
			break;
	}			
})

