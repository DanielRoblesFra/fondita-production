document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menuSemanaContainer");
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
      "fecha": "2025-10-13",
      "imagen": "1760392644349.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Tortitas de papa con atún",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-10-14",
      "imagen": "1760373690586.jpeg",
      "platillos": [
        "Crema de zanahoria",
        "Hamburguesas de carne de res",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-10-15",
      "imagen": "1760373740012.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Queso con rajas en salsa asada",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-10-16",
      "imagen": "1760374150650.jpg",
      "platillos": [
        "Arroz blanco",
        "Tortitas de camarón con nopales",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-10-17",
      "imagen": "1760382762085.jpg",
      "platillos": [
        "Texto  prueba."
      ]
    }
  ]
};

    if (container && menuData.menu_semana) {
        container.innerHTML = "";
        menuData.menu_semana.forEach(dia => {
            const platillosHTML = dia.platillos.map(p => '<li>' + p + '</li>').join("");
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = '<div class="card-inner"><div class="card-front"><h1>' + dia.dia + '</h1><p>' + dia.fecha + '</p></div><div class="card-back"><img src="img/' + dia.imagen + '" alt="' + dia.dia + '" class="dish-image"><ul class="menu-list">' + platillosHTML + '</ul></div></div>';
            container.appendChild(card);
        });
    }
});