// ✅ VERSIÓN AUTÓNOMA - CON FEATURE FLAGS
let currentPage = 0;
const container = document.getElementById("bookContainer");
let pages = [];

// Datos embebidos directamente
const menuData = {
  "carta": [
    {
      "nombre": "Observaciones importantes",
      "descripcion": "Texto informativo",
      "precio": "$290",
      "pago": {
        "mensaje": "💳 Transferencia a: Claudia Franco",
        "banco": "BBVA: **** **** **** ***69"
      },
      "pagina4": "wqeqweqwdqwdqddasdas"
    }
  ],
  "menu_semana": [
    {
      "dia": "Lunes",
      "fecha": "2025-09-22",
      "imagen": "1758650559059.jpg",
      "platillos": [
        "Texto",
        "Platillo",
        "texto"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-09-23",
      "imagen": "1758651802707.jpg",
      "platillos": [
        "Texto",
        "Platillo",
        "texto"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-09-24",
      "imagen": "1758651809332.jpg",
      "platillos": [
        "Texto",
        "Platillo",
        "texto"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-09-25",
      "imagen": "1758574832865.jpg",
      "platillos": [
        "Texto",
        "Platillo",
        "texto"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-09-26",
      "imagen": "1758651816041.jpg",
      "platillos": [
        "Texto",
        "Platillo",
        "texto"
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
        page1.innerHTML = '<div class="content"><h2>Carta del día</h2><img src="img/logo.png" alt="Logo Restaurante" class="page-image"><p>' + platillo.nombre + '</p><div class="back"></div></div>';

        // Página 2 (existente)
        const page2 = document.createElement("div");
        page2.className = "page";
        page2.innerHTML = '<div class="content"><h2>' + platillo.nombre + '</h2><p>' + platillo.descripcion + '</p><div class="back"></div></div>';

        // Página 3 (existente)
        const page3 = document.createElement("div");
        page3.className = "page";
        page3.innerHTML = '<div class="content"><p>Costo del platillo: ' + platillo.precio + '</p><p>' + platillo.pago.mensaje + '</p><p>' + platillo.pago.banco + '</p><div class="back"></div></div>';

        // 🎯 PÁGINA 4 - SOLO SI ESTÁ ACTIVA EL FEATURE FLAG
    
    const page4 = document.createElement("div");
    page4.className = "page";
    const textoPagina4 = platillo.pagina4 || 'Información adicional del restaurante';
    page4.innerHTML = '<div class="content"><h2>Información Adicional</h2><p style="color: red; font-weight: bold;">' + textoPagina4 + '</p><div class="back"></div></div>';
    container.appendChild(page4);
    

    container.appendChild(page1);
    container.appendChild(page2);
    container.appendChild(page3);
    container.appendChild(page4);

pages = document.querySelectorAll('.page');
// 🔍 DEBUG
console.log('PÁGINA 4 ACTIVADA:', true);
console.log('TOTAL PÁGINAS:', pages.length);
pages.forEach((page, index) => {
    console.log('Página', index + 1, ':', page.innerHTML.substring(0, 100) + '...');
});
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
