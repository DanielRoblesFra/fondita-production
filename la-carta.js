
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
      "fecha": "2025-10-27",
      "imagen": "1761678830789.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Pollo con salsa de chipotle",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-10-28",
      "imagen": "1761678885158.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Pescado a la veracruzana",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-10-29",
      "imagen": "1761678898655.jpg",
      "platillos": [
        "Espagueti blanco",
        "Milanesa de pollo",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-10-30",
      "imagen": "1761679033497.jpg",
      "platillos": [
        "Arroz blanco",
        "Chicharrón en salsa verde",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-10-31",
      "imagen": "1761679411354.jpg",
      "platillos": [
        "Arroz rojo",
        "Pipián rojo con pollo",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Ensaladas",
      "fecha": "",
      "imagen": "1761679131070.jpg",
      "platillos": [
        "Próximamente :)"
      ]
    },
    {
      "dia": "Promociones de temporada",
      "fecha": "",
      "imagen": "1761679179282.jpg",
      "platillos": [
        "Dulce de calabaza (pregunta por él)."
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
