const iva = 0.21;

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

let clientes = [
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