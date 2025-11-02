
// ARCHIVO AUTÓNOMO - NO DEPENDE DE RENDER
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// DATOS EMBEBIDOS - NO HACE FETCH
const menuData = {
  "carta": [
    {
      "nombre": "Notas de relevancia",
      "descripcion": "Es importante que previamente realices tu pedido (mínimo un día de anticipación). Esto con el fin de otorgar un servicio de calidad en la frescura de tus alimentos, así como evitar el desperdicio de comida,",
      "precio": "$90.00 si adquieres tus alimentos en el negocio y usas tus refractarios; y $100.00 si necesitas desechables y/o deseas que los llevemos a tu domicilio.",
      "tituloCarta": "Observaciones importantes",
      "pagina4": "La comida se lleva a partir de las 2:00 pm y solo a los lugares cercanos a la col. Exhacienda Santana, o bien, puedes pasar por tus alimentos a partir de la 1:30 pm.",
      "pago": {
        "mensaje": "💳 Transferencia a: Claudia Franco Angulo",
        "banco": "BBVA: 4152314156028402"
      }
    }
  ],
  "menu_semana": [
    {
      "dia": "Lunes",
      "fecha": "2025-11-03",
      "imagen": "1762108143519.jpg",
      "platillos": [
        "Arroz rojo",
        "Bistec ranchero",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-11-04",
      "imagen": "1762108450546.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Pollo en salsa asada",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-11-05",
      "imagen": "1762108992991.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Chile relleno de queso o requesón",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-11-06",
      "imagen": "1762109247537.jpg",
      "platillos": [
        "Crema de zanahoria",
        "Cecina de res",
        "Guacamole",
        "Frijoles de la olla"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-11-07",
      "imagen": "1762109569151.jpg",
      "platillos": [
        "Sopa de fideos",
        "Ensalada de pollo con tostadas",
        "Postre"
      ]
    },
    {
      "dia": "Ensaladas",
      "fecha": "2025-11-03",
      "imagen": "1762109663237.jpg",
      "platillos": [
        "Tenemos otra alternativa para ti más saludable",
        "si así lo deseas. Ensalada a tu gusto (podrás elegir las verduras de tu gusto",
        "proteína",
        "adereso y si lo acompañas con crotones o tiritas de maíz) Pide los ingredientes al 3316922341."
      ]
    },
    {
      "dia": "Promociones de temporada",
      "fecha": "2025-11-03",
      "imagen": "1761687413369.jpg",
      "platillos": [
        "Calabaza en dulce",
        "¡haz tu pedido al 3316922341!"
      ]
    }
  ]
};

function cargarCarta() {
    if (!container) return;
    container.innerHTML = "";
    
    if (menuData.carta && menuData.carta.length > 0) {
        const platillo = menuData.carta[0];
        const tituloCarta = platillo.tituloCarta || "Carta del día";
        const textoPagina4 = platillo.pagina4 || 'Información adicional del restaurante';
        
        // Páginas del libro CON DATOS ACTUALES
        const pagesHTML = [
            '<div class="content"><h2>' + tituloCarta + '</h2><img src="img/logo.png" alt="Logo Restaurante" class="page-image"><p>' + (platillo.nombre || '') + '</p><div class="back"></div></div>',
            '<div class="content"><h2>' + (platillo.nombre || '') + '</h2><p>' + (platillo.descripcion || '') + '</p><div class="back"></div></div>',
            '<div class="content"><p>Costo del platillo: ' + (platillo.precio || '') + '</p><p>' + (platillo.pago?.mensaje || '') + '</p><p>' + (platillo.pago?.banco || '') + '</p><div class="back"></div></div>',
            '<div class="content"><p>' + textoPagina4 + '</p><div class="back"></div></div>'
        ];
        
        pagesHTML.forEach(html => {
            const page = document.createElement("div");
            page.className = "page";
            page.innerHTML = html;
            container.appendChild(page);
        });

        pages = document.querySelectorAll('.page');
    }
}

function flipPage(){
    if(currentPage < pages.length){
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        pages.forEach(p => p.classList.remove("flipped"));
        currentPage = 0;
    }
}

// Cargar automáticamente al iniciar
document.addEventListener("DOMContentLoaded", cargarCarta);
