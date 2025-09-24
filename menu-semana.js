// ✅ VERSIÓN AUTÓNOMA - NO DEPENDE DE RENDER
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menuSemanaContainer");

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

    if (container && menuData.menu_semana) {
        container.innerHTML = "";

        menuData.menu_semana.forEach(dia => {
            const card = document.createElement("div");
            card.className = "card";
            
            const platillosHTML = dia.platillos.map(p => '<li>' + p + '</li>').join("");
            
            card.innerHTML = '<div class="card-inner"><div class="card-front"><h1>' + dia.dia + '</h1><p>' + dia.fecha + '</p></div><div class="card-back"><img src="img/' + dia.imagen + '" alt="' + dia.dia + '" class="dish-image"><ul class="menu-list">' + platillosHTML + '</ul></div></div>';

            container.appendChild(card);
        });
    }
});
