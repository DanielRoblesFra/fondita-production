// ✅ VERSIÓN AUTÓNOMA - NO DEPENDE DE RENDER
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menuSemanaContainer");

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
      "imagen": "1759688754359.jpg",
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
      "imagen": "1759689012357.jpeg",
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
      "imagen": "1759688994888.jpg",
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
