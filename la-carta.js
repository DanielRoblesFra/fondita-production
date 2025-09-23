// ✅ VERSIÓN AUTÓNOMA - NO DEPENDE DE RENDER
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// Datos embebidos directamente
const menuData = {
  "carta": [
    {
      "nombre": "Observaciones importantes",
      "descripcion": "Tortilla y carne",
      "precio": "$290",
      "pago": {
        "mensaje": "💳 Transferencia a: Claudia Franco",
        "banco": "BBVA: **** **** **** ***69"
      }
    }
  ],
  "menu_semana": [
    {
      "dia": "Lunes",
      "fecha": "2025-09-22",
      "imagen": "1758650559059.jpg",
      "platillos": [
        "Platillo",
        "Platillo"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-09-23",
      "imagen": "martes.jpg",
      "platillos": [
        "Platillo",
        "Platillo"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-09-24",
      "imagen": "miercoles.jpg",
      "platillos": [
        "Platillo",
        "Platillo"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-09-25",
      "imagen": "1758574832865.jpg",
      "platillos": [
        "Platillo",
        "Platillo"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-09-26",
      "imagen": "viernes.jpg",
      "platillos": [
        "Platillo",
        "Platillo"
      ]
    }
  ]
};

function cargarCarta() {
    container.innerHTML = "";
    
    if (menuData.carta && menuData.carta.length > 0) {
        const platillo = menuData.carta[0]; // Tomamos el primer platillo
        
        // Página 1
        const page1 = document.createElement("div");
        page1.className = "page";
        page1.innerHTML = '<div class="content"><h2>Carta del día</h2><img src="img/logo.png" alt="Logo Restaurante" class="page-image"><p>' + platillo.nombre + '</p><div class="back"></div></div>';

        // Página 2
        const page2 = document.createElement("div");
        page2.className = "page";
        page2.innerHTML = '<div class="content"><h2>' + platillo.nombre + '</h2><p>' + platillo.descripcion + '</p><div class="back"></div></div>';

        // Página 3
        const page3 = document.createElement("div");
        page3.className = "page";
        page3.innerHTML = '<div class="content"><p>Costo del platillo: ' + platillo.precio + '</p><p>' + platillo.pago.mensaje + '</p><p>' + platillo.pago.banco + '</p><div class="back"></div></div>';

        container.appendChild(page1);
        container.appendChild(page2);
        container.appendChild(page3);

        // Actualizar la lista de páginas para flipPage
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
