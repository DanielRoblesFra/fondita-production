
// ARCHIVO AUTÓNOMO - NO DEPENDE DE RENDER
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// DATOS EMBEBIDOS - NO HACE FETCH
const menuData = {
  "carta": [
    {
      "nombre": "Favor de revisar",
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
      "fecha": "2026-01-19",
      "imagen": "1768757118192.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Cecina",
        "Guacamole",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2026-01-20",
      "imagen": "1768757052392.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Bistec ranquero",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2026-01-21",
      "imagen": "1768757203498.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Enfrijoladas",
        "Ensalada fresca",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2026-01-22",
      "imagen": "1768757279792.jpg",
      "platillos": [
        "Crema poblana",
        "Espagueti con camarones",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2026-01-23",
      "imagen": "1768757399774.jpg",
      "platillos": [
        "Sopa de fideos",
        "Milanesa de pollo",
        "Ensalada fresca",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Ensaladas",
      "fecha": "2025-11-03",
      "imagen": "1762109663237.jpg",
      "platillos": [
        "Tenemos otra alternativa para ti más saludable",
        "¡ensalada! Pide los ingredientes al 3316922341."
      ]
    },
    {
      "dia": "Promociones de temporada",
      "fecha": "2026-01-05",
      "imagen": "1768176535741.jpg",
      "platillos": [
        "Este mes para desayunos estaremos ofreciendo chilaquiles rojos y/o verdes. ¡Pídelos al 3316922341!"
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
