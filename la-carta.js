
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// Datos embebidos directamente
const menuData = {
  "carta": [
    {
      "nombre": "Notas de portada",
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
      "fecha": "2025-09-29",
      "imagen": "1759010187854.jpg",
      "platillos": [
        "Arroz blanco",
        "Mole encacahuetado",
        "Frijoles de olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-09-30",
      "imagen": "1759010920868.jpg",
      "platillos": [
        "Sopa de fideos",
        "Salpicon de res",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-10-01",
      "imagen": "1759017457614.jpg",
      "platillos": [
        "Arroz rojo",
        "Pollo al limón",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-10-02",
      "imagen": "1759017474160.jpg",
      "platillos": [
        "Sopa de habas",
        "Ceviche con tostadas",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-10-03",
      "imagen": "1759017495149.jpeg",
      "platillos": [
        "Carne en su jugo (estilo Jalisco)",
        "Postre"
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
