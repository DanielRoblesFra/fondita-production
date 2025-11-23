
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
      "fecha": "2025-11-24",
      "imagen": "1763916646698.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Picadillo",
        "Ensalada",
        "Frijosles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-11-25",
      "imagen": "1763916804133.jpg",
      "platillos": [
        "Caldo de camaron",
        "Ceviche de pescado con tostadas",
        "Guacamole",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-11-26",
      "imagen": "1763916947594.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Milanesa natural de pollo",
        "Ensalada",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-11-27",
      "imagen": "1763917062257.jpg",
      "platillos": [
        "Arroz rojo",
        "mole poblano con cerdo",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-11-28",
      "imagen": "1763917164339.jpg",
      "platillos": [
        "Sopa de fideos",
        "Chuletas de cerdo hawaianas",
        "Pure de papa",
        "Ensalada",
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
      "fecha": "2025-11-03",
      "imagen": "1763312170861.jpg",
      "platillos": [
        "¡Espera por la temporada decembrina!"
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
