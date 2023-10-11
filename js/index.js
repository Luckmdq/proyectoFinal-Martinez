const login = () => {
	let opcion = formularioIngreso.children[1];
	let valorSelect = parseInt(opcion.options[opcion.selectedIndex].value);
	let pass = formularioIngreso.children[3].value;
	let usuario = usuarios.find(e => e.id === valorSelect);
	loginModal.classList.toggle('hidden');
	/* al ingresar tendria que ver los clientes y los pedidos, al no ingresar tendria que mostrar un alert por la contraseña o algo asi */
	if (usuario.contraseña == pass) {
		loginFF=true;
		//ctaCarrito.classList.toggle("hidden");
		showClientes(valorSelect);
		btnLogin.classList.toggle("hidden");
		showpicker();
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
	almacenarClientes();
};

const almacenarClientes=()=>{
	console.log(clientes);
	almacenamiento.removeItem("clientes")
	almacenamiento.setItem("clientes",JSON.stringify(clientes));
	showClientes();
}

const eliminarCliente=(cliente)=>{
	clientes.splice(clientes.indexOf(cliente),1);
	almacenarClientes();
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

const showSelects = () => {
	usuarios.map(e => {
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
};

//showpicker();
