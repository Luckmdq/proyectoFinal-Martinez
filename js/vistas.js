

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


/* ${loginFF?(`<div id="${elemento.id}Mod" class="cursor-context-menu font-medium text-red-600 dark:text-red-500">Mod</div>
`):(`<div id="${elemento.id}Add" class=" font-medium text-red-600 dark:text-red-500 hover:underline">Add</div>`)}
	 */