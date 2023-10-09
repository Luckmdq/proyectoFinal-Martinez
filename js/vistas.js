

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
	cartera.map(cliente => {
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
	body.addEventListener("click", event => {
		let id = event.target.id
		id.includes("mod") && modificarCliente(clientes.find(e => (e.dni == id.replaceAll("mod", ""))))
		id.includes("del") && eliminarCliente(clientes.find(e => (e.dni == id.replaceAll("del", ""))))
	});
}


const showpicker = () => {
	/* creacion de cada nodo */
	picker.innerHTML="";
	stock.map(elemento => {
		let nodo = (`
		<tr
		class=" h[1%] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
		<td class="max-h-1 p-4">
			<img src="./img/${elemento.nombre}.jpeg" alt="Paño Fijo">
		</td>
		<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
			${elemento.nombre}
		</td>
		<td class="px-6 py-4">
			<div class="flex items-center space-x-3">
				<div id="dec${elemento.id}"	class="menos inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"></div>
				<div>
					<input type="number" id="cantidad"
						class=" bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="${elemento.cantidad}" required>
				</div>
				<div id="inc${elemento.id}"	class="mas inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor"></div>
			</div>
		</td>
		<td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
			$${elemento.valor}
		</td>
		<td class="px-6 py-4">

		${loginFF?(`<div id="${elemento.id}Mod" class="cursor-context-menu font-medium text-red-600 dark:text-red-500">Mod</div>
		`):(`<div id="${elemento.id}Add" class=" font-medium text-red-600 dark:text-red-500 hover:underline">Add</div>`)}
			
		</td>
	</tr>`)
	picker.insertAdjacentHTML("beforeend",nodo)
	})
}