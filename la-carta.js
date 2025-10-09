
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// Datos embebidos directamente
const menuData = {
  "carta": [
    {
      "nombre": "Notas de relevancia",
      "descripcion": "Es importante que previamente realices tu pedido (mínimo un día de anticipación). Esto con el fin de otorgar un servicio de calidad en la frescura de tus alimentos, así como evitar el desperdicio de comida,",
      "precio": "$90.00 si adquieres tus alimentos en el negocio y usas tus refractarios; y $100.00 si necesitas desechables y/o deseas que los llevemos a tu domicilio.",
      "pago": {
        "mensaje": "💳 Transferencia a: Claudia Franco Angulo",
        "banco": "BBVA: 4152314156028402"
      },
      "pagina4": "La comida se lleva a partir de las 2:00 pm y solo a los lugares cercanos a la col. Exhacienda Santana, o bien, puedes pasar por tus alimentos a partir de la 1:30 pm.",
      "tituloCarta": "Observaciones importantes"
    }
  ],
  "menu_semana": [
    {
      "dia": "Lunes",
      "fecha": "2025-10-06",
      "imagen": "1760019222252.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Tortitas de papa con atún",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-10-07",
      "imagen": "1760019228992.jpeg",
      "platillos": [
        "Crema de zanahoria",
        "Hamburguesas de carne de res",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-10-08",
      "imagen": "1760019235549.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Queso con rajas en salsa asada",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-10-09",
      "imagen": "1760019530582.jpg",
      "platillos": [
        "Arroz blanco",
        "Tortitas de camarón con nopales",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-10-10",
      "imagen": "1760019549051.jpeg",
      "platillos": [
        "Lo sentimos este día no habrá servicio por cuestiones personales",
        "agradecemos su comprensión."
      ]
    }
  ]
};

function cargarCarta() {
    container.innerHTML = "";
    
    if (menuData.carta && menuData.carta.length > 0) {
        const platillo = menuData.carta[0];
        
        // Página 1 (existente)
        const page1 = document.createElement("div");
        page1.className = "page";
        const tituloCarta = platillo.tituloCarta || "Carta del día";
        page1.innerHTML = '<div class="content"><h2>' + tituloCarta + '</h2><img src="img/logo.png" alt="Logo Restaurante" class="page-image"><p>' + platillo.nombre + '</p><div class="back"></div></div>';

        // Página 2 (existente)
        const page2 = document.createElement("div");
        page2.className = "page";
        page2.innerHTML = '<div class="content"><h2>' + platillo.nombre + '</h2><p>' + platillo.descripcion + '</p><div class="back"></div></div>';

        // Página 3 (existente)
        const page3 = document.createElement("div");
        page3.className = "page";
        page3.innerHTML = '<div class="content"><p>Costo del platillo: ' + platillo.precio + '</p><p>' + platillo.pago.mensaje + '</p><p>' + platillo.pago.banco + '</p><div class="back"></div></div>';

        // PÁGINA 4 
        const page4 = document.createElement("div");
        page4.className = "page";
        const textoPagina4 = platillo.pagina4 || 'Información adicional del restaurante';
        page4.innerHTML = '<div class="content"><p>' + textoPagina4 + '</p><div class="back"></div></div>';

        container.appendChild(page1);
        container.appendChild(page2);
        container.appendChild(page3);
        container.appendChild(page4);

        pages = document.querySelectorAll('.page');
    }
}

// Función flipPage (Cambia de pagina con el boton)
function flipPage(){
    if(currentPage < pages.length){
        pages[currentPage].classList.add("flipped");
        currentPage++;
    } else {
        // Reset book
        pages.forEach(p => p.classList.remove("flipped"));
        currentPage = 0;
    }
}

// Cargar la carta al iniciar
document.addEventListener("DOMContentLoaded", () => {
    cargarCarta();
});
