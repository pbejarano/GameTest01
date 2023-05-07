const preguntas = [ 
    {
	titulo: "Menciona un bicho que puedes encontrar dentro de tu casa.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Arañas", puntuacionUno: 22},
            {respuestaDos: "Moscas", puntuacionDos: 17},
            {respuestaTres: "Cucharachas", puntuacionTres: 13},
            {respuestaCuatro: "Hormigas", puntuacionCuatro: 13},
            {respuestaCinco: "Mosc@s", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Menciona un alimento de color rojo.",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Manzana", puntuacionUno: 30},
            {respuestaDos: "Jitomate", puntuacionDos: 20},
            {respuestaTres: "Fresa", puntuacionTres: 13},
            {respuestaCuatro: "Sandía", puntuacionCuatro: 8},
            {respuestaCinco: "Ciruela", puntuacionCinco: 4}
        ]
    },
    {
	titulo: "Menciona algo que se obtiene de un árbol.",
	tipo: "naturaleza",
	respuestas: [
            {respuestaUno: "Fruta", puntuacionUno: 40},
			{respuestaDos: "Papel", puntuacionDos: 15},
			{respuestaTres: "Madera", puntuacionTres: 12},
			{respuestaCuatro: "Lápiz", puntuacionCuatro: 8},
			{respuestaCinco: "Oxigeno" ,puntuacionCinco: 4}
        ]
    },
    {
	titulo : "Nombra un país de América del Sur.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Brasil", puntuacionUno: 40},
			{respuestaDos: "Argentina", puntuacionDos: 15},
			{respuestaTres: "Chile", puntuacionTres: 12},
			{respuestaCuatro: "Guatemala", puntuacionCuatro: 8},
			{respuestaCinco: "Bolivia", puntuacionCinco: 3}
		]
	},
	{
	titulo : "Menciona una especialidad médica.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ginecología", puntuacionUno: 38},
			{respuestaDos: "Odontología", puntuacionDos: 27},
			{respuestaTres: "Cardiologia", puntuacionTres: 12},
			{respuestaCuatro: "Pediatría", puntuacionCuatro: 10},
			{respuestaCinco: "Cirujano", puntuacionCinco: 8}
		]
	},
	{
	titulo : "Menciona regalo barato que siempre será bien aceptado.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Flores", puntuacionUno: 44},
			{respuestaDos: "Tarjeta/Carta", puntuacionDos: 24},
			{respuestaTres: "Chocolates", puntuacionTres: 18},
			{respuestaCuatro: "Peluches", puntuacionCuatro: 11},
			{respuestaCinco: "Dinero", puntuacionCinco: 6}
		]
	},
	{
	titulo : "Termina la frase: Estoy que me lleva la...",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fregada", puntuacionUno: 37},
			{respuestaDos: "Chingada", puntuacionDos: 31},
			{respuestaTres: "Verga", puntuacionTres: 12},
			{respuestaCuatro: "Que me trajo", puntuacionCuatro: 12},
			{respuestaCinco: "Canción", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona Dato el cual se puede leer en una caja de cereal.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Datos Nutricionales", puntuacionUno: 44},
			{respuestaDos: "Ingredientes", puntuacionDos: 23},
			{respuestaTres: "Marca", puntuacionTres: 16},
			{respuestaCuatro: "Nombre del producto", puntuacionCuatro: 7},
			{respuestaCinco: "Juego o Cupón", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona Carrera la cuál suele asociarse como Artista.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Canto", puntuacionUno: 23},
			{respuestaDos: "Actuación", puntuacionDos: 20},
			{respuestaTres: "Baile/Danza", puntuacionTres: 18},
			{respuestaCuatro: "Pintura/Dibujo", puntuacionCuatro: 13},
			{respuestaCinco: "Músico", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un sabor de una crema en una fiesta.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Queso", puntuacionUno: 32},
			{respuestaDos: "Atun", puntuacionDos: 25},
			{respuestaTres: "Cebolla", puntuacionTres: 25},
			{respuestaCuatro: "Chipotle", puntuacionCuatro: 14},
			{respuestaCinco: "Chile", puntuacionCinco: 13}
		]
	},
	{
	titulo : "Menciona una fobia o miedo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Alturas", puntuacionUno: 25},
			{respuestaDos: "Arañas", puntuacionDos: 21},
			{respuestaTres: "Oscuridad", puntuacionTres: 16},
			{respuestaCuatro: "Estar encerrado", puntuacionCuatro: 10},
			{respuestaCinco: "Ratas", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Nombra algo que desafía la ley de la Gravedad.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Aviones", puntuacionUno: 37},
			{respuestaDos: "Drones", puntuacionDos: 29},
			{respuestaTres: "Helicópteros", puntuacionTres: 21},
			{respuestaCuatro: "Cohetes", puntuacionCuatro: 16},
			{respuestaCinco: "Satélites", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Menciona lugar donde los estudiantes se la pintean.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Parque", puntuacionUno: 41},
			{respuestaDos: "Cine", puntuacionDos: 18},
			{respuestaTres: "Maquinitas", puntuacionTres: 12},
			{respuestaCuatro: "Centro", puntuacionCuatro: 10},
			{respuestaCinco: "Billar o Bar", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona cosas que llevamos para acampar.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Casa de campaña", puntuacionUno: 38},
			{respuestaDos: "Bolsa para dormir", puntuacionDos: 33},
			{respuestaTres: "Comida", puntuacionTres: 24},
			{respuestaCuatro: "Lámpara/Linterna", puntuacionCuatro: 15},
			{respuestaCinco: "Mochila", puntuacionCinco: 11}
		]
	},
	{
	titulo : "Menciona preguntas que te hacen cuando vas a las carnes frias.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "¿Que va a llevar?", puntuacionUno: 35},
			{respuestaDos: "¿Cuánto va a llevar?", puntuacionDos: 24},
			{respuestaTres: "¿De que marca?", puntuacionTres: 20},
			{respuestaCuatro: "¿Así está bien?", puntuacionCuatro: 17},
			{respuestaCinco: "¿En que le puedo ayudar?", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona un animal marino que no sea un pez.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Camarón", puntuacionUno: 48},
			{respuestaDos: "Pulpo", puntuacionDos: 39},
			{respuestaTres: "Ballena", puntuacionTres: 21},
			{respuestaCuatro: "Tortuga", puntuacionCuatro: 13},
			{respuestaCinco: "Caballito de mar", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un pan No Dulce.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Torcido", puntuacionUno: 29},
			{respuestaDos: "Pan de caja(Bimbo)", puntuacionDos: 27},
			{respuestaTres: "Virginia", puntuacionTres:18},
			{respuestaCuatro: "Telera", puntuacionCuatro:11},
			{respuestaCinco: "Baguette", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona deporte que entre mas pesado estes mas te aydua.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Sumo", puntuacionUno: 39},
			{respuestaDos: "Lucha libre", puntuacionDos: 31},
			{respuestaTres: "FútBol Americano", puntuacionTres: 27},
			{respuestaCuatro: "Levantamiento de pesas", puntuacionCuatro: 15},
			{respuestaCinco: "Box", puntuacionCinco: 12}
		]
	},
	{
	titulo : "Menciona material que se usa para hacer esculturas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Barro", puntuacionUno: 45},
			{respuestaDos: "Piedra", puntuacionDos: 37},
			{respuestaTres: "Mármol", puntuacionTres: 24},
			{respuestaCuatro: "Yeso", puntuacionCuatro: 15},
			{respuestaCinco: "Metal", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Menciona Características de la gente Asiática.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ojos chinos", puntuacionUno: 39},
			{respuestaDos: "DelgaDos", puntuacionDos: 31},
			{respuestaTres: "Inteligencia", puntuacionTres: 27},
			{respuestaCuatro: "Color de piel", puntuacionCuatro: 15},
			{respuestaCinco: "Idioma", puntuacionCinco: 12}
		]
	},
	{
	titulo : "Menciona algo que es malo para el cabello.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tintes", puntuacionUno: 43},
			{respuestaDos: "Fijadores", puntuacionDos: 36},
			{respuestaTres: "El sol", puntuacionTres: 24},
			{respuestaCuatro: "Caspa", puntuacionCuatro: 18},
			{respuestaCinco: "Gel", puntuacionCinco: 8}		]
	},
	{
	titulo : "Menciona un objeto que explota.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bomba", puntuacionUno: 38},
			{respuestaDos: "Trike", puntuacionDos: 29},
			{respuestaTres: "Dinamita", puntuacionTres: 20},
			{respuestaCuatro: "Tanques de gas", puntuacionCuatro: 13},
			{respuestaCinco: "Granada", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un pan de Dulce.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Dona", puntuacionUno: 36},
			{respuestaDos: "Concha", puntuacionDos: 32},
			{respuestaTres: "Leño", puntuacionTres: 26},
			{respuestaCuatro: "Puerquito", puntuacionCuatro: 15},
			{respuestaCinco: "Cocodrilo/Elote", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona que hay en una billetera de un Hombre.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dinero", puntuacionUno: 31},
			{respuestaDos: "Fotos", puntuacionDos: 30},
			{respuestaTres: "Credenciales", puntuacionTres: 20},
			{respuestaCuatro: "Tarjetas", puntuacionCuatro: 11},
			{respuestaCinco: "Condones", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona una característica de una Limosina.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Larga", puntuacionUno: 31},
			{respuestaDos: "Color negro", puntuacionDos: 22},
			{respuestaTres: "Elegante", puntuacionTres: 16},
			{respuestaCuatro: "Costosa", puntuacionCuatro: 14},
			{respuestaCinco: "Divertida", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Sin decir marcas Menciona alimentos que se pueden comprar en maquina Expendedora.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Refresco", puntuacionUno: 37},
			{respuestaDos: "Sabritas", puntuacionDos: 34},
			{respuestaTres: "Galletas", puntuacionTres: 22},
			{respuestaCuatro: "Dulces", puntuacionCuatro: 15},
			{respuestaCinco: "Agua", puntuacionCinco: 14}
		]
	},
	{
	titulo : "Menciona un lugar donde haya un chicle pegado.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Piso", puntuacionUno: 46},
			{respuestaDos: "Bajo la mesa", puntuacionDos: 32},
			{respuestaTres: "Zapato", puntuacionTres: 27},
			{respuestaCuatro: "Silla", puntuacionCuatro: 22},
			{respuestaCinco: "Pared", puntuacionCinco: 16}
		]
	},
	{
	titulo : "Menciona cosas que la gente compra esperando que le dure toda la vida.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Casa", puntuacionUno: 46},
			{respuestaDos: "Carro", puntuacionDos: 34},
			{respuestaTres: "Ropa", puntuacionTres: 29},
			{respuestaCuatro: "Muebles", puntuacionCuatro: 17},
			{respuestaCinco: "Electrodomestico", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona que cosas hacen los Gatos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Jugar", puntuacionUno: 47},
			{respuestaDos: "Dormir", puntuacionDos: 39},
			{respuestaTres: "Comer", puntuacionTres: 21},
			{respuestaCuatro: "Maullar", puntuacionCuatro: 20},
			{respuestaCinco: "Lamer", puntuacionCinco: 13}
		]
	},
	{
	titulo : "Menciona utensilios de cocina.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Cuchara", puntuacionUno: 38},
			{respuestaDos: "Cuchillo", puntuacionDos: 28},
			{respuestaTres: "Sartén", puntuacionTres: 15},
			{respuestaCuatro: "Tenedor", puntuacionCuatro: 10},
			{respuestaCinco: "Cazuela", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona algo que se enciende con un cerillo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cigarro", puntuacionUno: 43},
			{respuestaDos: "Estufa", puntuacionDos:20},
			{respuestaTres: "Velas", puntuacionTres:10},
			{respuestaCuatro: "Papel", puntuacionCuatro:8},
			{respuestaCinco: "Fuegos Artificiales", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona algo que tenga cuernos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mi Ex", puntuacionUno: 62},
			{respuestaDos: "Venado", puntuacionDos: 50},
			{respuestaTres: "Chivo", puntuacionTres: 22},
			{respuestaCuatro: "Vaca", puntuacionCuatro: 17},
			{respuestaCinco: "Buey", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona que es lo más constante que hace un bebe.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Llorar", puntuacionUno: 63},
			{respuestaDos: "Popo", puntuacionDos: 42},
			{respuestaTres: "Comer", puntuacionTres: 33},
			{respuestaCuatro: "Dormir", puntuacionCuatro: 19},
			{respuestaCinco: "Jugar", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona un alimento que se vende en lata.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Atún", puntuacionUno: 47},
			{respuestaDos: "Frijoles", puntuacionDos: 39},
			{respuestaTres: "Chícharos", puntuacionTres: 22},
			{respuestaCuatro: "Chiles", puntuacionCuatro: 11},
			{respuestaCinco: "Refresco", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona Artículos de higiene que no suelen faltar en un viaje.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pasta dental", puntuacionUno: 36},
			{respuestaDos: "Cepillo de dientes", puntuacionDos: 34},
			{respuestaTres: "peine", puntuacionTres: 24},
			{respuestaCuatro: "Desodorante", puntuacionCuatro: 18},
			{respuestaCinco: "Shampoo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona Lugar en donde conseguir hospedaje.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "App/Página web", puntuacionUno: 38},
			{respuestaDos: "Hotel", puntuacionDos: 30},
			{respuestaTres: "Motel", puntuacionTres: 27},
			{respuestaCuatro: "Hostel", puntuacionCuatro: 18},
			{respuestaCinco: "Con un conocido/Familiar", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona personaje clasico de terror.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Chucky", puntuacionUno: 39},
			{respuestaDos: "Wazaa :p", puntuacionDos:31},
			{respuestaTres: "Freddy Krueger", puntuacionTres: 29},
			{respuestaCuatro: "Un negro", puntuacionCuatro: 21},
			{respuestaCinco: "Jason", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona pelicula antigua de terror.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Drácula", puntuacionUno: 31},
			{respuestaDos: "El Exorcista", puntuacionDos: 26},
			{respuestaTres: "El Resplandor", puntuacionTres: 20},
			{respuestaCuatro: "It (Eso)", puntuacionCuatro: 17},
			{respuestaCinco: "Psicosis", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona disfraces clasicos Sexys que una chica suele vestirse.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gatita", puntuacionUno: 35},
			{respuestaDos: "Vampira", puntuacionDos: 29},
			{respuestaTres: "Diablita", puntuacionTres: 22},
			{respuestaCuatro: "Brujita", puntuacionCuatro: 12},
			{respuestaCinco: "Caperucita Roja", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona que debe tener una casa para ser mansión.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Muy grande", puntuacionUno: 46},
			{respuestaDos: "Tener alberca", puntuacionDos: 46},
			{respuestaTres: "Gigante jardín", puntuacionTres: 26},
			{respuestaCuatro: "Muebles lujosos", puntuacionCuatro: 17},
			{respuestaCinco: "Muy alta", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona especia usada en la cocina.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Sal", puntuacionUno: 31},
			{respuestaDos: "Pimienta", puntuacionDos: 28},
			{respuestaTres: "Ajo", puntuacionTres: 25},
			{respuestaCuatro: "laurel", puntuacionCuatro: 17},
			{respuestaCinco: "Orégano", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona cosas que un niño puede querer y tiene ruedas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bicicleta", puntuacionUno: 36},
			{respuestaDos: "Un coche", puntuacionDos: 33},
			{respuestaTres: "Patines", puntuacionTres: 27},
			{respuestaCuatro: "Juguete", puntuacionCuatro: 14},
			{respuestaCinco: "Patineta", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona cosas bonitas que alguien se pudiera decir en el espejo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Que guapo/bonito", puntuacionUno: 39},
			{respuestaDos: "Que alto te ves", puntuacionDos: 32},
			{respuestaTres: "Que delgado te ves", puntuacionTres:28},
			{respuestaCuatro: "Que sexy te ves", puntuacionCuatro: 15},
			{respuestaCinco: "me veo muy bien", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona cosas que comen los gusanos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Plantas", puntuacionUno: 45},
			{respuestaDos: "Cadáveres", puntuacionDos: 37},
			{respuestaTres: "Frutas", puntuacionTres: 31},
			{respuestaCuatro: "Comida echada a perder", puntuacionCuatro: 16},
			{respuestaCinco: "Cosas podridas", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona signo de ortografía que sirve para marcas pausa.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Coma", puntuacionUno: 39},
			{respuestaDos: "Punto", puntuacionDos: 36},
			{respuestaTres: "Punto y coma", puntuacionTres: 25},
			{respuestaCuatro: "Guión", puntuacionCuatro: 20},
			{respuestaCinco: "Dos puntos", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona cosas que se venden para fiestas patrias.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Banderas", puntuacionUno: 39},
			{respuestaDos: "Bigotes", puntuacionDos: 36},
			{respuestaTres: "Confeti", puntuacionTres: 25},
			{respuestaCuatro: "Sombreros", puntuacionCuatro: 20},
			{respuestaCinco: "Alcohol", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Termina la frase 'Te quiero de aquí hasta...'.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "El cielo", puntuacionUno: 39},
			{respuestaDos: "La luna", puntuacionDos: 36},
			{respuestaTres: "El infinito", puntuacionTres: 28},
			{respuestaCuatro: "El mas allá", puntuacionCuatro: 17},
			{respuestaCinco: "Las estrellas", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona que suele ver en carnavales.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Disfraces", puntuacionUno: 37},
			{respuestaDos: "Carros alegóricos", puntuacionDos: 32},
			{respuestaTres: "Máscaras/antifraces", puntuacionTres: 26},
			{respuestaCuatro: "Bailes", puntuacionCuatro: 21},
			{respuestaCinco: "Mucha gente", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona parte del cuerpo que puedes tocar para provocar el coito.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cuello", puntuacionUno: 60},
			{respuestaDos: "Cintura", puntuacionDos: 23},
			{respuestaTres: "Espalda", puntuacionTres: 20},
			{respuestaCuatro: "Piernas", puntuacionCuatro:15},
			{respuestaCinco: "Pecho", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona animal que la gente suele ver con sus crias.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gallina", puntuacionUno: 47},
			{respuestaDos: "Perro", puntuacionDos: 40},
			{respuestaTres: "Gato", puntuacionTres: 34},
			{respuestaCuatro: "Puercos", puntuacionCuatro: 13},
			{respuestaCinco: "Roedores", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un insecto que asuste.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Araña/Trantula", puntuacionUno: 38},
			{respuestaDos: "Cucaracha Voladora", puntuacionDos: 24},
			{respuestaTres: "Alacrán", puntuacionTres: 8},
			{respuestaCuatro: "Abeja/Avispa", puntuacionCuatro: 8},
			{respuestaCinco: "Cienpiés", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona que puede agregarse al café.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Azúcar", puntuacionUno: 33},
			{respuestaDos: "Crema", puntuacionDos: 28},
			{respuestaTres: "Leche", puntuacionTres: 23},
			{respuestaCuatro: "Canela", puntuacionCuatro: 10},
			{respuestaCinco: "Alcohol", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona frase clásica para decir que no te interesa tu EX.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "No l@ queria", puntuacionUno: 26},
			{respuestaDos: "Era aburrid@", puntuacionDos: 20},
			{respuestaTres: "Era odioso/No soportaba", puntuacionTres: 12},
			{respuestaCuatro: "Infidelidad", puntuacionCuatro: 8},
			{respuestaCinco: "Yo l@ deje", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un objeto hecho de vidrio.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Vaso", puntuacionUno: 38},
			{respuestaDos: "Botellas", puntuacionDos: 19},
			{respuestaTres: "Espejos", puntuacionTres: 15},
			{respuestaCuatro: "Ventanas", puntuacionCuatro: 5},
			{respuestaCinco: "Copa", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona medio de transporte con el que podrías conocer todo el mundo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Avión", puntuacionUno: 34},
			{respuestaDos: "Motocicleta", puntuacionDos: 16},
			{respuestaTres: "Automóvil", puntuacionTres: 16},
			{respuestaCuatro: "Helicóptero", puntuacionCuatro: 7},
			{respuestaCinco: "Autobús/Casa Rodante", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona parte del cuerpo donde suelen hacerle cosquillas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pies", puntuacionUno: 37},
			{respuestaDos: "Estómago", puntuacionDos: 19},
			{respuestaTres: "Axila", puntuacionTres: 15},
			{respuestaCuatro: "Costillas", puntuacionCuatro: 9},
			{respuestaCinco: "Cuello", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona un país que últimamente ha estado en algún tipo de guerra.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Rusia", puntuacionUno: 28},
			{respuestaDos: "Ucrania", puntuacionDos: 17},
			{respuestaTres: "China", puntuacionTres: 16},
			{respuestaCuatro: "Estados Unidos", puntuacionCuatro: 12},
			{respuestaCinco: "Israel", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona algo que suele estar en el refigerador de un soltero.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cerveza", puntuacionUno: 39},
			{respuestaDos: "Leche", puntuacionDos: 24},
			{respuestaTres: "Comida", puntuacionTres: 14},
			{respuestaCuatro: "Refresco", puntuacionCuatro: 12},
			{respuestaCinco: "Fruta/Verduras", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona una actividad que provoca cansancio en los ojos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Leer", puntuacionUno: 36},
			{respuestaDos: "Televisión", puntuacionDos: 28},
			{respuestaTres: "Teléfono", puntuacionTres: 26},
			{respuestaCuatro: "Estar en el sol", puntuacionCuatro: 13},
			{respuestaCinco: "Computadora", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona característica clásica de una porrista de fútbol americano.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mini falda", puntuacionUno: 42},
			{respuestaDos: "Pompones", puntuacionDos: 33},
			{respuestaTres: "Buen cuerpo", puntuacionTres: 23},
			{respuestaCuatro: "Guapas/Bonitas", puntuacionCuatro: 17},
			{respuestaCinco: "Flexibilidad", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona prenda la cúal se abotone.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Camisa", puntuacionUno: 44},
			{respuestaDos: "Blusa", puntuacionDos: 34},
			{respuestaTres: "Pantalón", puntuacionTres: 27},
			{respuestaCuatro: "Suéter", puntuacionCuatro: 22},
			{respuestaCinco: "Falda", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona ademas de Okay, di otra manera de decir que estás de acuerdo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bien", puntuacionUno: 45},
			{respuestaDos: "Si", puntuacionDos: 19},
			{respuestaTres: "Claro", puntuacionTres: 16},
			{respuestaCuatro: "Perfecto", puntuacionCuatro: 10},
			{respuestaCinco: "De acuerdo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona algo en lo que los niños se trepen.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Árboles", puntuacionUno: 44},
			{respuestaDos: "Culumpio", puntuacionDos: 38},
			{respuestaTres: "Resbaladilla", puntuacionTres: 24},
			{respuestaCuatro: "En la gente", puntuacionCuatro: 10},
			{respuestaCinco: "Coches", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona la cantidad de un billete de México.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cien", puntuacionUno: 23},
			{respuestaDos: "Veinte", puntuacionDos: 20},
			{respuestaTres: "Doscientos", puntuacionTres: 15},
			{respuestaCuatro: "Quinientos", puntuacionCuatro: 10},
			{respuestaCinco: "Mil", puntuacionCinco: 8}		
		]
	},
		{
	titulo : "Menciona vegetal que el mexicano promedio fríe.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Papas", puntuacionUno: 35},
			{respuestaDos: "Cebolla", puntuacionDos: 27},
			{respuestaTres: "Calabaza", puntuacionTres: 22},
			{respuestaCuatro: "Zanahoria", puntuacionCuatro: 11},
			{respuestaCinco: "Chile", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Articulo escolar que pierden los niños",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "El Lápiz", puntuacionUno: 34},
			{respuestaDos: "Sacapuntas", puntuacionDos: 30},
			{respuestaTres: "Borrador", puntuacionTres: 25},
			{respuestaCuatro: "Colores", puntuacionCuatro: 21},
			{respuestaCinco: "Regla", puntuacionCinco: 14}		
		]
	},
	{
	titulo : "Menciona fruta que se usa de botana",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Mango", puntuacionUno: 35},
			{respuestaDos: "Pepino", puntuacionDos: 30},
			{respuestaTres: "Jicama", puntuacionTres: 27},
			{respuestaCuatro: "Manzana", puntuacionCuatro: 15},
			{respuestaCinco: "Uva", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Critica general que le suelen hacer a un restaurante",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Comida", puntuacionUno: 41},
			{respuestaDos: "Servicio", puntuacionDos: 32},
			{respuestaTres: "Decoración", puntuacionTres: 22},
			{respuestaCuatro: "Ubicación", puntuacionCuatro: 20},
			{respuestaCinco: "Igiene", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Algo que la gente suele desperticiar",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Agua", puntuacionUno: 40},
			{respuestaDos: "Comida", puntuacionDos: 34},
			{respuestaTres: "Tiempo", puntuacionTres: 26},
			{respuestaCuatro: "Basura", puntuacionCuatro: 17},
			{respuestaCinco: "Dinero", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Dinos una fobia comun de la gente",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Alturas", puntuacionUno: 42},
			{respuestaDos: "Arañas", puntuacionDos: 35},
			{respuestaTres: "Encerrado", puntuacionTres: 29},
			{respuestaCuatro: "Hablar publico", puntuacionCuatro: 19},
			{respuestaCinco: "Oscuridad", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Menciona algo especifico que las mujeres usan para maquillarse",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Labial", puntuacionUno: 41},
			{respuestaDos: "Rimen", puntuacionDos: 35},
			{respuestaTres: "Base", puntuacionTres: 33},
			{respuestaCuatro: "Polvo", puntuacionCuatro: 25},
			{respuestaCinco: "Rugor", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona un ingrediente del Pozole",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Maiz", puntuacionUno: 38},
			{respuestaDos: "Carne", puntuacionDos: 34},
			{respuestaTres: "Chile", puntuacionTres: 22},
			{respuestaCuatro: "Lechuga", puntuacionCuatro: 18},
			{respuestaCinco: "Orégano", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona un Animal que sea muy fuerte",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "León", puntuacionUno: 39},
			{respuestaDos: "Oso", puntuacionDos: 31},
			{respuestaTres: "Elefante", puntuacionTres: 29},
			{respuestaCuatro: "Gorila", puntuacionCuatro: 21},
			{respuestaCinco: "Tigre", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Castigo que los padres solían hacer a sus hijos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "No salir", puntuacionUno: 37},
			{respuestaDos: "Te pegaban", puntuacionDos: 30},
			{respuestaTres: "No ver TV/Celular", puntuacionTres: 21},
			{respuestaCuatro: "No comer", puntuacionCuatro: 12},
			{respuestaCinco: "No dar Dinero", puntuacionCinco: 3}		
		]
	},
	{
	titulo: "Menciona algo común que arruina Las Vacaciones",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Mal Clima", puntuacionUno: 31},
            {respuestaDos: "Enfermedad", puntuacionDos: 30},
            {respuestaTres: "Accidente", puntuacionTres: 21},
            {respuestaCuatro: "Por Dinero", puntuacionCuatro: 13},
            {respuestaCinco: "Trabajo", puntuacionCinco: 9}
        ]
    },
    {
	titulo: "Forma común de decir que estuvo bien",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Estuvo Suave", puntuacionUno: 42},
            {respuestaDos: "Estuvo Chingon", puntuacionDos: 32},
            {respuestaTres: "Estuvo Padre", puntuacionTres: 16},
            {respuestaCuatro: "Estuvo Genial", puntuacionCuatro: 15},
            {respuestaCinco: "Estuvo Maravilloso", puntuacionCinco: 3}
        ]
    },
	{
	titulo: "Catástrofes que hayan sido tema de Películas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Terremoto", puntuacionUno: 43},
            {respuestaDos: "Huracán", puntuacionDos: 37},
            {respuestaTres: "Hundimiento de Barco", puntuacionTres: 17},
            {respuestaCuatro: "Erupción de volcán", puntuacionCuatro: 15},
            {respuestaCinco: "Tornado", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Además de Fútbol, menciona un deporte con mucha afición.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Básquetbol", puntuacionUno: 26},
            {respuestaDos: "Tenis", puntuacionDos: 23},
            {respuestaTres: "Béisbol", puntuacionTres: 17},
            {respuestaCuatro: "Fútbol Americano", puntuacionCuatro: 12},
            {respuestaCinco: "Voleibol", puntuacionCinco: 8}
        ]
    },
	{
	titulo: "Malestares que puede ocasionar subirse a un avión",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Mido", puntuacionUno: 40},
            {respuestaDos: "Dolor de cabeza", puntuacionDos: 35},
            {respuestaTres: "Dolor de estómago", puntuacionTres: 22},
            {respuestaCuatro: "Obstrucción de oídos", puntuacionCuatro: 16},
            {respuestaCinco: "Náuseas", puntuacionCinco: 9}
        ]
    },
	{
	titulo: "Con que suele rellenarse un Globo",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Aire", puntuacionUno: 37},
            {respuestaDos: "Gas", puntuacionDos: 26},
            {respuestaTres: "Agua", puntuacionTres: 20},
            {respuestaCuatro: "Harina", puntuacionCuatro: 13},
            {respuestaCinco: "Confeti", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Menciona algo que tenga rayas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cebra", puntuacionUno: 31},
            {respuestaDos: "Ropa", puntuacionDos: 22},
            {respuestaTres: "Cuaderno", puntuacionTres: 16},
            {respuestaCuatro: "El piso/Asulejos", puntuacionCuatro: 13},
            {respuestaCinco: "Una Regla", puntuacionCinco: 10}
        ]
    },
	{
	titulo: "Menciona cosas en las que la gente se fija antes de comprar un celular",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "La marca", puntuacionUno: 43},
           {respuestaDos: "Si esta bonito", puntuacionDos: 33},
            {respuestaTres: "Precio", puntuacionTres: 26},
            {respuestaCuatro: "Color", puntuacionCuatro: 19},
            {respuestaCinco: "Camara", puntuacionCinco: 13}
        ]
    },
	{
	titulo: "Cosas que te encuentras en un camino de terracería",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Piedras", puntuacionUno: 33},
            {respuestaDos: "Animales", puntuacionDos: 25},
            {respuestaTres: "Tierra", puntuacionTres: 21},
            {respuestaCuatro: "Árboles", puntuacionCuatro: 14},
            {respuestaCinco: "Polvo", puntuacionCinco: 7}
        ]
    },
	{
	titulo: "Cosas que la familia se turna para usar.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "El Baño", puntuacionUno: 52},
            {respuestaDos: "La Televisión", puntuacionDos: 41},
            {respuestaTres: "Ropa", puntuacionTres: 33},
            {respuestaCuatro: "La Computadora", puntuacionCuatro: 27},
            {respuestaCinco: "El Coche", puntuacionCinco: 22}
        ]
    },
	{
	titulo: "Nombra una profesión que requiera estar detrás de series de TV o Novelas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Camarógrafo", puntuacionUno: 48},
            {respuestaDos: "Director", puntuacionDos: 37},
            {respuestaTres: "Productor", puntuacionTres: 30},
            {respuestaCuatro: "Actor/Actriz", puntuacionCuatro: 23},
            {respuestaCinco: "Escritor", puntuacionCinco: 16}
        ]
    },
	{
	titulo: "Nombra una manera de llamar a la lluvia según su intensidad",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Tormenta", puntuacionUno: 34},
            {respuestaDos: "Uracan", puntuacionDos: 32},
            {respuestaTres: "ChipiChipi", puntuacionTres: 29},
            {respuestaCuatro: "Tifón", puntuacionCuatro: 22},
            {respuestaCinco: "Llovizna", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Menciona un personaje de Alicia en el país de las maravillas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Alicia", puntuacionUno: 41},
            {respuestaDos: "Conejo", puntuacionDos: 37},
            {respuestaTres: "Sombrero", puntuacionTres: 21},
            {respuestaCuatro: "Reina Roja", puntuacionCuatro: 15},
            {respuestaCinco: "Gato", puntuacionCinco: 6}
        ]
    },
	{
	titulo: "Menciona una Aderezo para ensalada",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Ranch", puntuacionUno: 39},
            {respuestaDos: "César", puntuacionDos: 33},
            {respuestaTres: "Vinagreta", puntuacionTres: 24},
            {respuestaCuatro: "Mayonesa", puntuacionCuatro: 16},
            {respuestaCinco: "Chipotle", puntuacionCinco: 5}
        ]
    },
	{
	titulo: "Figuras clásicas que se hacen con hojas de papel",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Barco", puntuacionUno: 38},
            {respuestaDos: "Avion", puntuacionDos: 31},
            {respuestaTres: "Paloma/Ave", puntuacionTres: 27},
            {respuestaCuatro: "Corazón", puntuacionCuatro: 18},
            {respuestaCinco: "Sobre", puntuacionCinco: 7}
        ]
    },
	{
	titulo: "Cosas que los bebes hacen y causan Ternura",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Su risa", puntuacionUno: 32},
            {respuestaDos: "Hacer Pucheros", puntuacionDos: 28},
            {respuestaTres: "Balbucear", puntuacionTres: 20},
            {respuestaCuatro: "Llorar", puntuacionCuatro: 14},
            {respuestaCinco: "Dormir", puntuacionCinco: 5}
        ]
    },
	{
	titulo: "Canción mexicana que se canta en ocasiones especiales",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cielito Lindo", puntuacionUno: 37},
            {respuestaDos: "Las Mañanitas", puntuacionDos: 25},
            {respuestaTres: "México lindo", puntuacionTres: 23},
            {respuestaCuatro: "Himno nacional", puntuacionCuatro: 23},
            {respuestaCinco: "La Guadalupana", puntuacionCinco: 12}
        ]
    },
	{
	titulo: "Nombra un insecto que no vuela",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "La Hormiga", puntuacionUno: 31},
            {respuestaDos: "Gusano", puntuacionDos: 25},
            {respuestaTres: "Araña", puntuacionTres: 23},
            {respuestaCuatro: "Cochinilla", puntuacionCuatro: 12},
            {respuestaCinco: "Mantis", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Algo que debes evitar cuando estás enfermo de la garganta",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Tomar Cosas Frías", puntuacionUno: 39},
            {respuestaDos: "Estar en lo frío", puntuacionDos: 31},
            {respuestaTres: "Fumar", puntuacionTres: 25},
            {respuestaCuatro: "Hablar", puntuacionCuatro: 17},
            {respuestaCinco: "Comer Picante", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Nombra un animal de boca grande",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cocodrilo", puntuacionUno: 30},
            {respuestaDos: "Tiburón", puntuacionDos: 26},
            {respuestaTres: "Ballena", puntuacionTres: 16},
            {respuestaCuatro: "León", puntuacionCuatro: 11},
            {respuestaCinco: "Hipopótamo", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Cosas que le suele caer sobre la cabreza a personaje de caricatura",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Piedra", puntuacionUno: 37},
            {respuestaDos: "Yunque", puntuacionDos: 25},
            {respuestaTres: "Ladrillo", puntuacionTres: 17},
            {respuestaCuatro: "Maceta", puntuacionCuatro: 13},
            {respuestaCinco: "Agua", puntuacionCinco: 5}
        ]
    },
    {
	titulo: "Razones por las que una persona preferiría tener cabello corto",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Rapidez al peinar", puntuacionUno: 33},
            {respuestaDos: "Porque se ve mejor", puntuacionDos: 28},
            {respuestaTres: "Por el calor", puntuacionTres: 22},
            {respuestaCuatro: "Por Moda", puntuacionCuatro: 10},
            {respuestaCinco: "Se ensucia menos",puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Manera de destruir un documento",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Quemandolo", puntuacionUno: 33},
            {respuestaDos: "Mojandolo", puntuacionDos: 28},
            {respuestaTres: "Partirlo en pedazos", puntuacionTres: 22},
            {respuestaCuatro: "Rayandolo", puntuacionCuatro: 10},
            {respuestaCinco: "En la Trituradora", puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Menciona un nombre que va acompañado de Maria",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Guadalupe", puntuacionUno: 30},
            {respuestaDos: "Isabel", puntuacionDos: 28},
            {respuestaTres: "José", puntuacionTres: 21}, 
            {respuestaCuatro: "Antonia", puntuacionCuatro: 17},
            {respuestaCinco: "Fernanda", puntuacionCinco: 9}
        ]
    },
    {
	titulo: "Menciona un caldo",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "De Pollo", puntuacionUno: 42},
            {respuestaDos: "De Res", puntuacionDos: 35},
            {respuestaTres: "De papas", puntuacionTres: 27},
            {respuestaCuatro: "Albóndigas", puntuacionCuatro: 21},
            {respuestaCinco: "Verduras/Cocido", puntuacionCinco: 13}
        ]
    },
    {
	titulo: "Actividad doméstica que se puede hacer en menos de 10Min",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Barrer", puntuacionUno: 34},
            {respuestaDos: "Tender la cama", puntuacionDos: 28},
            {respuestaTres: "Lavar trastes", puntuacionTres: 21},
            {respuestaCuatro: "Sacudir", puntuacionCuatro: 14},
            {respuestaCinco: "Trapear", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Menciona accesorio que complementa el vestido de novia",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Ramo", puntuacionUno: 28},
            {respuestaDos: "Velo", puntuacionDos: 24},
            {respuestaTres: "Zapatillas", puntuacionTres: 19},
            {respuestaCuatro: "Anillo", puntuacionCuatro: 12},
            {respuestaCinco: "La Cola", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Oficio o Profesión que se usen tijeras",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Costurero", puntuacionUno: 37},
            {respuestaDos: "Peluquero/Estilista", puntuacionDos: 33},
            {respuestaTres: "Modista", puntuacionTres: 28},
            {respuestaCuatro: "Decorador", puntuacionCuatro: 17},
            {respuestaCinco: "Jardinero", puntuacionCinco: 13}
        ]
    },
    {
	titulo: "Menciona algo que puede ser confundido con un OVNI a lo lejos",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Avion", puntuacionUno: 33},
            {respuestaDos: "Estrella", puntuacionDos: 28},
            {respuestaTres: "Globo", puntuacionTres: 23},
            {respuestaCuatro: "Helicoptero", puntuacionCuatro: 18},
            {respuestaCinco: "Cometa", puntuacionCinco: 14}
        ]
    },
    {
	titulo: "Además del Rey menciona una pieza de Ajedrez",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Caballo", puntuacionUno: 26},
            {respuestaDos: "Reina", puntuacionDos: 19},
            {respuestaTres: "Peón", puntuacionTres: 15},
            {respuestaCuatro: "Torre", puntuacionCuatro: 8},
            {respuestaCinco: "Alfil", puntuacionCinco: 3}
        ]
    },
    {
	titulo: "Menciona un oficio donde se requiere la ayuda de un chalan",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Albañil", puntuacionUno: 35},
            {respuestaDos: "Mecánico", puntuacionDos: 31},
            {respuestaTres: "Pintor", puntuacionTres: 27},
            {respuestaCuatro: "Carpintero", puntuacionCuatro: 19},
            {respuestaCinco: "Carniero", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Cosas que suelen rentarse",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Una casa", puntuacionUno: 38},
            {respuestaDos: "Un Avion", puntuacionDos: 34},
            {respuestaTres: "Departamento", puntuacionTres: 22},
            {respuestaCuatro: "Una Habitación", puntuacionCuatro: 18},
            {respuestaCinco: "Ropa", puntuacionCinco: 14}
        ]
    },
    {
	titulo: "Nombra un juego de mesa",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Uno", puntuacionUno: 41},
             {respuestaDos: "Turista", puntuacionDos: 36},
            {respuestaTres: "Domino", puntuacionTres: 29},
            {respuestaCuatro: "Baraja", puntuacionCuatro: 11},
            {respuestaCinco: "Lotería", puntuacionCinco: 8}
        ]
    },
    {
	titulo: "Ingrediente básico de un guacamole",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Aguacate", puntuacionUno: 40},
            {respuestaDos: "Tomate", puntuacionDos: 30},
            {respuestaTres: "Cebolla", puntuacionTres: 26},
            {respuestaCuatro: "Sal", puntuacionCuatro: 16},
            {respuestaCinco: "limón", puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Antes de la invención de la luz ¿Con que se Iluminaba?",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Vela", puntuacionUno: 27},
            {respuestaDos: "Quinques", puntuacionDos: 20},
            {respuestaTres: "Fogata", puntuacionTres: 15},
            {respuestaCuatro: "Antorcha", puntuacionCuatro: 7},
            {respuestaCinco: "Faroles", puntuacionCinco: 6}
        ]
    },
    {
	titulo: "Menciona refresco tipico de Sonora",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Coca Cola", puntuacionUno: 40},
            {respuestaDos: "Pepsi", puntuacionDos: 38},
            {respuestaTres: "Sprite", puntuacionTres: 20},
            {respuestaCuatro: "Fresca", puntuacionCuatro: 10},
            {respuestaCinco: "Fanta", puntuacionCinco: 6}
        ]
    },
    {
	titulo : "Menciona una razón para viajar.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Vacaciones", puntuacionUno: 32},
			{respuestaDos: "Fiesta familiar", puntuacionDos: 27},
			{respuestaTres: "Fecha festiva", puntuacionTres: 22},
			{respuestaCuatro: "Por mejor precio", puntuacionCuatro: 19},
			{respuestaCinco: "Descanso", puntuacionCinco: 16}		
		]
	},
	/*
	{
	titulo : "",
	tipo: ,
	respuestas: [
			{respuestaUno: "", puntuacionUno: },
			{respuestaDos: "", puntuacionDos: },
			{respuestaTres: "", puntuacionTres: },
			{respuestaCuatro: "", puntuacionCuatro: },
			{respuestaCinco: "", puntuacionCinco: }		
		]
	},*/


	//TERMINE LA TEMPORADA 12, EMPEZAR CON LA 13 EN ADELANTE.

	//MUSICA ------------------------------------------------------------------------------------------------------------------------------------------------------------------
		{
	titulo : "Menciona las claves musicales mas comunes (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 40},
			{respuestaDos: "Fa", puntuacionDos: 30},
			{respuestaTres: "Do", puntuacionTres: 22},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
		{
	titulo : "Menciona las claves musicales mas comunes (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 40},
			{respuestaDos: "Fa", puntuacionDos: 30},
			{respuestaTres: "Do", puntuacionTres: 22},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona armaduras mas comunes en musica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Do mayor, La menor (0#)", puntuacionUno: 36},
			{respuestaDos: "Re mayor, Si menor (2#)", puntuacionDos: 30},
			{respuestaTres: "Fa mayor, Re menor (1b)", puntuacionTres: 22},
			{respuestaCuatro: "Sol mayor, Mi menor (1#)", puntuacionCuatro: 17},
			{respuestaCinco: "La mayor, f# menor (3#)", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Menciona indicadores de Compás mas comunes en musica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "4/4", puntuacionUno: 50},
			{respuestaDos: "3/4", puntuacionDos: 46},
			{respuestaTres: "2/4", puntuacionTres: 26},
			{respuestaCuatro: "Compasillo (C)", puntuacionCuatro: 13},
			{respuestaCinco: "Compasillo Binario (C|)", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Nombra Alteraciones Musicales.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sostenido", puntuacionUno: 33},
			{respuestaDos: "Bemol", puntuacionDos: 29},
			{respuestaTres: "Becuadro", puntuacionTres: 20},
			{respuestaCuatro: "Doble Sostenido (x)", puntuacionCuatro: 5},
			{respuestaCinco: "Doble Bemol (bb)", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Nombra Articulaciones que podrias encontrar en una partitura.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Staccato (.)", puntuacionUno: 46},
			{respuestaDos: "Tenuto (-)", puntuacionDos: 37},
			{respuestaTres: "Marcato (v)", puntuacionTres: 18},
			{respuestaCuatro: "Trino (tr)", puntuacionCuatro: 15},
			{respuestaCinco: "Calderón (c.)", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona las notas musicales.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Corchea", puntuacionUno: 30},
			{respuestaDos: "Negra", puntuacionDos: 27},
			{respuestaTres: "Redonda", puntuacionTres: 25},
			{respuestaCuatro: "Blanca", puntuacionCuatro: 10},
			{respuestaCinco: "Cuadrada", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona barra de compas que encuentras en una Partitura (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Repeticion", puntuacionUno: 45},
			{respuestaDos: "Barra Final", puntuacionDos: 30},
			{respuestaTres: "Barra de compas", puntuacionTres: 27},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona dinámicas mas utilizadas.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Forte", puntuacionUno: 50},
			{respuestaDos: "Piano", puntuacionDos: 45},
			{respuestaTres: "MezzoPiano", puntuacionTres: 30},
			{respuestaCuatro: "MezzoForte", puntuacionCuatro: 25},
			{respuestaCinco: "Fortísimo", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona mejores compositores de música clásica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Wolfgang Amadeus Mozart", puntuacionUno: 46},
			{respuestaDos: "Ludwig van Beethoven", puntuacionDos: 44},
			{respuestaTres: "Vivaldi", puntuacionTres: 38},
			{respuestaCuatro: "Chopin", puntuacionCuatro: 30},
			{respuestaCinco: "Johann Sebastian Bach", puntuacionCinco: 28}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Sol mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 33},
			{respuestaDos: "Si", puntuacionDos: 28},
			{respuestaTres: "Re", puntuacionTres: 17},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Re mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Re", puntuacionUno: 45},
			{respuestaDos: "Fa#", puntuacionDos: 38},
			{respuestaTres: "La", puntuacionTres: 36},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Do mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Do", puntuacionUno: 20},
			{respuestaDos: "Mi", puntuacionDos: 17},
			{respuestaTres: "Sol", puntuacionTres: 14},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de La menor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "La", puntuacionUno: 60},
			{respuestaDos: "Do", puntuacionDos: 40},
			{respuestaTres: "Mi", puntuacionTres: 36},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona instrumentos que mas famosos en una orquesta.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Violin", puntuacionUno: 36},
			{respuestaDos: "Cello", puntuacionDos: 34},
			{respuestaTres: "Trompeta", puntuacionTres: 28},
			{respuestaCuatro: "Piano", puntuacionCuatro: 24},
			{respuestaCinco: "Viola c:", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona instrumentos de cuerda Frotada (4 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Violin", puntuacionUno: 24},
			{respuestaDos: "Cello", puntuacionDos: 20},
			{respuestaTres: "Viola", puntuacionTres: 13},
			{respuestaCuatro: "Contra Bajo", puntuacionCuatro: 8},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona instrumentos de cuerda Pulsada.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Guitarra", puntuacionUno: 34},
			{respuestaDos: "Arpa", puntuacionDos: 28},
			{respuestaTres: "Banjo", puntuacionTres: 20},
			{respuestaCuatro: "Tololoche", puntuacionCuatro: 17},
			{respuestaCinco: "Mandolina", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona instrumentos de Aliento",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Trompeta", puntuacionUno: 32},
			{respuestaDos: "Flauta", puntuacionDos: 28},
			{respuestaTres: "Clarinete", puntuacionTres: 23},
			{respuestaCuatro: "Oboe", puntuacionCuatro: 17},
			{respuestaCinco: "Fagot", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona las secciones de una orquesta (4 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Cuerdas", puntuacionUno: 40},
			{respuestaDos: "Maderas", puntuacionDos: 36},
			{respuestaTres: "Metales", puntuacionTres: 28},
			{respuestaCuatro: "Percusiones", puntuacionCuatro: 15},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	}
]

var sonido = new Audio();
sonido.src="mp3/correcto.mp3";

var sonidoIncorrecto = new Audio();
sonidoIncorrecto.src="mp3/incorrecto.mp3";

var sonidoGanador = new Audio();
sonidoGanador.src="mp3/ganador.mp3";

//Apellidos

var familiaUno = "";
var familiaDos = "";

//preguntas visibles
var preguntasVisibles = true;

//puntos normales, x2 o x3
var puntosMult = 0;

//Puntuaciones Familias.
var puntuacionPorRonda = 0;
var puntuacionFamUno = 0;
var puntuacionFamDos = 0;

var puntuacionUnoR= 0;
var textoRonda = "puntuacionPorRonda";


//Vidas
var vidasCambio = '<img src="img/x.png" class="vidas">';
var conteoVidas = 0;


const cantidadPreguntas = preguntas.length;
const cantidadPreguntasMenos1 = cantidadPreguntas - 1;

//Visibilidad de preguntas.
function mostrarPreguntas(){
	preguntasVisibles = document.getElementById("mostrarPreguntas");
	preguntasVisibles = preguntasVisibles.checked;
}

//Puntos normales
function puntosMultiplicados0(){
	puntosMult = document.getElementById("flexRadioDefault0").value;
}
//Puntos X2
function puntosMultiplicados1(){
	puntosMult = document.getElementById("flexRadioDefault1").value;
}
//Puntos X3
function puntosMultiplicados2(){
	puntosMult = document.getElementById("flexRadioDefault2").value;
}

function reinicioDeVidas(){
	conteoVidas = 0;
}

//Intefraz IDEX



function mainIndex(){
	var printMainIndex = '<div class="main"><div class="style-img-main-top"><img class="img-main-top" src="img/logo-100.png"></div><div class="menu-main"><div class="main-btns"><button class="btn-menu" onclick="preComenzar()">Jugar</button><button class="btn-menu" onclick="respuestas()">Respuestas</button><button class="btn-menu" onclick="instrucciones()">Instrucciones</button></div></div></div>';

	document.getElementById('mainIndex').innerHTML = printMainIndex;
}

//Interfaz para introducir los nombres de familias.
function preComenzar(){
	var printInt = '<div class="btn-position" id="list-btn-modal"><div class="containerRegister"><h3>Ingrese Familias</h3><br><input type="text" name="familiaUno" id="familiaUno" placeholder="Familia Uno"><h1>VS</h1><input type="text" name="familiaDos" id="familiaDos" placeholder="Familia Dos"><br><br><hr><p>Configuracion</p><div class="form-check"><input class="form-check-input" onclick="mostrarPreguntas()" type="checkbox" value="true" id="mostrarPreguntas" checked><label class="form-check-label" for="mostrarPreguntas">Mostrar preguntas</label></div><br><hr><br><button onclick="comenzar()">Comenzar</button></div><hr><br></div><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printInt;
}
 

//Interfaz con respuestas.
function respuestas(){
	var printResp = '<div class="mainListPreguntas"><div class="listPreguntas"><h4>Lista de preguntas</h4></div><br><p style="text-align: center;" >Cantidad de preguntas: '+cantidadPreguntas+'</p>';
	
for (var x = 0; x < cantidadPreguntas; x++) {

		printResp += '<hr><div class="accordion accordion-flush" id="flush-headingOne"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#resAccor'+x+'" aria-expanded="false" aria-controls="resAccor'+x+'"><div class="listRespText"><strong>'+x+':.  </strong>'+preguntas[x].titulo+'</div></button></h2><div id="resAccor'+x+'" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#flush-headingOne"><div class="accordion-body-X-Resp">';
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].puntuacionUno+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 2
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].puntuacionDos+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 3
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].puntuacionTres+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 4
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].puntuacionCuatro+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 5
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].puntuacionCinco+'</div>';
		printResp += '</div></div></div></div></div></div>';
		
	}
	printResp += '<br><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button></div>';
	document.getElementById('mainIndex').innerHTML = printResp;

}

function instrucciones(){
	var printAbout = '<h2>Se mostrara como se juega</h2><br><br><button onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printAbout;
}


//Interfaz donde se muestra la lista de preguntas.
function comenzar(){
	familiaUno = document.getElementById("familiaUno").value;
	familiaDos = document.getElementById("familiaDos").value;

var print = '<div class="container-menu-list"><p>Configuracion de puntuación:</p><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados0()" value="0" type="radio" name="flexRadioDefault" id="flexRadioDefault0" checked><label class="form-check-label" for="flexRadioDefault0">Normal |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados1()" value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1">Puntos X2 |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados2()" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2">Puntos X3</label></div><hr><br><p>Categorias especiales: </p><strong  class="containerCat"><p class="categoriasText">Normal</p>|<p class="categoriasText" style="color:red;">Musica</p></strong><hr><div class="listPreguntas"><h4>Lista de preguntas</h4><p>Cantidad de preguntas: '+cantidadPreguntasMenos1+'</p></div></div><div class="container-list-preg">';

for (var i = 0; i < cantidadPreguntas; i++) {

		//Botones
		print += '<div class="btn-list-modal" onclick="reinicioDeVidas()" data-bs-toggle="modal" data-bs-target="#exampleModal'+i+'">';
		print += '<ul class="list-group">';
		print += '<li class="list-group-item">';
		print += '<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched'+i+'">';
		
		print += '<label class="form-check-label stretched-link" for="firstCheckboxStretched'+i+'">';

		//Definir que categoria es
		if (preguntas[i].tipo == "musica"){
			print += '<strong style="color:red;">'+i+':. </strong>';
		}else {
			print += '<strong>'+i+':. </strong>';
		}

		//Definir si el usuario selecciono ver o no ver las preguntas.
		if (preguntasVisibles == true){
			print += ' '+preguntas[i].titulo;
		}else{
			print += '<i>...Preguntas Ocultas...</i>';
		}

		print += '</label>';

		print += '</li>';
		print += '</ul>';
		print += '</div>';

		//Contenedor Modal
		print += '<div class="modal fade" id="exampleModal'+i+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
		print += '<div class="modal-dialog modal-fullscreen">';
		print += '<div class="modal-content">';
		print += '<div class="modal-header">';
		print += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
		print += '</div>';

		if (preguntasVisibles == true){
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong>'+preguntas[i].titulo+'</h1>';
		}else{
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong><i>...Preguntas Ocultas...</i></h1>';
		}
		print += '<div class="modal-body">';


					

		//Contenido Modal ------------------------
		print += '<div class="container-panel">';
		print += '<div class="row familias">';
		print += '<div class="col stylePunt"><h2>'+familiaUno+'</h2><h2><div class="familiasCol" id="puntuacionFamUno'+i+'">0</div></h2>';
		print += '<hr><br><button class="button" id="enviar" onmousedown="sonidoGanador.play()" onclick="incrementarFamUno()"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div>'
		print += '<div class="col"><br><h5>PUNTUACIÓN POR RONDA</h5><h1><div class="textoPuntuacion" id="puntuacionPorRonda'+i+'">0</div></h1></div>';
		print += '<div class="col stylePunt"><h2>'+familiaDos+'</h2><h2><div class="familiasCol" id="puntuacionFamDos'+i+'">0</div></h2>';
		print += '<hr><br><button class="button" id="enviar" onmousedown="sonidoGanador.play()" onclick="incrementarFamDos()"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div>'
		print += '</div>';
		print += '<div class="tabla-respuestas">';
		print += '<h2>RESPUESTAS</H2>';
		print += '<hr>';


		//pizarra Respuesta 1

		
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesA'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 1.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregA"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[0].puntuacionUno+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

	

		//pizarra Respuesta 2
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesB'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 2.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregB"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[1].puntuacionDos+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 3
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesC'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 3.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregC"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[2].puntuacionTres+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 4
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesD'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 4.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregD"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[3].puntuacionCuatro+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 5
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesE'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 5.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregE"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[4].puntuacionCinco+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div>';

		

		print += '</div>';
		print += '<div class="row vidas-main" id="enviar" onmousedown="sonidoIncorrecto.play()" onclick="vidas'+i+'()"><div class="col" id="vida' + i + 'A"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'B"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'C"><img src="img/corazon.png" class="vidas"></div></div>';
		//Contenido Modal ------------------------

		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';

}
		print += '</div>';

	//Imprime lista de preguntas en el Dom.
	document.getElementById('mainIndex').innerHTML = print;

}

const divPuntuacionUno = "puntuacionFamUno";
const divPuntuacionDos = "puntuacionFamDos";

function incrementarFamUno(){
	if (puntosMult == 0){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var a = 0; a < cantidadPreguntas; a++) {
		var divContadorUno = divPuntuacionUno + a;
		document.getElementById(divContadorUno).innerHTML = puntuacionFamUno;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}

function incrementarFamDos(){
	if (puntosMult == 0){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var b = 0; b < cantidadPreguntas; b++) {	
		var divContadorDos = divPuntuacionDos + b;
		document.getElementById(divContadorDos).innerHTML = puntuacionFamDos;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}

// FUNCIONES PARA LAS TECLAS
var paseA0=true;
function funcionesA0(){
if (paseA0 == true){
puntuacionUnoR = preguntas[0].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA0 = false;
}
}
var paseB0=true;
function funcionesB0(){
if (paseB0 == true){
puntuacionUnoR = preguntas[0].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB0 = false;
}
}
var paseC0=true;
function funcionesC0(){
if (paseC0 == true){
puntuacionUnoR = preguntas[0].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC0 = false;
}
}
var paseD0=true;
function funcionesD0(){
if (paseD0 == true){
puntuacionUnoR = preguntas[0].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD0 = false;
}
}
var paseE0=true;
function funcionesE0(){
if (paseE0 == true){
puntuacionUnoR = preguntas[0].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE0 = false;
}
}
//----------------------------------------------
function vidas0(){
if(conteoVidas == 0){
document.getElementById("vida0A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida0B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida0C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA1=true;
function funcionesA1(){
if (paseA1 == true){
puntuacionUnoR = preguntas[1].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA1 = false;
}
}
var paseB1=true;
function funcionesB1(){
if (paseB1 == true){
puntuacionUnoR = preguntas[1].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB1 = false;
}
}
var paseC1=true;
function funcionesC1(){
if (paseC1 == true){
puntuacionUnoR = preguntas[1].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC1 = false;
}
}
var paseD1=true;
function funcionesD1(){
if (paseD1 == true){
puntuacionUnoR = preguntas[1].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD1 = false;
}
}
var paseE1=true;
function funcionesE1(){
if (paseE1 == true){
puntuacionUnoR = preguntas[1].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE1 = false;
}
}
//----------------------------------------------
function vidas1(){
if(conteoVidas == 0){
document.getElementById("vida1A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida1B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida1C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA2=true;
function funcionesA2(){
if (paseA2 == true){
puntuacionUnoR = preguntas[2].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA2 = false;
}
}
var paseB2=true;
function funcionesB2(){
if (paseB2 == true){
puntuacionUnoR = preguntas[2].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB2 = false;
}
}
var paseC2=true;
function funcionesC2(){
if (paseC2 == true){
puntuacionUnoR = preguntas[2].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC2 = false;
}
}
var paseD2=true;
function funcionesD2(){
if (paseD2 == true){
puntuacionUnoR = preguntas[2].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD2 = false;
}
}
var paseE2=true;
function funcionesE2(){
if (paseE2 == true){
puntuacionUnoR = preguntas[2].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE2 = false;
}
}
//----------------------------------------------
function vidas2(){
if(conteoVidas == 0){
document.getElementById("vida2A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida2B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida2C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA3=true;
function funcionesA3(){
if (paseA3 == true){
puntuacionUnoR = preguntas[3].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA3 = false;
}
}
var paseB3=true;
function funcionesB3(){
if (paseB3 == true){
puntuacionUnoR = preguntas[3].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB3 = false;
}
}
var paseC3=true;
function funcionesC3(){
if (paseC3 == true){
puntuacionUnoR = preguntas[3].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC3 = false;
}
}
var paseD3=true;
function funcionesD3(){
if (paseD3 == true){
puntuacionUnoR = preguntas[3].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD3 = false;
}
}
var paseE3=true;
function funcionesE3(){
if (paseE3 == true){
puntuacionUnoR = preguntas[3].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE3 = false;
}
}
//----------------------------------------------
function vidas3(){
if(conteoVidas == 0){
document.getElementById("vida3A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida3B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida3C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA4=true;
function funcionesA4(){
if (paseA4 == true){
puntuacionUnoR = preguntas[4].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA4 = false;
}
}
var paseB4=true;
function funcionesB4(){
if (paseB4 == true){
puntuacionUnoR = preguntas[4].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB4 = false;
}
}
var paseC4=true;
function funcionesC4(){
if (paseC4 == true){
puntuacionUnoR = preguntas[4].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC4 = false;
}
}
var paseD4=true;
function funcionesD4(){
if (paseD4 == true){
puntuacionUnoR = preguntas[4].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD4 = false;
}
}
var paseE4=true;
function funcionesE4(){
if (paseE4 == true){
puntuacionUnoR = preguntas[4].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE4 = false;
}
}
//----------------------------------------------
function vidas4(){
if(conteoVidas == 0){
document.getElementById("vida4A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida4B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida4C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA5=true;
function funcionesA5(){
if (paseA5 == true){
puntuacionUnoR = preguntas[5].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA5 = false;
}
}
var paseB5=true;
function funcionesB5(){
if (paseB5 == true){
puntuacionUnoR = preguntas[5].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB5 = false;
}
}
var paseC5=true;
function funcionesC5(){
if (paseC5 == true){
puntuacionUnoR = preguntas[5].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC5 = false;
}
}
var paseD5=true;
function funcionesD5(){
if (paseD5 == true){
puntuacionUnoR = preguntas[5].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD5 = false;
}
}
var paseE5=true;
function funcionesE5(){
if (paseE5 == true){
puntuacionUnoR = preguntas[5].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE5 = false;
}
}
//----------------------------------------------
function vidas5(){
if(conteoVidas == 0){
document.getElementById("vida5A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida5B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida5C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA6=true;
function funcionesA6(){
if (paseA6 == true){
puntuacionUnoR = preguntas[6].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA6 = false;
}
}
var paseB6=true;
function funcionesB6(){
if (paseB6 == true){
puntuacionUnoR = preguntas[6].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB6 = false;
}
}
var paseC6=true;
function funcionesC6(){
if (paseC6 == true){
puntuacionUnoR = preguntas[6].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC6 = false;
}
}
var paseD6=true;
function funcionesD6(){
if (paseD6 == true){
puntuacionUnoR = preguntas[6].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD6 = false;
}
}
var paseE6=true;
function funcionesE6(){
if (paseE6 == true){
puntuacionUnoR = preguntas[6].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE6 = false;
}
}
//----------------------------------------------
function vidas6(){
if(conteoVidas == 0){
document.getElementById("vida6A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida6B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida6C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA7=true;
function funcionesA7(){
if (paseA7 == true){
puntuacionUnoR = preguntas[7].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA7 = false;
}
}
var paseB7=true;
function funcionesB7(){
if (paseB7 == true){
puntuacionUnoR = preguntas[7].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB7 = false;
}
}
var paseC7=true;
function funcionesC7(){
if (paseC7 == true){
puntuacionUnoR = preguntas[7].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC7 = false;
}
}
var paseD7=true;
function funcionesD7(){
if (paseD7 == true){
puntuacionUnoR = preguntas[7].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD7 = false;
}
}
var paseE7=true;
function funcionesE7(){
if (paseE7 == true){
puntuacionUnoR = preguntas[7].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE7 = false;
}
}
//----------------------------------------------
function vidas7(){
if(conteoVidas == 0){
document.getElementById("vida7A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida7B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida7C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA8=true;
function funcionesA8(){
if (paseA8 == true){
puntuacionUnoR = preguntas[8].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA8 = false;
}
}
var paseB8=true;
function funcionesB8(){
if (paseB8 == true){
puntuacionUnoR = preguntas[8].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB8 = false;
}
}
var paseC8=true;
function funcionesC8(){
if (paseC8 == true){
puntuacionUnoR = preguntas[8].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC8 = false;
}
}
var paseD8=true;
function funcionesD8(){
if (paseD8 == true){
puntuacionUnoR = preguntas[8].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD8 = false;
}
}
var paseE8=true;
function funcionesE8(){
if (paseE8 == true){
puntuacionUnoR = preguntas[8].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE8 = false;
}
}
//----------------------------------------------
function vidas8(){
if(conteoVidas == 0){
document.getElementById("vida8A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida8B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida8C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA9=true;
function funcionesA9(){
if (paseA9 == true){
puntuacionUnoR = preguntas[9].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA9 = false;
}
}
var paseB9=true;
function funcionesB9(){
if (paseB9 == true){
puntuacionUnoR = preguntas[9].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB9 = false;
}
}
var paseC9=true;
function funcionesC9(){
if (paseC9 == true){
puntuacionUnoR = preguntas[9].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC9 = false;
}
}
var paseD9=true;
function funcionesD9(){
if (paseD9 == true){
puntuacionUnoR = preguntas[9].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD9 = false;
}
}
var paseE9=true;
function funcionesE9(){
if (paseE9 == true){
puntuacionUnoR = preguntas[9].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE9 = false;
}
}
//----------------------------------------------
function vidas9(){
if(conteoVidas == 0){
document.getElementById("vida9A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida9B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida9C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA10=true;
function funcionesA10(){
if (paseA10 == true){
puntuacionUnoR = preguntas[10].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA10 = false;
}
}
var paseB10=true;
function funcionesB10(){
if (paseB10 == true){
puntuacionUnoR = preguntas[10].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB10 = false;
}
}
var paseC10=true;
function funcionesC10(){
if (paseC10 == true){
puntuacionUnoR = preguntas[10].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC10 = false;
}
}
var paseD10=true;
function funcionesD10(){
if (paseD10 == true){
puntuacionUnoR = preguntas[10].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD10 = false;
}
}
var paseE10=true;
function funcionesE10(){
if (paseE10 == true){
puntuacionUnoR = preguntas[10].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE10 = false;
}
}
//----------------------------------------------
function vidas10(){
if(conteoVidas == 0){
document.getElementById("vida10A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida10B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida10C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA11=true;
function funcionesA11(){
if (paseA11 == true){
puntuacionUnoR = preguntas[11].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA11 = false;
}
}
var paseB11=true;
function funcionesB11(){
if (paseB11 == true){
puntuacionUnoR = preguntas[11].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB11 = false;
}
}
var paseC11=true;
function funcionesC11(){
if (paseC11 == true){
puntuacionUnoR = preguntas[11].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC11 = false;
}
}
var paseD11=true;
function funcionesD11(){
if (paseD11 == true){
puntuacionUnoR = preguntas[11].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD11 = false;
}
}
var paseE11=true;
function funcionesE11(){
if (paseE11 == true){
puntuacionUnoR = preguntas[11].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE11 = false;
}
}
//----------------------------------------------
function vidas11(){
if(conteoVidas == 0){
document.getElementById("vida11A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida11B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida11C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA12=true;
function funcionesA12(){
if (paseA12 == true){
puntuacionUnoR = preguntas[12].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA12 = false;
}
}
var paseB12=true;
function funcionesB12(){
if (paseB12 == true){
puntuacionUnoR = preguntas[12].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB12 = false;
}
}
var paseC12=true;
function funcionesC12(){
if (paseC12 == true){
puntuacionUnoR = preguntas[12].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC12 = false;
}
}
var paseD12=true;
function funcionesD12(){
if (paseD12 == true){
puntuacionUnoR = preguntas[12].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD12 = false;
}
}
var paseE12=true;
function funcionesE12(){
if (paseE12 == true){
puntuacionUnoR = preguntas[12].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE12 = false;
}
}
//----------------------------------------------
function vidas12(){
if(conteoVidas == 0){
document.getElementById("vida12A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida12B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida12C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA13=true;
function funcionesA13(){
if (paseA13 == true){
puntuacionUnoR = preguntas[13].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA13 = false;
}
}
var paseB13=true;
function funcionesB13(){
if (paseB13 == true){
puntuacionUnoR = preguntas[13].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB13 = false;
}
}
var paseC13=true;
function funcionesC13(){
if (paseC13 == true){
puntuacionUnoR = preguntas[13].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC13 = false;
}
}
var paseD13=true;
function funcionesD13(){
if (paseD13 == true){
puntuacionUnoR = preguntas[13].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD13 = false;
}
}
var paseE13=true;
function funcionesE13(){
if (paseE13 == true){
puntuacionUnoR = preguntas[13].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE13 = false;
}
}
//----------------------------------------------
function vidas13(){
if(conteoVidas == 0){
document.getElementById("vida13A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida13B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida13C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA14=true;
function funcionesA14(){
if (paseA14 == true){
puntuacionUnoR = preguntas[14].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA14 = false;
}
}
var paseB14=true;
function funcionesB14(){
if (paseB14 == true){
puntuacionUnoR = preguntas[14].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB14 = false;
}
}
var paseC14=true;
function funcionesC14(){
if (paseC14 == true){
puntuacionUnoR = preguntas[14].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC14 = false;
}
}
var paseD14=true;
function funcionesD14(){
if (paseD14 == true){
puntuacionUnoR = preguntas[14].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD14 = false;
}
}
var paseE14=true;
function funcionesE14(){
if (paseE14 == true){
puntuacionUnoR = preguntas[14].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE14 = false;
}
}
//----------------------------------------------
function vidas14(){
if(conteoVidas == 0){
document.getElementById("vida14A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida14B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida14C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA15=true;
function funcionesA15(){
if (paseA15 == true){
puntuacionUnoR = preguntas[15].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA15 = false;
}
}
var paseB15=true;
function funcionesB15(){
if (paseB15 == true){
puntuacionUnoR = preguntas[15].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB15 = false;
}
}
var paseC15=true;
function funcionesC15(){
if (paseC15 == true){
puntuacionUnoR = preguntas[15].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC15 = false;
}
}
var paseD15=true;
function funcionesD15(){
if (paseD15 == true){
puntuacionUnoR = preguntas[15].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD15 = false;
}
}
var paseE15=true;
function funcionesE15(){
if (paseE15 == true){
puntuacionUnoR = preguntas[15].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE15 = false;
}
}
//----------------------------------------------
function vidas15(){
if(conteoVidas == 0){
document.getElementById("vida15A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida15B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida15C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA16=true;
function funcionesA16(){
if (paseA16 == true){
puntuacionUnoR = preguntas[16].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA16 = false;
}
}
var paseB16=true;
function funcionesB16(){
if (paseB16 == true){
puntuacionUnoR = preguntas[16].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB16 = false;
}
}
var paseC16=true;
function funcionesC16(){
if (paseC16 == true){
puntuacionUnoR = preguntas[16].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC16 = false;
}
}
var paseD16=true;
function funcionesD16(){
if (paseD16 == true){
puntuacionUnoR = preguntas[16].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD16 = false;
}
}
var paseE16=true;
function funcionesE16(){
if (paseE16 == true){
puntuacionUnoR = preguntas[16].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE16 = false;
}
}
//----------------------------------------------
function vidas16(){
if(conteoVidas == 0){
document.getElementById("vida16A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida16B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida16C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA17=true;
function funcionesA17(){
if (paseA17 == true){
puntuacionUnoR = preguntas[17].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA17 = false;
}
}
var paseB17=true;
function funcionesB17(){
if (paseB17 == true){
puntuacionUnoR = preguntas[17].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB17 = false;
}
}
var paseC17=true;
function funcionesC17(){
if (paseC17 == true){
puntuacionUnoR = preguntas[17].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC17 = false;
}
}
var paseD17=true;
function funcionesD17(){
if (paseD17 == true){
puntuacionUnoR = preguntas[17].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD17 = false;
}
}
var paseE17=true;
function funcionesE17(){
if (paseE17 == true){
puntuacionUnoR = preguntas[17].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE17 = false;
}
}
//----------------------------------------------
function vidas17(){
if(conteoVidas == 0){
document.getElementById("vida17A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida17B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida17C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA18=true;
function funcionesA18(){
if (paseA18 == true){
puntuacionUnoR = preguntas[18].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA18 = false;
}
}
var paseB18=true;
function funcionesB18(){
if (paseB18 == true){
puntuacionUnoR = preguntas[18].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB18 = false;
}
}
var paseC18=true;
function funcionesC18(){
if (paseC18 == true){
puntuacionUnoR = preguntas[18].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC18 = false;
}
}
var paseD18=true;
function funcionesD18(){
if (paseD18 == true){
puntuacionUnoR = preguntas[18].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD18 = false;
}
}
var paseE18=true;
function funcionesE18(){
if (paseE18 == true){
puntuacionUnoR = preguntas[18].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE18 = false;
}
}
//----------------------------------------------
function vidas18(){
if(conteoVidas == 0){
document.getElementById("vida18A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida18B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida18C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA19=true;
function funcionesA19(){
if (paseA19 == true){
puntuacionUnoR = preguntas[19].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA19 = false;
}
}
var paseB19=true;
function funcionesB19(){
if (paseB19 == true){
puntuacionUnoR = preguntas[19].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB19 = false;
}
}
var paseC19=true;
function funcionesC19(){
if (paseC19 == true){
puntuacionUnoR = preguntas[19].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC19 = false;
}
}
var paseD19=true;
function funcionesD19(){
if (paseD19 == true){
puntuacionUnoR = preguntas[19].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD19 = false;
}
}
var paseE19=true;
function funcionesE19(){
if (paseE19 == true){
puntuacionUnoR = preguntas[19].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE19 = false;
}
}
//----------------------------------------------
function vidas19(){
if(conteoVidas == 0){
document.getElementById("vida19A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida19B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida19C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA20=true;
function funcionesA20(){
if (paseA20 == true){
puntuacionUnoR = preguntas[20].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA20 = false;
}
}
var paseB20=true;
function funcionesB20(){
if (paseB20 == true){
puntuacionUnoR = preguntas[20].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB20 = false;
}
}
var paseC20=true;
function funcionesC20(){
if (paseC20 == true){
puntuacionUnoR = preguntas[20].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC20 = false;
}
}
var paseD20=true;
function funcionesD20(){
if (paseD20 == true){
puntuacionUnoR = preguntas[20].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD20 = false;
}
}
var paseE20=true;
function funcionesE20(){
if (paseE20 == true){
puntuacionUnoR = preguntas[20].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE20 = false;
}
}
//----------------------------------------------
function vidas20(){
if(conteoVidas == 0){
document.getElementById("vida20A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida20B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida20C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA21=true;
function funcionesA21(){
if (paseA21 == true){
puntuacionUnoR = preguntas[21].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA21 = false;
}
}
var paseB21=true;
function funcionesB21(){
if (paseB21 == true){
puntuacionUnoR = preguntas[21].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB21 = false;
}
}
var paseC21=true;
function funcionesC21(){
if (paseC21 == true){
puntuacionUnoR = preguntas[21].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC21 = false;
}
}
var paseD21=true;
function funcionesD21(){
if (paseD21 == true){
puntuacionUnoR = preguntas[21].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD21 = false;
}
}
var paseE21=true;
function funcionesE21(){
if (paseE21 == true){
puntuacionUnoR = preguntas[21].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE21 = false;
}
}
//----------------------------------------------
function vidas21(){
if(conteoVidas == 0){
document.getElementById("vida21A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida21B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida21C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA22=true;
function funcionesA22(){
if (paseA22 == true){
puntuacionUnoR = preguntas[22].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA22 = false;
}
}
var paseB22=true;
function funcionesB22(){
if (paseB22 == true){
puntuacionUnoR = preguntas[22].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB22 = false;
}
}
var paseC22=true;
function funcionesC22(){
if (paseC22 == true){
puntuacionUnoR = preguntas[22].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC22 = false;
}
}
var paseD22=true;
function funcionesD22(){
if (paseD22 == true){
puntuacionUnoR = preguntas[22].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD22 = false;
}
}
var paseE22=true;
function funcionesE22(){
if (paseE22 == true){
puntuacionUnoR = preguntas[22].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE22 = false;
}
}
//----------------------------------------------
function vidas22(){
if(conteoVidas == 0){
document.getElementById("vida22A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida22B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida22C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA23=true;
function funcionesA23(){
if (paseA23 == true){
puntuacionUnoR = preguntas[23].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA23 = false;
}
}
var paseB23=true;
function funcionesB23(){
if (paseB23 == true){
puntuacionUnoR = preguntas[23].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB23 = false;
}
}
var paseC23=true;
function funcionesC23(){
if (paseC23 == true){
puntuacionUnoR = preguntas[23].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC23 = false;
}
}
var paseD23=true;
function funcionesD23(){
if (paseD23 == true){
puntuacionUnoR = preguntas[23].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD23 = false;
}
}
var paseE23=true;
function funcionesE23(){
if (paseE23 == true){
puntuacionUnoR = preguntas[23].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE23 = false;
}
}
//----------------------------------------------
function vidas23(){
if(conteoVidas == 0){
document.getElementById("vida23A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida23B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida23C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA24=true;
function funcionesA24(){
if (paseA24 == true){
puntuacionUnoR = preguntas[24].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA24 = false;
}
}
var paseB24=true;
function funcionesB24(){
if (paseB24 == true){
puntuacionUnoR = preguntas[24].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB24 = false;
}
}
var paseC24=true;
function funcionesC24(){
if (paseC24 == true){
puntuacionUnoR = preguntas[24].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC24 = false;
}
}
var paseD24=true;
function funcionesD24(){
if (paseD24 == true){
puntuacionUnoR = preguntas[24].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD24 = false;
}
}
var paseE24=true;
function funcionesE24(){
if (paseE24 == true){
puntuacionUnoR = preguntas[24].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE24 = false;
}
}
//----------------------------------------------
function vidas24(){
if(conteoVidas == 0){
document.getElementById("vida24A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida24B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida24C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA25=true;
function funcionesA25(){
if (paseA25 == true){
puntuacionUnoR = preguntas[25].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA25 = false;
}
}
var paseB25=true;
function funcionesB25(){
if (paseB25 == true){
puntuacionUnoR = preguntas[25].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB25 = false;
}
}
var paseC25=true;
function funcionesC25(){
if (paseC25 == true){
puntuacionUnoR = preguntas[25].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC25 = false;
}
}
var paseD25=true;
function funcionesD25(){
if (paseD25 == true){
puntuacionUnoR = preguntas[25].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD25 = false;
}
}
var paseE25=true;
function funcionesE25(){
if (paseE25 == true){
puntuacionUnoR = preguntas[25].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE25 = false;
}
}
//----------------------------------------------
function vidas25(){
if(conteoVidas == 0){
document.getElementById("vida25A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida25B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida25C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA26=true;
function funcionesA26(){
if (paseA26 == true){
puntuacionUnoR = preguntas[26].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA26 = false;
}
}
var paseB26=true;
function funcionesB26(){
if (paseB26 == true){
puntuacionUnoR = preguntas[26].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB26 = false;
}
}
var paseC26=true;
function funcionesC26(){
if (paseC26 == true){
puntuacionUnoR = preguntas[26].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC26 = false;
}
}
var paseD26=true;
function funcionesD26(){
if (paseD26 == true){
puntuacionUnoR = preguntas[26].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD26 = false;
}
}
var paseE26=true;
function funcionesE26(){
if (paseE26 == true){
puntuacionUnoR = preguntas[26].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE26 = false;
}
}
//----------------------------------------------
function vidas26(){
if(conteoVidas == 0){
document.getElementById("vida26A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida26B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida26C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA27=true;
function funcionesA27(){
if (paseA27 == true){
puntuacionUnoR = preguntas[27].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA27 = false;
}
}
var paseB27=true;
function funcionesB27(){
if (paseB27 == true){
puntuacionUnoR = preguntas[27].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB27 = false;
}
}
var paseC27=true;
function funcionesC27(){
if (paseC27 == true){
puntuacionUnoR = preguntas[27].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC27 = false;
}
}
var paseD27=true;
function funcionesD27(){
if (paseD27 == true){
puntuacionUnoR = preguntas[27].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD27 = false;
}
}
var paseE27=true;
function funcionesE27(){
if (paseE27 == true){
puntuacionUnoR = preguntas[27].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE27 = false;
}
}
//----------------------------------------------
function vidas27(){
if(conteoVidas == 0){
document.getElementById("vida27A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida27B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida27C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA28=true;
function funcionesA28(){
if (paseA28 == true){
puntuacionUnoR = preguntas[28].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA28 = false;
}
}
var paseB28=true;
function funcionesB28(){
if (paseB28 == true){
puntuacionUnoR = preguntas[28].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB28 = false;
}
}
var paseC28=true;
function funcionesC28(){
if (paseC28 == true){
puntuacionUnoR = preguntas[28].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC28 = false;
}
}
var paseD28=true;
function funcionesD28(){
if (paseD28 == true){
puntuacionUnoR = preguntas[28].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD28 = false;
}
}
var paseE28=true;
function funcionesE28(){
if (paseE28 == true){
puntuacionUnoR = preguntas[28].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE28 = false;
}
}
//----------------------------------------------
function vidas28(){
if(conteoVidas == 0){
document.getElementById("vida28A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida28B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida28C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA29=true;
function funcionesA29(){
if (paseA29 == true){
puntuacionUnoR = preguntas[29].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA29 = false;
}
}
var paseB29=true;
function funcionesB29(){
if (paseB29 == true){
puntuacionUnoR = preguntas[29].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB29 = false;
}
}
var paseC29=true;
function funcionesC29(){
if (paseC29 == true){
puntuacionUnoR = preguntas[29].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC29 = false;
}
}
var paseD29=true;
function funcionesD29(){
if (paseD29 == true){
puntuacionUnoR = preguntas[29].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD29 = false;
}
}
var paseE29=true;
function funcionesE29(){
if (paseE29 == true){
puntuacionUnoR = preguntas[29].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE29 = false;
}
}
//----------------------------------------------
function vidas29(){
if(conteoVidas == 0){
document.getElementById("vida29A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida29B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida29C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA30=true;
function funcionesA30(){
if (paseA30 == true){
puntuacionUnoR = preguntas[30].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA30 = false;
}
}
var paseB30=true;
function funcionesB30(){
if (paseB30 == true){
puntuacionUnoR = preguntas[30].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB30 = false;
}
}
var paseC30=true;
function funcionesC30(){
if (paseC30 == true){
puntuacionUnoR = preguntas[30].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC30 = false;
}
}
var paseD30=true;
function funcionesD30(){
if (paseD30 == true){
puntuacionUnoR = preguntas[30].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD30 = false;
}
}
var paseE30=true;
function funcionesE30(){
if (paseE30 == true){
puntuacionUnoR = preguntas[30].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE30 = false;
}
}
//----------------------------------------------
function vidas30(){
if(conteoVidas == 0){
document.getElementById("vida30A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida30B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida30C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA31=true;
function funcionesA31(){
if (paseA31 == true){
puntuacionUnoR = preguntas[31].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA31 = false;
}
}
var paseB31=true;
function funcionesB31(){
if (paseB31 == true){
puntuacionUnoR = preguntas[31].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB31 = false;
}
}
var paseC31=true;
function funcionesC31(){
if (paseC31 == true){
puntuacionUnoR = preguntas[31].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC31 = false;
}
}
var paseD31=true;
function funcionesD31(){
if (paseD31 == true){
puntuacionUnoR = preguntas[31].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD31 = false;
}
}
var paseE31=true;
function funcionesE31(){
if (paseE31 == true){
puntuacionUnoR = preguntas[31].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE31 = false;
}
}
//----------------------------------------------
function vidas31(){
if(conteoVidas == 0){
document.getElementById("vida31A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida31B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida31C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA32=true;
function funcionesA32(){
if (paseA32 == true){
puntuacionUnoR = preguntas[32].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA32 = false;
}
}
var paseB32=true;
function funcionesB32(){
if (paseB32 == true){
puntuacionUnoR = preguntas[32].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB32 = false;
}
}
var paseC32=true;
function funcionesC32(){
if (paseC32 == true){
puntuacionUnoR = preguntas[32].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC32 = false;
}
}
var paseD32=true;
function funcionesD32(){
if (paseD32 == true){
puntuacionUnoR = preguntas[32].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD32 = false;
}
}
var paseE32=true;
function funcionesE32(){
if (paseE32 == true){
puntuacionUnoR = preguntas[32].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE32 = false;
}
}
//----------------------------------------------
function vidas32(){
if(conteoVidas == 0){
document.getElementById("vida32A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida32B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida32C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA33=true;
function funcionesA33(){
if (paseA33 == true){
puntuacionUnoR = preguntas[33].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA33 = false;
}
}
var paseB33=true;
function funcionesB33(){
if (paseB33 == true){
puntuacionUnoR = preguntas[33].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB33 = false;
}
}
var paseC33=true;
function funcionesC33(){
if (paseC33 == true){
puntuacionUnoR = preguntas[33].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC33 = false;
}
}
var paseD33=true;
function funcionesD33(){
if (paseD33 == true){
puntuacionUnoR = preguntas[33].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD33 = false;
}
}
var paseE33=true;
function funcionesE33(){
if (paseE33 == true){
puntuacionUnoR = preguntas[33].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE33 = false;
}
}
//----------------------------------------------
function vidas33(){
if(conteoVidas == 0){
document.getElementById("vida33A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida33B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida33C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA34=true;
function funcionesA34(){
if (paseA34 == true){
puntuacionUnoR = preguntas[34].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA34 = false;
}
}
var paseB34=true;
function funcionesB34(){
if (paseB34 == true){
puntuacionUnoR = preguntas[34].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB34 = false;
}
}
var paseC34=true;
function funcionesC34(){
if (paseC34 == true){
puntuacionUnoR = preguntas[34].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC34 = false;
}
}
var paseD34=true;
function funcionesD34(){
if (paseD34 == true){
puntuacionUnoR = preguntas[34].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD34 = false;
}
}
var paseE34=true;
function funcionesE34(){
if (paseE34 == true){
puntuacionUnoR = preguntas[34].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE34 = false;
}
}
//----------------------------------------------
function vidas34(){
if(conteoVidas == 0){
document.getElementById("vida34A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida34B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida34C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA35=true;
function funcionesA35(){
if (paseA35 == true){
puntuacionUnoR = preguntas[35].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA35 = false;
}
}
var paseB35=true;
function funcionesB35(){
if (paseB35 == true){
puntuacionUnoR = preguntas[35].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB35 = false;
}
}
var paseC35=true;
function funcionesC35(){
if (paseC35 == true){
puntuacionUnoR = preguntas[35].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC35 = false;
}
}
var paseD35=true;
function funcionesD35(){
if (paseD35 == true){
puntuacionUnoR = preguntas[35].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD35 = false;
}
}
var paseE35=true;
function funcionesE35(){
if (paseE35 == true){
puntuacionUnoR = preguntas[35].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE35 = false;
}
}
//----------------------------------------------
function vidas35(){
if(conteoVidas == 0){
document.getElementById("vida35A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida35B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida35C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA36=true;
function funcionesA36(){
if (paseA36 == true){
puntuacionUnoR = preguntas[36].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA36 = false;
}
}
var paseB36=true;
function funcionesB36(){
if (paseB36 == true){
puntuacionUnoR = preguntas[36].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB36 = false;
}
}
var paseC36=true;
function funcionesC36(){
if (paseC36 == true){
puntuacionUnoR = preguntas[36].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC36 = false;
}
}
var paseD36=true;
function funcionesD36(){
if (paseD36 == true){
puntuacionUnoR = preguntas[36].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD36 = false;
}
}
var paseE36=true;
function funcionesE36(){
if (paseE36 == true){
puntuacionUnoR = preguntas[36].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE36 = false;
}
}
//----------------------------------------------
function vidas36(){
if(conteoVidas == 0){
document.getElementById("vida36A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida36B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida36C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA37=true;
function funcionesA37(){
if (paseA37 == true){
puntuacionUnoR = preguntas[37].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA37 = false;
}
}
var paseB37=true;
function funcionesB37(){
if (paseB37 == true){
puntuacionUnoR = preguntas[37].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB37 = false;
}
}
var paseC37=true;
function funcionesC37(){
if (paseC37 == true){
puntuacionUnoR = preguntas[37].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC37 = false;
}
}
var paseD37=true;
function funcionesD37(){
if (paseD37 == true){
puntuacionUnoR = preguntas[37].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD37 = false;
}
}
var paseE37=true;
function funcionesE37(){
if (paseE37 == true){
puntuacionUnoR = preguntas[37].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE37 = false;
}
}
//----------------------------------------------
function vidas37(){
if(conteoVidas == 0){
document.getElementById("vida37A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida37B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida37C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA38=true;
function funcionesA38(){
if (paseA38 == true){
puntuacionUnoR = preguntas[38].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA38 = false;
}
}
var paseB38=true;
function funcionesB38(){
if (paseB38 == true){
puntuacionUnoR = preguntas[38].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB38 = false;
}
}
var paseC38=true;
function funcionesC38(){
if (paseC38 == true){
puntuacionUnoR = preguntas[38].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC38 = false;
}
}
var paseD38=true;
function funcionesD38(){
if (paseD38 == true){
puntuacionUnoR = preguntas[38].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD38 = false;
}
}
var paseE38=true;
function funcionesE38(){
if (paseE38 == true){
puntuacionUnoR = preguntas[38].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE38 = false;
}
}
//----------------------------------------------
function vidas38(){
if(conteoVidas == 0){
document.getElementById("vida38A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida38B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida38C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA39=true;
function funcionesA39(){
if (paseA39 == true){
puntuacionUnoR = preguntas[39].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA39 = false;
}
}
var paseB39=true;
function funcionesB39(){
if (paseB39 == true){
puntuacionUnoR = preguntas[39].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB39 = false;
}
}
var paseC39=true;
function funcionesC39(){
if (paseC39 == true){
puntuacionUnoR = preguntas[39].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC39 = false;
}
}
var paseD39=true;
function funcionesD39(){
if (paseD39 == true){
puntuacionUnoR = preguntas[39].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD39 = false;
}
}
var paseE39=true;
function funcionesE39(){
if (paseE39 == true){
puntuacionUnoR = preguntas[39].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE39 = false;
}
}
//----------------------------------------------
function vidas39(){
if(conteoVidas == 0){
document.getElementById("vida39A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida39B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida39C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA40=true;
function funcionesA40(){
if (paseA40 == true){
puntuacionUnoR = preguntas[40].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA40 = false;
}
}
var paseB40=true;
function funcionesB40(){
if (paseB40 == true){
puntuacionUnoR = preguntas[40].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB40 = false;
}
}
var paseC40=true;
function funcionesC40(){
if (paseC40 == true){
puntuacionUnoR = preguntas[40].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC40 = false;
}
}
var paseD40=true;
function funcionesD40(){
if (paseD40 == true){
puntuacionUnoR = preguntas[40].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD40 = false;
}
}
var paseE40=true;
function funcionesE40(){
if (paseE40 == true){
puntuacionUnoR = preguntas[40].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE40 = false;
}
}
//----------------------------------------------
function vidas40(){
if(conteoVidas == 0){
document.getElementById("vida40A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida40B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida40C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA41=true;
function funcionesA41(){
if (paseA41 == true){
puntuacionUnoR = preguntas[41].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA41 = false;
}
}
var paseB41=true;
function funcionesB41(){
if (paseB41 == true){
puntuacionUnoR = preguntas[41].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB41 = false;
}
}
var paseC41=true;
function funcionesC41(){
if (paseC41 == true){
puntuacionUnoR = preguntas[41].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC41 = false;
}
}
var paseD41=true;
function funcionesD41(){
if (paseD41 == true){
puntuacionUnoR = preguntas[41].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD41 = false;
}
}
var paseE41=true;
function funcionesE41(){
if (paseE41 == true){
puntuacionUnoR = preguntas[41].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE41 = false;
}
}
//----------------------------------------------
function vidas41(){
if(conteoVidas == 0){
document.getElementById("vida41A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida41B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida41C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA42=true;
function funcionesA42(){
if (paseA42 == true){
puntuacionUnoR = preguntas[42].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA42 = false;
}
}
var paseB42=true;
function funcionesB42(){
if (paseB42 == true){
puntuacionUnoR = preguntas[42].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB42 = false;
}
}
var paseC42=true;
function funcionesC42(){
if (paseC42 == true){
puntuacionUnoR = preguntas[42].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC42 = false;
}
}
var paseD42=true;
function funcionesD42(){
if (paseD42 == true){
puntuacionUnoR = preguntas[42].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD42 = false;
}
}
var paseE42=true;
function funcionesE42(){
if (paseE42 == true){
puntuacionUnoR = preguntas[42].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE42 = false;
}
}
//----------------------------------------------
function vidas42(){
if(conteoVidas == 0){
document.getElementById("vida42A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida42B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida42C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA43=true;
function funcionesA43(){
if (paseA43 == true){
puntuacionUnoR = preguntas[43].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA43 = false;
}
}
var paseB43=true;
function funcionesB43(){
if (paseB43 == true){
puntuacionUnoR = preguntas[43].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB43 = false;
}
}
var paseC43=true;
function funcionesC43(){
if (paseC43 == true){
puntuacionUnoR = preguntas[43].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC43 = false;
}
}
var paseD43=true;
function funcionesD43(){
if (paseD43 == true){
puntuacionUnoR = preguntas[43].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD43 = false;
}
}
var paseE43=true;
function funcionesE43(){
if (paseE43 == true){
puntuacionUnoR = preguntas[43].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE43 = false;
}
}
//----------------------------------------------
function vidas43(){
if(conteoVidas == 0){
document.getElementById("vida43A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida43B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida43C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA44=true;
function funcionesA44(){
if (paseA44 == true){
puntuacionUnoR = preguntas[44].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA44 = false;
}
}
var paseB44=true;
function funcionesB44(){
if (paseB44 == true){
puntuacionUnoR = preguntas[44].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB44 = false;
}
}
var paseC44=true;
function funcionesC44(){
if (paseC44 == true){
puntuacionUnoR = preguntas[44].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC44 = false;
}
}
var paseD44=true;
function funcionesD44(){
if (paseD44 == true){
puntuacionUnoR = preguntas[44].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD44 = false;
}
}
var paseE44=true;
function funcionesE44(){
if (paseE44 == true){
puntuacionUnoR = preguntas[44].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE44 = false;
}
}
//----------------------------------------------
function vidas44(){
if(conteoVidas == 0){
document.getElementById("vida44A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida44B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida44C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA45=true;
function funcionesA45(){
if (paseA45 == true){
puntuacionUnoR = preguntas[45].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA45 = false;
}
}
var paseB45=true;
function funcionesB45(){
if (paseB45 == true){
puntuacionUnoR = preguntas[45].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB45 = false;
}
}
var paseC45=true;
function funcionesC45(){
if (paseC45 == true){
puntuacionUnoR = preguntas[45].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC45 = false;
}
}
var paseD45=true;
function funcionesD45(){
if (paseD45 == true){
puntuacionUnoR = preguntas[45].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD45 = false;
}
}
var paseE45=true;
function funcionesE45(){
if (paseE45 == true){
puntuacionUnoR = preguntas[45].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE45 = false;
}
}
//----------------------------------------------
function vidas45(){
if(conteoVidas == 0){
document.getElementById("vida45A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida45B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida45C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA46=true;
function funcionesA46(){
if (paseA46 == true){
puntuacionUnoR = preguntas[46].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA46 = false;
}
}
var paseB46=true;
function funcionesB46(){
if (paseB46 == true){
puntuacionUnoR = preguntas[46].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB46 = false;
}
}
var paseC46=true;
function funcionesC46(){
if (paseC46 == true){
puntuacionUnoR = preguntas[46].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC46 = false;
}
}
var paseD46=true;
function funcionesD46(){
if (paseD46 == true){
puntuacionUnoR = preguntas[46].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD46 = false;
}
}
var paseE46=true;
function funcionesE46(){
if (paseE46 == true){
puntuacionUnoR = preguntas[46].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE46 = false;
}
}
//----------------------------------------------
function vidas46(){
if(conteoVidas == 0){
document.getElementById("vida46A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida46B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida46C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA47=true;
function funcionesA47(){
if (paseA47 == true){
puntuacionUnoR = preguntas[47].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA47 = false;
}
}
var paseB47=true;
function funcionesB47(){
if (paseB47 == true){
puntuacionUnoR = preguntas[47].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB47 = false;
}
}
var paseC47=true;
function funcionesC47(){
if (paseC47 == true){
puntuacionUnoR = preguntas[47].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC47 = false;
}
}
var paseD47=true;
function funcionesD47(){
if (paseD47 == true){
puntuacionUnoR = preguntas[47].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD47 = false;
}
}
var paseE47=true;
function funcionesE47(){
if (paseE47 == true){
puntuacionUnoR = preguntas[47].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE47 = false;
}
}
//----------------------------------------------
function vidas47(){
if(conteoVidas == 0){
document.getElementById("vida47A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida47B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida47C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA48=true;
function funcionesA48(){
if (paseA48 == true){
puntuacionUnoR = preguntas[48].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA48 = false;
}
}
var paseB48=true;
function funcionesB48(){
if (paseB48 == true){
puntuacionUnoR = preguntas[48].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB48 = false;
}
}
var paseC48=true;
function funcionesC48(){
if (paseC48 == true){
puntuacionUnoR = preguntas[48].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC48 = false;
}
}
var paseD48=true;
function funcionesD48(){
if (paseD48 == true){
puntuacionUnoR = preguntas[48].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD48 = false;
}
}
var paseE48=true;
function funcionesE48(){
if (paseE48 == true){
puntuacionUnoR = preguntas[48].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE48 = false;
}
}
//----------------------------------------------
function vidas48(){
if(conteoVidas == 0){
document.getElementById("vida48A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida48B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida48C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA49=true;
function funcionesA49(){
if (paseA49 == true){
puntuacionUnoR = preguntas[49].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA49 = false;
}
}
var paseB49=true;
function funcionesB49(){
if (paseB49 == true){
puntuacionUnoR = preguntas[49].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB49 = false;
}
}
var paseC49=true;
function funcionesC49(){
if (paseC49 == true){
puntuacionUnoR = preguntas[49].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC49 = false;
}
}
var paseD49=true;
function funcionesD49(){
if (paseD49 == true){
puntuacionUnoR = preguntas[49].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD49 = false;
}
}
var paseE49=true;
function funcionesE49(){
if (paseE49 == true){
puntuacionUnoR = preguntas[49].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE49 = false;
}
}
//----------------------------------------------
function vidas49(){
if(conteoVidas == 0){
document.getElementById("vida49A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida49B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida49C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA50=true;
function funcionesA50(){
if (paseA50 == true){
puntuacionUnoR = preguntas[50].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA50 = false;
}
}
var paseB50=true;
function funcionesB50(){
if (paseB50 == true){
puntuacionUnoR = preguntas[50].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB50 = false;
}
}
var paseC50=true;
function funcionesC50(){
if (paseC50 == true){
puntuacionUnoR = preguntas[50].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC50 = false;
}
}
var paseD50=true;
function funcionesD50(){
if (paseD50 == true){
puntuacionUnoR = preguntas[50].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD50 = false;
}
}
var paseE50=true;
function funcionesE50(){
if (paseE50 == true){
puntuacionUnoR = preguntas[50].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE50 = false;
}
}
//----------------------------------------------
function vidas50(){
if(conteoVidas == 0){
document.getElementById("vida50A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida50B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida50C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA51=true;
function funcionesA51(){
if (paseA51 == true){
puntuacionUnoR = preguntas[51].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA51 = false;
}
}
var paseB51=true;
function funcionesB51(){
if (paseB51 == true){
puntuacionUnoR = preguntas[51].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB51 = false;
}
}
var paseC51=true;
function funcionesC51(){
if (paseC51 == true){
puntuacionUnoR = preguntas[51].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC51 = false;
}
}
var paseD51=true;
function funcionesD51(){
if (paseD51 == true){
puntuacionUnoR = preguntas[51].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD51 = false;
}
}
var paseE51=true;
function funcionesE51(){
if (paseE51 == true){
puntuacionUnoR = preguntas[51].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE51 = false;
}
}
//----------------------------------------------
function vidas51(){
if(conteoVidas == 0){
document.getElementById("vida51A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida51B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida51C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA52=true;
function funcionesA52(){
if (paseA52 == true){
puntuacionUnoR = preguntas[52].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA52 = false;
}
}
var paseB52=true;
function funcionesB52(){
if (paseB52 == true){
puntuacionUnoR = preguntas[52].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB52 = false;
}
}
var paseC52=true;
function funcionesC52(){
if (paseC52 == true){
puntuacionUnoR = preguntas[52].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC52 = false;
}
}
var paseD52=true;
function funcionesD52(){
if (paseD52 == true){
puntuacionUnoR = preguntas[52].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD52 = false;
}
}
var paseE52=true;
function funcionesE52(){
if (paseE52 == true){
puntuacionUnoR = preguntas[52].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE52 = false;
}
}
//----------------------------------------------
function vidas52(){
if(conteoVidas == 0){
document.getElementById("vida52A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida52B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida52C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA53=true;
function funcionesA53(){
if (paseA53 == true){
puntuacionUnoR = preguntas[53].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA53 = false;
}
}
var paseB53=true;
function funcionesB53(){
if (paseB53 == true){
puntuacionUnoR = preguntas[53].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB53 = false;
}
}
var paseC53=true;
function funcionesC53(){
if (paseC53 == true){
puntuacionUnoR = preguntas[53].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC53 = false;
}
}
var paseD53=true;
function funcionesD53(){
if (paseD53 == true){
puntuacionUnoR = preguntas[53].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD53 = false;
}
}
var paseE53=true;
function funcionesE53(){
if (paseE53 == true){
puntuacionUnoR = preguntas[53].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE53 = false;
}
}
//----------------------------------------------
function vidas53(){
if(conteoVidas == 0){
document.getElementById("vida53A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida53B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida53C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA54=true;
function funcionesA54(){
if (paseA54 == true){
puntuacionUnoR = preguntas[54].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA54 = false;
}
}
var paseB54=true;
function funcionesB54(){
if (paseB54 == true){
puntuacionUnoR = preguntas[54].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB54 = false;
}
}
var paseC54=true;
function funcionesC54(){
if (paseC54 == true){
puntuacionUnoR = preguntas[54].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC54 = false;
}
}
var paseD54=true;
function funcionesD54(){
if (paseD54 == true){
puntuacionUnoR = preguntas[54].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD54 = false;
}
}
var paseE54=true;
function funcionesE54(){
if (paseE54 == true){
puntuacionUnoR = preguntas[54].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE54 = false;
}
}
//----------------------------------------------
function vidas54(){
if(conteoVidas == 0){
document.getElementById("vida54A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida54B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida54C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA55=true;
function funcionesA55(){
if (paseA55 == true){
puntuacionUnoR = preguntas[55].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA55 = false;
}
}
var paseB55=true;
function funcionesB55(){
if (paseB55 == true){
puntuacionUnoR = preguntas[55].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB55 = false;
}
}
var paseC55=true;
function funcionesC55(){
if (paseC55 == true){
puntuacionUnoR = preguntas[55].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC55 = false;
}
}
var paseD55=true;
function funcionesD55(){
if (paseD55 == true){
puntuacionUnoR = preguntas[55].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD55 = false;
}
}
var paseE55=true;
function funcionesE55(){
if (paseE55 == true){
puntuacionUnoR = preguntas[55].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE55 = false;
}
}
//----------------------------------------------
function vidas55(){
if(conteoVidas == 0){
document.getElementById("vida55A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida55B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida55C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA56=true;
function funcionesA56(){
if (paseA56 == true){
puntuacionUnoR = preguntas[56].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA56 = false;
}
}
var paseB56=true;
function funcionesB56(){
if (paseB56 == true){
puntuacionUnoR = preguntas[56].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB56 = false;
}
}
var paseC56=true;
function funcionesC56(){
if (paseC56 == true){
puntuacionUnoR = preguntas[56].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC56 = false;
}
}
var paseD56=true;
function funcionesD56(){
if (paseD56 == true){
puntuacionUnoR = preguntas[56].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD56 = false;
}
}
var paseE56=true;
function funcionesE56(){
if (paseE56 == true){
puntuacionUnoR = preguntas[56].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE56 = false;
}
}
//----------------------------------------------
function vidas56(){
if(conteoVidas == 0){
document.getElementById("vida56A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida56B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida56C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA57=true;
function funcionesA57(){
if (paseA57 == true){
puntuacionUnoR = preguntas[57].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA57 = false;
}
}
var paseB57=true;
function funcionesB57(){
if (paseB57 == true){
puntuacionUnoR = preguntas[57].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB57 = false;
}
}
var paseC57=true;
function funcionesC57(){
if (paseC57 == true){
puntuacionUnoR = preguntas[57].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC57 = false;
}
}
var paseD57=true;
function funcionesD57(){
if (paseD57 == true){
puntuacionUnoR = preguntas[57].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD57 = false;
}
}
var paseE57=true;
function funcionesE57(){
if (paseE57 == true){
puntuacionUnoR = preguntas[57].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE57 = false;
}
}
//----------------------------------------------
function vidas57(){
if(conteoVidas == 0){
document.getElementById("vida57A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida57B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida57C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA58=true;
function funcionesA58(){
if (paseA58 == true){
puntuacionUnoR = preguntas[58].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA58 = false;
}
}
var paseB58=true;
function funcionesB58(){
if (paseB58 == true){
puntuacionUnoR = preguntas[58].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB58 = false;
}
}
var paseC58=true;
function funcionesC58(){
if (paseC58 == true){
puntuacionUnoR = preguntas[58].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC58 = false;
}
}
var paseD58=true;
function funcionesD58(){
if (paseD58 == true){
puntuacionUnoR = preguntas[58].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD58 = false;
}
}
var paseE58=true;
function funcionesE58(){
if (paseE58 == true){
puntuacionUnoR = preguntas[58].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE58 = false;
}
}
//----------------------------------------------
function vidas58(){
if(conteoVidas == 0){
document.getElementById("vida58A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida58B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida58C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA59=true;
function funcionesA59(){
if (paseA59 == true){
puntuacionUnoR = preguntas[59].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA59 = false;
}
}
var paseB59=true;
function funcionesB59(){
if (paseB59 == true){
puntuacionUnoR = preguntas[59].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB59 = false;
}
}
var paseC59=true;
function funcionesC59(){
if (paseC59 == true){
puntuacionUnoR = preguntas[59].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC59 = false;
}
}
var paseD59=true;
function funcionesD59(){
if (paseD59 == true){
puntuacionUnoR = preguntas[59].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD59 = false;
}
}
var paseE59=true;
function funcionesE59(){
if (paseE59 == true){
puntuacionUnoR = preguntas[59].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE59 = false;
}
}
//----------------------------------------------
function vidas59(){
if(conteoVidas == 0){
document.getElementById("vida59A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida59B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida59C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA60=true;
function funcionesA60(){
if (paseA60 == true){
puntuacionUnoR = preguntas[60].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA60 = false;
}
}
var paseB60=true;
function funcionesB60(){
if (paseB60 == true){
puntuacionUnoR = preguntas[60].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB60 = false;
}
}
var paseC60=true;
function funcionesC60(){
if (paseC60 == true){
puntuacionUnoR = preguntas[60].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC60 = false;
}
}
var paseD60=true;
function funcionesD60(){
if (paseD60 == true){
puntuacionUnoR = preguntas[60].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD60 = false;
}
}
var paseE60=true;
function funcionesE60(){
if (paseE60 == true){
puntuacionUnoR = preguntas[60].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE60 = false;
}
}
//----------------------------------------------
function vidas60(){
if(conteoVidas == 0){
document.getElementById("vida60A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida60B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida60C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA61=true;
function funcionesA61(){
if (paseA61 == true){
puntuacionUnoR = preguntas[61].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA61 = false;
}
}
var paseB61=true;
function funcionesB61(){
if (paseB61 == true){
puntuacionUnoR = preguntas[61].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB61 = false;
}
}
var paseC61=true;
function funcionesC61(){
if (paseC61 == true){
puntuacionUnoR = preguntas[61].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC61 = false;
}
}
var paseD61=true;
function funcionesD61(){
if (paseD61 == true){
puntuacionUnoR = preguntas[61].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD61 = false;
}
}
var paseE61=true;
function funcionesE61(){
if (paseE61 == true){
puntuacionUnoR = preguntas[61].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE61 = false;
}
}
//----------------------------------------------
function vidas61(){
if(conteoVidas == 0){
document.getElementById("vida61A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida61B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida61C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA62=true;
function funcionesA62(){
if (paseA62 == true){
puntuacionUnoR = preguntas[62].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA62 = false;
}
}
var paseB62=true;
function funcionesB62(){
if (paseB62 == true){
puntuacionUnoR = preguntas[62].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB62 = false;
}
}
var paseC62=true;
function funcionesC62(){
if (paseC62 == true){
puntuacionUnoR = preguntas[62].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC62 = false;
}
}
var paseD62=true;
function funcionesD62(){
if (paseD62 == true){
puntuacionUnoR = preguntas[62].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD62 = false;
}
}
var paseE62=true;
function funcionesE62(){
if (paseE62 == true){
puntuacionUnoR = preguntas[62].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE62 = false;
}
}
//----------------------------------------------
function vidas62(){
if(conteoVidas == 0){
document.getElementById("vida62A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida62B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida62C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA63=true;
function funcionesA63(){
if (paseA63 == true){
puntuacionUnoR = preguntas[63].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA63 = false;
}
}
var paseB63=true;
function funcionesB63(){
if (paseB63 == true){
puntuacionUnoR = preguntas[63].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB63 = false;
}
}
var paseC63=true;
function funcionesC63(){
if (paseC63 == true){
puntuacionUnoR = preguntas[63].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC63 = false;
}
}
var paseD63=true;
function funcionesD63(){
if (paseD63 == true){
puntuacionUnoR = preguntas[63].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD63 = false;
}
}
var paseE63=true;
function funcionesE63(){
if (paseE63 == true){
puntuacionUnoR = preguntas[63].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE63 = false;
}
}
//----------------------------------------------
function vidas63(){
if(conteoVidas == 0){
document.getElementById("vida63A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida63B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida63C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA64=true;
function funcionesA64(){
if (paseA64 == true){
puntuacionUnoR = preguntas[64].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA64 = false;
}
}
var paseB64=true;
function funcionesB64(){
if (paseB64 == true){
puntuacionUnoR = preguntas[64].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB64 = false;
}
}
var paseC64=true;
function funcionesC64(){
if (paseC64 == true){
puntuacionUnoR = preguntas[64].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC64 = false;
}
}
var paseD64=true;
function funcionesD64(){
if (paseD64 == true){
puntuacionUnoR = preguntas[64].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD64 = false;
}
}
var paseE64=true;
function funcionesE64(){
if (paseE64 == true){
puntuacionUnoR = preguntas[64].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE64 = false;
}
}
//----------------------------------------------
function vidas64(){
if(conteoVidas == 0){
document.getElementById("vida64A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida64B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida64C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA65=true;
function funcionesA65(){
if (paseA65 == true){
puntuacionUnoR = preguntas[65].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA65 = false;
}
}
var paseB65=true;
function funcionesB65(){
if (paseB65 == true){
puntuacionUnoR = preguntas[65].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB65 = false;
}
}
var paseC65=true;
function funcionesC65(){
if (paseC65 == true){
puntuacionUnoR = preguntas[65].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC65 = false;
}
}
var paseD65=true;
function funcionesD65(){
if (paseD65 == true){
puntuacionUnoR = preguntas[65].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD65 = false;
}
}
var paseE65=true;
function funcionesE65(){
if (paseE65 == true){
puntuacionUnoR = preguntas[65].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE65 = false;
}
}
//----------------------------------------------
function vidas65(){
if(conteoVidas == 0){
document.getElementById("vida65A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida65B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida65C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA66=true;
function funcionesA66(){
if (paseA66 == true){
puntuacionUnoR = preguntas[66].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA66 = false;
}
}
var paseB66=true;
function funcionesB66(){
if (paseB66 == true){
puntuacionUnoR = preguntas[66].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB66 = false;
}
}
var paseC66=true;
function funcionesC66(){
if (paseC66 == true){
puntuacionUnoR = preguntas[66].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC66 = false;
}
}
var paseD66=true;
function funcionesD66(){
if (paseD66 == true){
puntuacionUnoR = preguntas[66].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD66 = false;
}
}
var paseE66=true;
function funcionesE66(){
if (paseE66 == true){
puntuacionUnoR = preguntas[66].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE66 = false;
}
}
//----------------------------------------------
function vidas66(){
if(conteoVidas == 0){
document.getElementById("vida66A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida66B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida66C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA67=true;
function funcionesA67(){
if (paseA67 == true){
puntuacionUnoR = preguntas[67].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA67 = false;
}
}
var paseB67=true;
function funcionesB67(){
if (paseB67 == true){
puntuacionUnoR = preguntas[67].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB67 = false;
}
}
var paseC67=true;
function funcionesC67(){
if (paseC67 == true){
puntuacionUnoR = preguntas[67].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC67 = false;
}
}
var paseD67=true;
function funcionesD67(){
if (paseD67 == true){
puntuacionUnoR = preguntas[67].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD67 = false;
}
}
var paseE67=true;
function funcionesE67(){
if (paseE67 == true){
puntuacionUnoR = preguntas[67].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE67 = false;
}
}
//----------------------------------------------
function vidas67(){
if(conteoVidas == 0){
document.getElementById("vida67A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida67B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida67C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA68=true;
function funcionesA68(){
if (paseA68 == true){
puntuacionUnoR = preguntas[68].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA68 = false;
}
}
var paseB68=true;
function funcionesB68(){
if (paseB68 == true){
puntuacionUnoR = preguntas[68].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB68 = false;
}
}
var paseC68=true;
function funcionesC68(){
if (paseC68 == true){
puntuacionUnoR = preguntas[68].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC68 = false;
}
}
var paseD68=true;
function funcionesD68(){
if (paseD68 == true){
puntuacionUnoR = preguntas[68].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD68 = false;
}
}
var paseE68=true;
function funcionesE68(){
if (paseE68 == true){
puntuacionUnoR = preguntas[68].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE68 = false;
}
}
//----------------------------------------------
function vidas68(){
if(conteoVidas == 0){
document.getElementById("vida68A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida68B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida68C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA69=true;
function funcionesA69(){
if (paseA69 == true){
puntuacionUnoR = preguntas[69].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA69 = false;
}
}
var paseB69=true;
function funcionesB69(){
if (paseB69 == true){
puntuacionUnoR = preguntas[69].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB69 = false;
}
}
var paseC69=true;
function funcionesC69(){
if (paseC69 == true){
puntuacionUnoR = preguntas[69].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC69 = false;
}
}
var paseD69=true;
function funcionesD69(){
if (paseD69 == true){
puntuacionUnoR = preguntas[69].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD69 = false;
}
}
var paseE69=true;
function funcionesE69(){
if (paseE69 == true){
puntuacionUnoR = preguntas[69].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE69 = false;
}
}
//----------------------------------------------
function vidas69(){
if(conteoVidas == 0){
document.getElementById("vida69A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida69B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida69C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA70=true;
function funcionesA70(){
if (paseA70 == true){
puntuacionUnoR = preguntas[70].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA70 = false;
}
}
var paseB70=true;
function funcionesB70(){
if (paseB70 == true){
puntuacionUnoR = preguntas[70].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB70 = false;
}
}
var paseC70=true;
function funcionesC70(){
if (paseC70 == true){
puntuacionUnoR = preguntas[70].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC70 = false;
}
}
var paseD70=true;
function funcionesD70(){
if (paseD70 == true){
puntuacionUnoR = preguntas[70].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD70 = false;
}
}
var paseE70=true;
function funcionesE70(){
if (paseE70 == true){
puntuacionUnoR = preguntas[70].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE70 = false;
}
}
//----------------------------------------------
function vidas70(){
if(conteoVidas == 0){
document.getElementById("vida70A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida70B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida70C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA71=true;
function funcionesA71(){
if (paseA71 == true){
puntuacionUnoR = preguntas[71].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA71 = false;
}
}
var paseB71=true;
function funcionesB71(){
if (paseB71 == true){
puntuacionUnoR = preguntas[71].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB71 = false;
}
}
var paseC71=true;
function funcionesC71(){
if (paseC71 == true){
puntuacionUnoR = preguntas[71].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC71 = false;
}
}
var paseD71=true;
function funcionesD71(){
if (paseD71 == true){
puntuacionUnoR = preguntas[71].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD71 = false;
}
}
var paseE71=true;
function funcionesE71(){
if (paseE71 == true){
puntuacionUnoR = preguntas[71].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE71 = false;
}
}
//----------------------------------------------
function vidas71(){
if(conteoVidas == 0){
document.getElementById("vida71A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida71B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida71C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA72=true;
function funcionesA72(){
if (paseA72 == true){
puntuacionUnoR = preguntas[72].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA72 = false;
}
}
var paseB72=true;
function funcionesB72(){
if (paseB72 == true){
puntuacionUnoR = preguntas[72].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB72 = false;
}
}
var paseC72=true;
function funcionesC72(){
if (paseC72 == true){
puntuacionUnoR = preguntas[72].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC72 = false;
}
}
var paseD72=true;
function funcionesD72(){
if (paseD72 == true){
puntuacionUnoR = preguntas[72].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD72 = false;
}
}
var paseE72=true;
function funcionesE72(){
if (paseE72 == true){
puntuacionUnoR = preguntas[72].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE72 = false;
}
}
//----------------------------------------------
function vidas72(){
if(conteoVidas == 0){
document.getElementById("vida72A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida72B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida72C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA73=true;
function funcionesA73(){
if (paseA73 == true){
puntuacionUnoR = preguntas[73].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA73 = false;
}
}
var paseB73=true;
function funcionesB73(){
if (paseB73 == true){
puntuacionUnoR = preguntas[73].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB73 = false;
}
}
var paseC73=true;
function funcionesC73(){
if (paseC73 == true){
puntuacionUnoR = preguntas[73].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC73 = false;
}
}
var paseD73=true;
function funcionesD73(){
if (paseD73 == true){
puntuacionUnoR = preguntas[73].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD73 = false;
}
}
var paseE73=true;
function funcionesE73(){
if (paseE73 == true){
puntuacionUnoR = preguntas[73].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE73 = false;
}
}
//----------------------------------------------
function vidas73(){
if(conteoVidas == 0){
document.getElementById("vida73A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida73B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida73C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA74=true;
function funcionesA74(){
if (paseA74 == true){
puntuacionUnoR = preguntas[74].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA74 = false;
}
}
var paseB74=true;
function funcionesB74(){
if (paseB74 == true){
puntuacionUnoR = preguntas[74].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB74 = false;
}
}
var paseC74=true;
function funcionesC74(){
if (paseC74 == true){
puntuacionUnoR = preguntas[74].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC74 = false;
}
}
var paseD74=true;
function funcionesD74(){
if (paseD74 == true){
puntuacionUnoR = preguntas[74].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD74 = false;
}
}
var paseE74=true;
function funcionesE74(){
if (paseE74 == true){
puntuacionUnoR = preguntas[74].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE74 = false;
}
}
//----------------------------------------------
function vidas74(){
if(conteoVidas == 0){
document.getElementById("vida74A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida74B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida74C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA75=true;
function funcionesA75(){
if (paseA75 == true){
puntuacionUnoR = preguntas[75].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA75 = false;
}
}
var paseB75=true;
function funcionesB75(){
if (paseB75 == true){
puntuacionUnoR = preguntas[75].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB75 = false;
}
}
var paseC75=true;
function funcionesC75(){
if (paseC75 == true){
puntuacionUnoR = preguntas[75].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC75 = false;
}
}
var paseD75=true;
function funcionesD75(){
if (paseD75 == true){
puntuacionUnoR = preguntas[75].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD75 = false;
}
}
var paseE75=true;
function funcionesE75(){
if (paseE75 == true){
puntuacionUnoR = preguntas[75].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE75 = false;
}
}
//----------------------------------------------
function vidas75(){
if(conteoVidas == 0){
document.getElementById("vida75A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida75B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida75C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA76=true;
function funcionesA76(){
if (paseA76 == true){
puntuacionUnoR = preguntas[76].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA76 = false;
}
}
var paseB76=true;
function funcionesB76(){
if (paseB76 == true){
puntuacionUnoR = preguntas[76].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB76 = false;
}
}
var paseC76=true;
function funcionesC76(){
if (paseC76 == true){
puntuacionUnoR = preguntas[76].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC76 = false;
}
}
var paseD76=true;
function funcionesD76(){
if (paseD76 == true){
puntuacionUnoR = preguntas[76].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD76 = false;
}
}
var paseE76=true;
function funcionesE76(){
if (paseE76 == true){
puntuacionUnoR = preguntas[76].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE76 = false;
}
}
//----------------------------------------------
function vidas76(){
if(conteoVidas == 0){
document.getElementById("vida76A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida76B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida76C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA77=true;
function funcionesA77(){
if (paseA77 == true){
puntuacionUnoR = preguntas[77].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA77 = false;
}
}
var paseB77=true;
function funcionesB77(){
if (paseB77 == true){
puntuacionUnoR = preguntas[77].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB77 = false;
}
}
var paseC77=true;
function funcionesC77(){
if (paseC77 == true){
puntuacionUnoR = preguntas[77].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC77 = false;
}
}
var paseD77=true;
function funcionesD77(){
if (paseD77 == true){
puntuacionUnoR = preguntas[77].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD77 = false;
}
}
var paseE77=true;
function funcionesE77(){
if (paseE77 == true){
puntuacionUnoR = preguntas[77].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE77 = false;
}
}
//----------------------------------------------
function vidas77(){
if(conteoVidas == 0){
document.getElementById("vida77A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida77B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida77C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA78=true;
function funcionesA78(){
if (paseA78 == true){
puntuacionUnoR = preguntas[78].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA78 = false;
}
}
var paseB78=true;
function funcionesB78(){
if (paseB78 == true){
puntuacionUnoR = preguntas[78].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB78 = false;
}
}
var paseC78=true;
function funcionesC78(){
if (paseC78 == true){
puntuacionUnoR = preguntas[78].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC78 = false;
}
}
var paseD78=true;
function funcionesD78(){
if (paseD78 == true){
puntuacionUnoR = preguntas[78].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD78 = false;
}
}
var paseE78=true;
function funcionesE78(){
if (paseE78 == true){
puntuacionUnoR = preguntas[78].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE78 = false;
}
}
//----------------------------------------------
function vidas78(){
if(conteoVidas == 0){
document.getElementById("vida78A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida78B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida78C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA79=true;
function funcionesA79(){
if (paseA79 == true){
puntuacionUnoR = preguntas[79].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA79 = false;
}
}
var paseB79=true;
function funcionesB79(){
if (paseB79 == true){
puntuacionUnoR = preguntas[79].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB79 = false;
}
}
var paseC79=true;
function funcionesC79(){
if (paseC79 == true){
puntuacionUnoR = preguntas[79].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC79 = false;
}
}
var paseD79=true;
function funcionesD79(){
if (paseD79 == true){
puntuacionUnoR = preguntas[79].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD79 = false;
}
}
var paseE79=true;
function funcionesE79(){
if (paseE79 == true){
puntuacionUnoR = preguntas[79].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE79 = false;
}
}
//----------------------------------------------
function vidas79(){
if(conteoVidas == 0){
document.getElementById("vida79A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida79B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida79C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA80=true;
function funcionesA80(){
if (paseA80 == true){
puntuacionUnoR = preguntas[80].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA80 = false;
}
}
var paseB80=true;
function funcionesB80(){
if (paseB80 == true){
puntuacionUnoR = preguntas[80].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB80 = false;
}
}
var paseC80=true;
function funcionesC80(){
if (paseC80 == true){
puntuacionUnoR = preguntas[80].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC80 = false;
}
}
var paseD80=true;
function funcionesD80(){
if (paseD80 == true){
puntuacionUnoR = preguntas[80].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD80 = false;
}
}
var paseE80=true;
function funcionesE80(){
if (paseE80 == true){
puntuacionUnoR = preguntas[80].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE80 = false;
}
}
//----------------------------------------------
function vidas80(){
if(conteoVidas == 0){
document.getElementById("vida80A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida80B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida80C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA81=true;
function funcionesA81(){
if (paseA81 == true){
puntuacionUnoR = preguntas[81].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA81 = false;
}
}
var paseB81=true;
function funcionesB81(){
if (paseB81 == true){
puntuacionUnoR = preguntas[81].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB81 = false;
}
}
var paseC81=true;
function funcionesC81(){
if (paseC81 == true){
puntuacionUnoR = preguntas[81].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC81 = false;
}
}
var paseD81=true;
function funcionesD81(){
if (paseD81 == true){
puntuacionUnoR = preguntas[81].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD81 = false;
}
}
var paseE81=true;
function funcionesE81(){
if (paseE81 == true){
puntuacionUnoR = preguntas[81].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE81 = false;
}
}
//----------------------------------------------
function vidas81(){
if(conteoVidas == 0){
document.getElementById("vida81A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida81B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida81C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA82=true;
function funcionesA82(){
if (paseA82 == true){
puntuacionUnoR = preguntas[82].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA82 = false;
}
}
var paseB82=true;
function funcionesB82(){
if (paseB82 == true){
puntuacionUnoR = preguntas[82].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB82 = false;
}
}
var paseC82=true;
function funcionesC82(){
if (paseC82 == true){
puntuacionUnoR = preguntas[82].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC82 = false;
}
}
var paseD82=true;
function funcionesD82(){
if (paseD82 == true){
puntuacionUnoR = preguntas[82].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD82 = false;
}
}
var paseE82=true;
function funcionesE82(){
if (paseE82 == true){
puntuacionUnoR = preguntas[82].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE82 = false;
}
}
//----------------------------------------------
function vidas82(){
if(conteoVidas == 0){
document.getElementById("vida82A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida82B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida82C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA83=true;
function funcionesA83(){
if (paseA83 == true){
puntuacionUnoR = preguntas[83].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA83 = false;
}
}
var paseB83=true;
function funcionesB83(){
if (paseB83 == true){
puntuacionUnoR = preguntas[83].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB83 = false;
}
}
var paseC83=true;
function funcionesC83(){
if (paseC83 == true){
puntuacionUnoR = preguntas[83].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC83 = false;
}
}
var paseD83=true;
function funcionesD83(){
if (paseD83 == true){
puntuacionUnoR = preguntas[83].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD83 = false;
}
}
var paseE83=true;
function funcionesE83(){
if (paseE83 == true){
puntuacionUnoR = preguntas[83].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE83 = false;
}
}
//----------------------------------------------
function vidas83(){
if(conteoVidas == 0){
document.getElementById("vida83A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida83B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida83C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA84=true;
function funcionesA84(){
if (paseA84 == true){
puntuacionUnoR = preguntas[84].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA84 = false;
}
}
var paseB84=true;
function funcionesB84(){
if (paseB84 == true){
puntuacionUnoR = preguntas[84].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB84 = false;
}
}
var paseC84=true;
function funcionesC84(){
if (paseC84 == true){
puntuacionUnoR = preguntas[84].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC84 = false;
}
}
var paseD84=true;
function funcionesD84(){
if (paseD84 == true){
puntuacionUnoR = preguntas[84].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD84 = false;
}
}
var paseE84=true;
function funcionesE84(){
if (paseE84 == true){
puntuacionUnoR = preguntas[84].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE84 = false;
}
}
//----------------------------------------------
function vidas84(){
if(conteoVidas == 0){
document.getElementById("vida84A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida84B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida84C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA85=true;
function funcionesA85(){
if (paseA85 == true){
puntuacionUnoR = preguntas[85].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA85 = false;
}
}
var paseB85=true;
function funcionesB85(){
if (paseB85 == true){
puntuacionUnoR = preguntas[85].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB85 = false;
}
}
var paseC85=true;
function funcionesC85(){
if (paseC85 == true){
puntuacionUnoR = preguntas[85].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC85 = false;
}
}
var paseD85=true;
function funcionesD85(){
if (paseD85 == true){
puntuacionUnoR = preguntas[85].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD85 = false;
}
}
var paseE85=true;
function funcionesE85(){
if (paseE85 == true){
puntuacionUnoR = preguntas[85].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE85 = false;
}
}
//----------------------------------------------
function vidas85(){
if(conteoVidas == 0){
document.getElementById("vida85A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida85B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida85C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA86=true;
function funcionesA86(){
if (paseA86 == true){
puntuacionUnoR = preguntas[86].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA86 = false;
}
}
var paseB86=true;
function funcionesB86(){
if (paseB86 == true){
puntuacionUnoR = preguntas[86].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB86 = false;
}
}
var paseC86=true;
function funcionesC86(){
if (paseC86 == true){
puntuacionUnoR = preguntas[86].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC86 = false;
}
}
var paseD86=true;
function funcionesD86(){
if (paseD86 == true){
puntuacionUnoR = preguntas[86].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD86 = false;
}
}
var paseE86=true;
function funcionesE86(){
if (paseE86 == true){
puntuacionUnoR = preguntas[86].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE86 = false;
}
}
//----------------------------------------------
function vidas86(){
if(conteoVidas == 0){
document.getElementById("vida86A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida86B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida86C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA87=true;
function funcionesA87(){
if (paseA87 == true){
puntuacionUnoR = preguntas[87].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA87 = false;
}
}
var paseB87=true;
function funcionesB87(){
if (paseB87 == true){
puntuacionUnoR = preguntas[87].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB87 = false;
}
}
var paseC87=true;
function funcionesC87(){
if (paseC87 == true){
puntuacionUnoR = preguntas[87].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC87 = false;
}
}
var paseD87=true;
function funcionesD87(){
if (paseD87 == true){
puntuacionUnoR = preguntas[87].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD87 = false;
}
}
var paseE87=true;
function funcionesE87(){
if (paseE87 == true){
puntuacionUnoR = preguntas[87].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE87 = false;
}
}
//----------------------------------------------
function vidas87(){
if(conteoVidas == 0){
document.getElementById("vida87A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida87B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida87C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA88=true;
function funcionesA88(){
if (paseA88 == true){
puntuacionUnoR = preguntas[88].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA88 = false;
}
}
var paseB88=true;
function funcionesB88(){
if (paseB88 == true){
puntuacionUnoR = preguntas[88].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB88 = false;
}
}
var paseC88=true;
function funcionesC88(){
if (paseC88 == true){
puntuacionUnoR = preguntas[88].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC88 = false;
}
}
var paseD88=true;
function funcionesD88(){
if (paseD88 == true){
puntuacionUnoR = preguntas[88].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD88 = false;
}
}
var paseE88=true;
function funcionesE88(){
if (paseE88 == true){
puntuacionUnoR = preguntas[88].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE88 = false;
}
}
//----------------------------------------------
function vidas88(){
if(conteoVidas == 0){
document.getElementById("vida88A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida88B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida88C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA89=true;
function funcionesA89(){
if (paseA89 == true){
puntuacionUnoR = preguntas[89].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA89 = false;
}
}
var paseB89=true;
function funcionesB89(){
if (paseB89 == true){
puntuacionUnoR = preguntas[89].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB89 = false;
}
}
var paseC89=true;
function funcionesC89(){
if (paseC89 == true){
puntuacionUnoR = preguntas[89].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC89 = false;
}
}
var paseD89=true;
function funcionesD89(){
if (paseD89 == true){
puntuacionUnoR = preguntas[89].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD89 = false;
}
}
var paseE89=true;
function funcionesE89(){
if (paseE89 == true){
puntuacionUnoR = preguntas[89].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE89 = false;
}
}
//----------------------------------------------
function vidas89(){
if(conteoVidas == 0){
document.getElementById("vida89A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida89B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida89C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA90=true;
function funcionesA90(){
if (paseA90 == true){
puntuacionUnoR = preguntas[90].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA90 = false;
}
}
var paseB90=true;
function funcionesB90(){
if (paseB90 == true){
puntuacionUnoR = preguntas[90].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB90 = false;
}
}
var paseC90=true;
function funcionesC90(){
if (paseC90 == true){
puntuacionUnoR = preguntas[90].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC90 = false;
}
}
var paseD90=true;
function funcionesD90(){
if (paseD90 == true){
puntuacionUnoR = preguntas[90].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD90 = false;
}
}
var paseE90=true;
function funcionesE90(){
if (paseE90 == true){
puntuacionUnoR = preguntas[90].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE90 = false;
}
}
//----------------------------------------------
function vidas90(){
if(conteoVidas == 0){
document.getElementById("vida90A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida90B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida90C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA91=true;
function funcionesA91(){
if (paseA91 == true){
puntuacionUnoR = preguntas[91].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA91 = false;
}
}
var paseB91=true;
function funcionesB91(){
if (paseB91 == true){
puntuacionUnoR = preguntas[91].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB91 = false;
}
}
var paseC91=true;
function funcionesC91(){
if (paseC91 == true){
puntuacionUnoR = preguntas[91].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC91 = false;
}
}
var paseD91=true;
function funcionesD91(){
if (paseD91 == true){
puntuacionUnoR = preguntas[91].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD91 = false;
}
}
var paseE91=true;
function funcionesE91(){
if (paseE91 == true){
puntuacionUnoR = preguntas[91].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE91 = false;
}
}
//----------------------------------------------
function vidas91(){
if(conteoVidas == 0){
document.getElementById("vida91A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida91B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida91C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA92=true;
function funcionesA92(){
if (paseA92 == true){
puntuacionUnoR = preguntas[92].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA92 = false;
}
}
var paseB92=true;
function funcionesB92(){
if (paseB92 == true){
puntuacionUnoR = preguntas[92].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB92 = false;
}
}
var paseC92=true;
function funcionesC92(){
if (paseC92 == true){
puntuacionUnoR = preguntas[92].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC92 = false;
}
}
var paseD92=true;
function funcionesD92(){
if (paseD92 == true){
puntuacionUnoR = preguntas[92].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD92 = false;
}
}
var paseE92=true;
function funcionesE92(){
if (paseE92 == true){
puntuacionUnoR = preguntas[92].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE92 = false;
}
}
//----------------------------------------------
function vidas92(){
if(conteoVidas == 0){
document.getElementById("vida92A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida92B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida92C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA93=true;
function funcionesA93(){
if (paseA93 == true){
puntuacionUnoR = preguntas[93].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA93 = false;
}
}
var paseB93=true;
function funcionesB93(){
if (paseB93 == true){
puntuacionUnoR = preguntas[93].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB93 = false;
}
}
var paseC93=true;
function funcionesC93(){
if (paseC93 == true){
puntuacionUnoR = preguntas[93].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC93 = false;
}
}
var paseD93=true;
function funcionesD93(){
if (paseD93 == true){
puntuacionUnoR = preguntas[93].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD93 = false;
}
}
var paseE93=true;
function funcionesE93(){
if (paseE93 == true){
puntuacionUnoR = preguntas[93].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE93 = false;
}
}
//----------------------------------------------
function vidas93(){
if(conteoVidas == 0){
document.getElementById("vida93A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida93B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida93C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA94=true;
function funcionesA94(){
if (paseA94 == true){
puntuacionUnoR = preguntas[94].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA94 = false;
}
}
var paseB94=true;
function funcionesB94(){
if (paseB94 == true){
puntuacionUnoR = preguntas[94].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB94 = false;
}
}
var paseC94=true;
function funcionesC94(){
if (paseC94 == true){
puntuacionUnoR = preguntas[94].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC94 = false;
}
}
var paseD94=true;
function funcionesD94(){
if (paseD94 == true){
puntuacionUnoR = preguntas[94].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD94 = false;
}
}
var paseE94=true;
function funcionesE94(){
if (paseE94 == true){
puntuacionUnoR = preguntas[94].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE94 = false;
}
}
//----------------------------------------------
function vidas94(){
if(conteoVidas == 0){
document.getElementById("vida94A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida94B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida94C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA95=true;
function funcionesA95(){
if (paseA95 == true){
puntuacionUnoR = preguntas[95].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA95 = false;
}
}
var paseB95=true;
function funcionesB95(){
if (paseB95 == true){
puntuacionUnoR = preguntas[95].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB95 = false;
}
}
var paseC95=true;
function funcionesC95(){
if (paseC95 == true){
puntuacionUnoR = preguntas[95].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC95 = false;
}
}
var paseD95=true;
function funcionesD95(){
if (paseD95 == true){
puntuacionUnoR = preguntas[95].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD95 = false;
}
}
var paseE95=true;
function funcionesE95(){
if (paseE95 == true){
puntuacionUnoR = preguntas[95].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE95 = false;
}
}
//----------------------------------------------
function vidas95(){
if(conteoVidas == 0){
document.getElementById("vida95A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida95B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida95C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA96=true;
function funcionesA96(){
if (paseA96 == true){
puntuacionUnoR = preguntas[96].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA96 = false;
}
}
var paseB96=true;
function funcionesB96(){
if (paseB96 == true){
puntuacionUnoR = preguntas[96].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB96 = false;
}
}
var paseC96=true;
function funcionesC96(){
if (paseC96 == true){
puntuacionUnoR = preguntas[96].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC96 = false;
}
}
var paseD96=true;
function funcionesD96(){
if (paseD96 == true){
puntuacionUnoR = preguntas[96].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD96 = false;
}
}
var paseE96=true;
function funcionesE96(){
if (paseE96 == true){
puntuacionUnoR = preguntas[96].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE96 = false;
}
}
//----------------------------------------------
function vidas96(){
if(conteoVidas == 0){
document.getElementById("vida96A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida96B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida96C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA97=true;
function funcionesA97(){
if (paseA97 == true){
puntuacionUnoR = preguntas[97].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA97 = false;
}
}
var paseB97=true;
function funcionesB97(){
if (paseB97 == true){
puntuacionUnoR = preguntas[97].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB97 = false;
}
}
var paseC97=true;
function funcionesC97(){
if (paseC97 == true){
puntuacionUnoR = preguntas[97].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC97 = false;
}
}
var paseD97=true;
function funcionesD97(){
if (paseD97 == true){
puntuacionUnoR = preguntas[97].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD97 = false;
}
}
var paseE97=true;
function funcionesE97(){
if (paseE97 == true){
puntuacionUnoR = preguntas[97].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE97 = false;
}
}
//----------------------------------------------
function vidas97(){
if(conteoVidas == 0){
document.getElementById("vida97A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida97B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida97C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA98=true;
function funcionesA98(){
if (paseA98 == true){
puntuacionUnoR = preguntas[98].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA98 = false;
}
}
var paseB98=true;
function funcionesB98(){
if (paseB98 == true){
puntuacionUnoR = preguntas[98].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB98 = false;
}
}
var paseC98=true;
function funcionesC98(){
if (paseC98 == true){
puntuacionUnoR = preguntas[98].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC98 = false;
}
}
var paseD98=true;
function funcionesD98(){
if (paseD98 == true){
puntuacionUnoR = preguntas[98].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD98 = false;
}
}
var paseE98=true;
function funcionesE98(){
if (paseE98 == true){
puntuacionUnoR = preguntas[98].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE98 = false;
}
}
//----------------------------------------------
function vidas98(){
if(conteoVidas == 0){
document.getElementById("vida98A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida98B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida98C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA99=true;
function funcionesA99(){
if (paseA99 == true){
puntuacionUnoR = preguntas[99].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA99 = false;
}
}
var paseB99=true;
function funcionesB99(){
if (paseB99 == true){
puntuacionUnoR = preguntas[99].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB99 = false;
}
}
var paseC99=true;
function funcionesC99(){
if (paseC99 == true){
puntuacionUnoR = preguntas[99].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC99 = false;
}
}
var paseD99=true;
function funcionesD99(){
if (paseD99 == true){
puntuacionUnoR = preguntas[99].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD99 = false;
}
}
var paseE99=true;
function funcionesE99(){
if (paseE99 == true){
puntuacionUnoR = preguntas[99].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE99 = false;
}
}
//----------------------------------------------
function vidas99(){
if(conteoVidas == 0){
document.getElementById("vida99A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida99B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida99C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA100=true;
function funcionesA100(){
if (paseA100 == true){
puntuacionUnoR = preguntas[100].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA100 = false;
}
}
var paseB100=true;
function funcionesB100(){
if (paseB100 == true){
puntuacionUnoR = preguntas[100].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB100 = false;
}
}
var paseC100=true;
function funcionesC100(){
if (paseC100 == true){
puntuacionUnoR = preguntas[100].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC100 = false;
}
}
var paseD100=true;
function funcionesD100(){
if (paseD100 == true){
puntuacionUnoR = preguntas[100].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD100 = false;
}
}
var paseE100=true;
function funcionesE100(){
if (paseE100 == true){
puntuacionUnoR = preguntas[100].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE100 = false;
}
}
//----------------------------------------------
function vidas100(){
if(conteoVidas == 0){
document.getElementById("vida100A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida100B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida100C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA101=true;
function funcionesA101(){
if (paseA101 == true){
puntuacionUnoR = preguntas[101].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA101 = false;
}
}
var paseB101=true;
function funcionesB101(){
if (paseB101 == true){
puntuacionUnoR = preguntas[101].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB101 = false;
}
}
var paseC101=true;
function funcionesC101(){
if (paseC101 == true){
puntuacionUnoR = preguntas[101].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC101 = false;
}
}
var paseD101=true;
function funcionesD101(){
if (paseD101 == true){
puntuacionUnoR = preguntas[101].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD101 = false;
}
}
var paseE101=true;
function funcionesE101(){
if (paseE101 == true){
puntuacionUnoR = preguntas[101].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE101 = false;
}
}
//----------------------------------------------
function vidas101(){
if(conteoVidas == 0){
document.getElementById("vida101A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida101B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida101C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA102=true;
function funcionesA102(){
if (paseA102 == true){
puntuacionUnoR = preguntas[102].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA102 = false;
}
}
var paseB102=true;
function funcionesB102(){
if (paseB102 == true){
puntuacionUnoR = preguntas[102].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB102 = false;
}
}
var paseC102=true;
function funcionesC102(){
if (paseC102 == true){
puntuacionUnoR = preguntas[102].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC102 = false;
}
}
var paseD102=true;
function funcionesD102(){
if (paseD102 == true){
puntuacionUnoR = preguntas[102].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD102 = false;
}
}
var paseE102=true;
function funcionesE102(){
if (paseE102 == true){
puntuacionUnoR = preguntas[102].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE102 = false;
}
}
//----------------------------------------------
function vidas102(){
if(conteoVidas == 0){
document.getElementById("vida102A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida102B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida102C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA103=true;
function funcionesA103(){
if (paseA103 == true){
puntuacionUnoR = preguntas[103].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA103 = false;
}
}
var paseB103=true;
function funcionesB103(){
if (paseB103 == true){
puntuacionUnoR = preguntas[103].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB103 = false;
}
}
var paseC103=true;
function funcionesC103(){
if (paseC103 == true){
puntuacionUnoR = preguntas[103].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC103 = false;
}
}
var paseD103=true;
function funcionesD103(){
if (paseD103 == true){
puntuacionUnoR = preguntas[103].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD103 = false;
}
}
var paseE103=true;
function funcionesE103(){
if (paseE103 == true){
puntuacionUnoR = preguntas[103].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE103 = false;
}
}
//----------------------------------------------
function vidas103(){
if(conteoVidas == 0){
document.getElementById("vida103A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida103B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida103C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA104=true;
function funcionesA104(){
if (paseA104 == true){
puntuacionUnoR = preguntas[104].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA104 = false;
}
}
var paseB104=true;
function funcionesB104(){
if (paseB104 == true){
puntuacionUnoR = preguntas[104].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB104 = false;
}
}
var paseC104=true;
function funcionesC104(){
if (paseC104 == true){
puntuacionUnoR = preguntas[104].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC104 = false;
}
}
var paseD104=true;
function funcionesD104(){
if (paseD104 == true){
puntuacionUnoR = preguntas[104].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD104 = false;
}
}
var paseE104=true;
function funcionesE104(){
if (paseE104 == true){
puntuacionUnoR = preguntas[104].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE104 = false;
}
}
//----------------------------------------------
function vidas104(){
if(conteoVidas == 0){
document.getElementById("vida104A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida104B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida104C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA105=true;
function funcionesA105(){
if (paseA105 == true){
puntuacionUnoR = preguntas[105].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA105 = false;
}
}
var paseB105=true;
function funcionesB105(){
if (paseB105 == true){
puntuacionUnoR = preguntas[105].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB105 = false;
}
}
var paseC105=true;
function funcionesC105(){
if (paseC105 == true){
puntuacionUnoR = preguntas[105].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC105 = false;
}
}
var paseD105=true;
function funcionesD105(){
if (paseD105 == true){
puntuacionUnoR = preguntas[105].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD105 = false;
}
}
var paseE105=true;
function funcionesE105(){
if (paseE105 == true){
puntuacionUnoR = preguntas[105].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE105 = false;
}
}
//----------------------------------------------
function vidas105(){
if(conteoVidas == 0){
document.getElementById("vida105A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida105B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida105C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA106=true;
function funcionesA106(){
if (paseA106 == true){
puntuacionUnoR = preguntas[106].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA106 = false;
}
}
var paseB106=true;
function funcionesB106(){
if (paseB106 == true){
puntuacionUnoR = preguntas[106].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB106 = false;
}
}
var paseC106=true;
function funcionesC106(){
if (paseC106 == true){
puntuacionUnoR = preguntas[106].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC106 = false;
}
}
var paseD106=true;
function funcionesD106(){
if (paseD106 == true){
puntuacionUnoR = preguntas[106].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD106 = false;
}
}
var paseE106=true;
function funcionesE106(){
if (paseE106 == true){
puntuacionUnoR = preguntas[106].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE106 = false;
}
}
//----------------------------------------------
function vidas106(){
if(conteoVidas == 0){
document.getElementById("vida106A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida106B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida106C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA107=true;
function funcionesA107(){
if (paseA107 == true){
puntuacionUnoR = preguntas[107].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA107 = false;
}
}
var paseB107=true;
function funcionesB107(){
if (paseB107 == true){
puntuacionUnoR = preguntas[107].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB107 = false;
}
}
var paseC107=true;
function funcionesC107(){
if (paseC107 == true){
puntuacionUnoR = preguntas[107].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC107 = false;
}
}
var paseD107=true;
function funcionesD107(){
if (paseD107 == true){
puntuacionUnoR = preguntas[107].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD107 = false;
}
}
var paseE107=true;
function funcionesE107(){
if (paseE107 == true){
puntuacionUnoR = preguntas[107].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE107 = false;
}
}
//----------------------------------------------
function vidas107(){
if(conteoVidas == 0){
document.getElementById("vida107A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida107B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida107C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA108=true;
function funcionesA108(){
if (paseA108 == true){
puntuacionUnoR = preguntas[108].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA108 = false;
}
}
var paseB108=true;
function funcionesB108(){
if (paseB108 == true){
puntuacionUnoR = preguntas[108].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB108 = false;
}
}
var paseC108=true;
function funcionesC108(){
if (paseC108 == true){
puntuacionUnoR = preguntas[108].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC108 = false;
}
}
var paseD108=true;
function funcionesD108(){
if (paseD108 == true){
puntuacionUnoR = preguntas[108].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD108 = false;
}
}
var paseE108=true;
function funcionesE108(){
if (paseE108 == true){
puntuacionUnoR = preguntas[108].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE108 = false;
}
}
//----------------------------------------------
function vidas108(){
if(conteoVidas == 0){
document.getElementById("vida108A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida108B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida108C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA109=true;
function funcionesA109(){
if (paseA109 == true){
puntuacionUnoR = preguntas[109].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA109 = false;
}
}
var paseB109=true;
function funcionesB109(){
if (paseB109 == true){
puntuacionUnoR = preguntas[109].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB109 = false;
}
}
var paseC109=true;
function funcionesC109(){
if (paseC109 == true){
puntuacionUnoR = preguntas[109].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC109 = false;
}
}
var paseD109=true;
function funcionesD109(){
if (paseD109 == true){
puntuacionUnoR = preguntas[109].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD109 = false;
}
}
var paseE109=true;
function funcionesE109(){
if (paseE109 == true){
puntuacionUnoR = preguntas[109].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE109 = false;
}
}
//----------------------------------------------
function vidas109(){
if(conteoVidas == 0){
document.getElementById("vida109A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida109B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida109C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA110=true;
function funcionesA110(){
if (paseA110 == true){
puntuacionUnoR = preguntas[110].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA110 = false;
}
}
var paseB110=true;
function funcionesB110(){
if (paseB110 == true){
puntuacionUnoR = preguntas[110].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB110 = false;
}
}
var paseC110=true;
function funcionesC110(){
if (paseC110 == true){
puntuacionUnoR = preguntas[110].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC110 = false;
}
}
var paseD110=true;
function funcionesD110(){
if (paseD110 == true){
puntuacionUnoR = preguntas[110].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD110 = false;
}
}
var paseE110=true;
function funcionesE110(){
if (paseE110 == true){
puntuacionUnoR = preguntas[110].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE110 = false;
}
}
//----------------------------------------------
function vidas110(){
if(conteoVidas == 0){
document.getElementById("vida110A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida110B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida110C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA111=true;
function funcionesA111(){
if (paseA111 == true){
puntuacionUnoR = preguntas[111].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA111 = false;
}
}
var paseB111=true;
function funcionesB111(){
if (paseB111 == true){
puntuacionUnoR = preguntas[111].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB111 = false;
}
}
var paseC111=true;
function funcionesC111(){
if (paseC111 == true){
puntuacionUnoR = preguntas[111].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC111 = false;
}
}
var paseD111=true;
function funcionesD111(){
if (paseD111 == true){
puntuacionUnoR = preguntas[111].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD111 = false;
}
}
var paseE111=true;
function funcionesE111(){
if (paseE111 == true){
puntuacionUnoR = preguntas[111].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE111 = false;
}
}
//----------------------------------------------
function vidas111(){
if(conteoVidas == 0){
document.getElementById("vida111A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida111B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida111C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA112=true;
function funcionesA112(){
if (paseA112 == true){
puntuacionUnoR = preguntas[112].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA112 = false;
}
}
var paseB112=true;
function funcionesB112(){
if (paseB112 == true){
puntuacionUnoR = preguntas[112].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB112 = false;
}
}
var paseC112=true;
function funcionesC112(){
if (paseC112 == true){
puntuacionUnoR = preguntas[112].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC112 = false;
}
}
var paseD112=true;
function funcionesD112(){
if (paseD112 == true){
puntuacionUnoR = preguntas[112].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD112 = false;
}
}
var paseE112=true;
function funcionesE112(){
if (paseE112 == true){
puntuacionUnoR = preguntas[112].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE112 = false;
}
}
//----------------------------------------------
function vidas112(){
if(conteoVidas == 0){
document.getElementById("vida112A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida112B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida112C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA113=true;
function funcionesA113(){
if (paseA113 == true){
puntuacionUnoR = preguntas[113].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA113 = false;
}
}
var paseB113=true;
function funcionesB113(){
if (paseB113 == true){
puntuacionUnoR = preguntas[113].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB113 = false;
}
}
var paseC113=true;
function funcionesC113(){
if (paseC113 == true){
puntuacionUnoR = preguntas[113].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC113 = false;
}
}
var paseD113=true;
function funcionesD113(){
if (paseD113 == true){
puntuacionUnoR = preguntas[113].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD113 = false;
}
}
var paseE113=true;
function funcionesE113(){
if (paseE113 == true){
puntuacionUnoR = preguntas[113].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE113 = false;
}
}
//----------------------------------------------
function vidas113(){
if(conteoVidas == 0){
document.getElementById("vida113A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida113B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida113C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA114=true;
function funcionesA114(){
if (paseA114 == true){
puntuacionUnoR = preguntas[114].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA114 = false;
}
}
var paseB114=true;
function funcionesB114(){
if (paseB114 == true){
puntuacionUnoR = preguntas[114].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB114 = false;
}
}
var paseC114=true;
function funcionesC114(){
if (paseC114 == true){
puntuacionUnoR = preguntas[114].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC114 = false;
}
}
var paseD114=true;
function funcionesD114(){
if (paseD114 == true){
puntuacionUnoR = preguntas[114].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD114 = false;
}
}
var paseE114=true;
function funcionesE114(){
if (paseE114 == true){
puntuacionUnoR = preguntas[114].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE114 = false;
}
}
//----------------------------------------------
function vidas114(){
if(conteoVidas == 0){
document.getElementById("vida114A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida114B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida114C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA115=true;
function funcionesA115(){
if (paseA115 == true){
puntuacionUnoR = preguntas[115].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA115 = false;
}
}
var paseB115=true;
function funcionesB115(){
if (paseB115 == true){
puntuacionUnoR = preguntas[115].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB115 = false;
}
}
var paseC115=true;
function funcionesC115(){
if (paseC115 == true){
puntuacionUnoR = preguntas[115].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC115 = false;
}
}
var paseD115=true;
function funcionesD115(){
if (paseD115 == true){
puntuacionUnoR = preguntas[115].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD115 = false;
}
}
var paseE115=true;
function funcionesE115(){
if (paseE115 == true){
puntuacionUnoR = preguntas[115].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE115 = false;
}
}
//----------------------------------------------
function vidas115(){
if(conteoVidas == 0){
document.getElementById("vida115A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida115B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida115C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA116=true;
function funcionesA116(){
if (paseA116 == true){
puntuacionUnoR = preguntas[116].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA116 = false;
}
}
var paseB116=true;
function funcionesB116(){
if (paseB116 == true){
puntuacionUnoR = preguntas[116].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB116 = false;
}
}
var paseC116=true;
function funcionesC116(){
if (paseC116 == true){
puntuacionUnoR = preguntas[116].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC116 = false;
}
}
var paseD116=true;
function funcionesD116(){
if (paseD116 == true){
puntuacionUnoR = preguntas[116].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD116 = false;
}
}
var paseE116=true;
function funcionesE116(){
if (paseE116 == true){
puntuacionUnoR = preguntas[116].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE116 = false;
}
}
//----------------------------------------------
function vidas116(){
if(conteoVidas == 0){
document.getElementById("vida116A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida116B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida116C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA117=true;
function funcionesA117(){
if (paseA117 == true){
puntuacionUnoR = preguntas[117].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA117 = false;
}
}
var paseB117=true;
function funcionesB117(){
if (paseB117 == true){
puntuacionUnoR = preguntas[117].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB117 = false;
}
}
var paseC117=true;
function funcionesC117(){
if (paseC117 == true){
puntuacionUnoR = preguntas[117].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC117 = false;
}
}
var paseD117=true;
function funcionesD117(){
if (paseD117 == true){
puntuacionUnoR = preguntas[117].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD117 = false;
}
}
var paseE117=true;
function funcionesE117(){
if (paseE117 == true){
puntuacionUnoR = preguntas[117].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE117 = false;
}
}
//----------------------------------------------
function vidas117(){
if(conteoVidas == 0){
document.getElementById("vida117A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida117B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida117C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA118=true;
function funcionesA118(){
if (paseA118 == true){
puntuacionUnoR = preguntas[118].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA118 = false;
}
}
var paseB118=true;
function funcionesB118(){
if (paseB118 == true){
puntuacionUnoR = preguntas[118].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB118 = false;
}
}
var paseC118=true;
function funcionesC118(){
if (paseC118 == true){
puntuacionUnoR = preguntas[118].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC118 = false;
}
}
var paseD118=true;
function funcionesD118(){
if (paseD118 == true){
puntuacionUnoR = preguntas[118].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD118 = false;
}
}
var paseE118=true;
function funcionesE118(){
if (paseE118 == true){
puntuacionUnoR = preguntas[118].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE118 = false;
}
}
//----------------------------------------------
function vidas118(){
if(conteoVidas == 0){
document.getElementById("vida118A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida118B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida118C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA119=true;
function funcionesA119(){
if (paseA119 == true){
puntuacionUnoR = preguntas[119].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA119 = false;
}
}
var paseB119=true;
function funcionesB119(){
if (paseB119 == true){
puntuacionUnoR = preguntas[119].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB119 = false;
}
}
var paseC119=true;
function funcionesC119(){
if (paseC119 == true){
puntuacionUnoR = preguntas[119].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC119 = false;
}
}
var paseD119=true;
function funcionesD119(){
if (paseD119 == true){
puntuacionUnoR = preguntas[119].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD119 = false;
}
}
var paseE119=true;
function funcionesE119(){
if (paseE119 == true){
puntuacionUnoR = preguntas[119].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE119 = false;
}
}
//----------------------------------------------
function vidas119(){
if(conteoVidas == 0){
document.getElementById("vida119A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida119B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida119C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA120=true;
function funcionesA120(){
if (paseA120 == true){
puntuacionUnoR = preguntas[120].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA120 = false;
}
}
var paseB120=true;
function funcionesB120(){
if (paseB120 == true){
puntuacionUnoR = preguntas[120].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB120 = false;
}
}
var paseC120=true;
function funcionesC120(){
if (paseC120 == true){
puntuacionUnoR = preguntas[120].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC120 = false;
}
}
var paseD120=true;
function funcionesD120(){
if (paseD120 == true){
puntuacionUnoR = preguntas[120].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD120 = false;
}
}
var paseE120=true;
function funcionesE120(){
if (paseE120 == true){
puntuacionUnoR = preguntas[120].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE120 = false;
}
}
//----------------------------------------------
function vidas120(){
if(conteoVidas == 0){
document.getElementById("vida120A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida120B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida120C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA121=true;
function funcionesA121(){
if (paseA121 == true){
puntuacionUnoR = preguntas[121].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA121 = false;
}
}
var paseB121=true;
function funcionesB121(){
if (paseB121 == true){
puntuacionUnoR = preguntas[121].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB121 = false;
}
}
var paseC121=true;
function funcionesC121(){
if (paseC121 == true){
puntuacionUnoR = preguntas[121].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC121 = false;
}
}
var paseD121=true;
function funcionesD121(){
if (paseD121 == true){
puntuacionUnoR = preguntas[121].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD121 = false;
}
}
var paseE121=true;
function funcionesE121(){
if (paseE121 == true){
puntuacionUnoR = preguntas[121].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE121 = false;
}
}
//----------------------------------------------
function vidas121(){
if(conteoVidas == 0){
document.getElementById("vida121A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida121B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida121C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA122=true;
function funcionesA122(){
if (paseA122 == true){
puntuacionUnoR = preguntas[122].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA122 = false;
}
}
var paseB122=true;
function funcionesB122(){
if (paseB122 == true){
puntuacionUnoR = preguntas[122].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB122 = false;
}
}
var paseC122=true;
function funcionesC122(){
if (paseC122 == true){
puntuacionUnoR = preguntas[122].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC122 = false;
}
}
var paseD122=true;
function funcionesD122(){
if (paseD122 == true){
puntuacionUnoR = preguntas[122].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD122 = false;
}
}
var paseE122=true;
function funcionesE122(){
if (paseE122 == true){
puntuacionUnoR = preguntas[122].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE122 = false;
}
}
//----------------------------------------------
function vidas122(){
if(conteoVidas == 0){
document.getElementById("vida122A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida122B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida122C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA123=true;
function funcionesA123(){
if (paseA123 == true){
puntuacionUnoR = preguntas[123].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA123 = false;
}
}
var paseB123=true;
function funcionesB123(){
if (paseB123 == true){
puntuacionUnoR = preguntas[123].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB123 = false;
}
}
var paseC123=true;
function funcionesC123(){
if (paseC123 == true){
puntuacionUnoR = preguntas[123].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC123 = false;
}
}
var paseD123=true;
function funcionesD123(){
if (paseD123 == true){
puntuacionUnoR = preguntas[123].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD123 = false;
}
}
var paseE123=true;
function funcionesE123(){
if (paseE123 == true){
puntuacionUnoR = preguntas[123].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE123 = false;
}
}
//----------------------------------------------
function vidas123(){
if(conteoVidas == 0){
document.getElementById("vida123A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida123B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida123C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA124=true;
function funcionesA124(){
if (paseA124 == true){
puntuacionUnoR = preguntas[124].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA124 = false;
}
}
var paseB124=true;
function funcionesB124(){
if (paseB124 == true){
puntuacionUnoR = preguntas[124].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB124 = false;
}
}
var paseC124=true;
function funcionesC124(){
if (paseC124 == true){
puntuacionUnoR = preguntas[124].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC124 = false;
}
}
var paseD124=true;
function funcionesD124(){
if (paseD124 == true){
puntuacionUnoR = preguntas[124].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD124 = false;
}
}
var paseE124=true;
function funcionesE124(){
if (paseE124 == true){
puntuacionUnoR = preguntas[124].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE124 = false;
}
}
//----------------------------------------------
function vidas124(){
if(conteoVidas == 0){
document.getElementById("vida124A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida124B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida124C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA125=true;
function funcionesA125(){
if (paseA125 == true){
puntuacionUnoR = preguntas[125].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA125 = false;
}
}
var paseB125=true;
function funcionesB125(){
if (paseB125 == true){
puntuacionUnoR = preguntas[125].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB125 = false;
}
}
var paseC125=true;
function funcionesC125(){
if (paseC125 == true){
puntuacionUnoR = preguntas[125].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC125 = false;
}
}
var paseD125=true;
function funcionesD125(){
if (paseD125 == true){
puntuacionUnoR = preguntas[125].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD125 = false;
}
}
var paseE125=true;
function funcionesE125(){
if (paseE125 == true){
puntuacionUnoR = preguntas[125].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE125 = false;
}
}
//----------------------------------------------
function vidas125(){
if(conteoVidas == 0){
document.getElementById("vida125A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida125B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida125C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA126=true;
function funcionesA126(){
if (paseA126 == true){
puntuacionUnoR = preguntas[126].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA126 = false;
}
}
var paseB126=true;
function funcionesB126(){
if (paseB126 == true){
puntuacionUnoR = preguntas[126].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB126 = false;
}
}
var paseC126=true;
function funcionesC126(){
if (paseC126 == true){
puntuacionUnoR = preguntas[126].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC126 = false;
}
}
var paseD126=true;
function funcionesD126(){
if (paseD126 == true){
puntuacionUnoR = preguntas[126].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD126 = false;
}
}
var paseE126=true;
function funcionesE126(){
if (paseE126 == true){
puntuacionUnoR = preguntas[126].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE126 = false;
}
}
//----------------------------------------------
function vidas126(){
if(conteoVidas == 0){
document.getElementById("vida126A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida126B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida126C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA127=true;
function funcionesA127(){
if (paseA127 == true){
puntuacionUnoR = preguntas[127].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA127 = false;
}
}
var paseB127=true;
function funcionesB127(){
if (paseB127 == true){
puntuacionUnoR = preguntas[127].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB127 = false;
}
}
var paseC127=true;
function funcionesC127(){
if (paseC127 == true){
puntuacionUnoR = preguntas[127].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC127 = false;
}
}
var paseD127=true;
function funcionesD127(){
if (paseD127 == true){
puntuacionUnoR = preguntas[127].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD127 = false;
}
}
var paseE127=true;
function funcionesE127(){
if (paseE127 == true){
puntuacionUnoR = preguntas[127].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE127 = false;
}
}
//----------------------------------------------
function vidas127(){
if(conteoVidas == 0){
document.getElementById("vida127A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida127B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida127C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA128=true;
function funcionesA128(){
if (paseA128 == true){
puntuacionUnoR = preguntas[128].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA128 = false;
}
}
var paseB128=true;
function funcionesB128(){
if (paseB128 == true){
puntuacionUnoR = preguntas[128].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB128 = false;
}
}
var paseC128=true;
function funcionesC128(){
if (paseC128 == true){
puntuacionUnoR = preguntas[128].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC128 = false;
}
}
var paseD128=true;
function funcionesD128(){
if (paseD128 == true){
puntuacionUnoR = preguntas[128].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD128 = false;
}
}
var paseE128=true;
function funcionesE128(){
if (paseE128 == true){
puntuacionUnoR = preguntas[128].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE128 = false;
}
}
//----------------------------------------------
function vidas128(){
if(conteoVidas == 0){
document.getElementById("vida128A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida128B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida128C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA129=true;
function funcionesA129(){
if (paseA129 == true){
puntuacionUnoR = preguntas[129].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA129 = false;
}
}
var paseB129=true;
function funcionesB129(){
if (paseB129 == true){
puntuacionUnoR = preguntas[129].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB129 = false;
}
}
var paseC129=true;
function funcionesC129(){
if (paseC129 == true){
puntuacionUnoR = preguntas[129].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC129 = false;
}
}
var paseD129=true;
function funcionesD129(){
if (paseD129 == true){
puntuacionUnoR = preguntas[129].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD129 = false;
}
}
var paseE129=true;
function funcionesE129(){
if (paseE129 == true){
puntuacionUnoR = preguntas[129].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE129 = false;
}
}
//----------------------------------------------
function vidas129(){
if(conteoVidas == 0){
document.getElementById("vida129A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida129B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida129C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
		//---------------------------------PREGUNTA 3------------------------------------------