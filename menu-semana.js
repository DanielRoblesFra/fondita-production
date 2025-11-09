
// ARCHIVO AUTÓNOMO - NO DEPENDE DE RENDER
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menuSemanaContainer");
    
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
      "fecha": "2025-11-10",
      "imagen": "1762707495230.jpg",
      "platillos": [
        "Sopa de lentejas",
        "Flautas (pollo",
        "papa y requesón)",
        "Frijoles refritos",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-11-11",
      "imagen": "1762708344650.jpg",
      "platillos": [
        "Caldo de pollo con verduras",
        "Pastel azteca",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-11-12",
      "imagen": "1762708482517.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Chicharrón en salsa verde",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-11-13",
      "imagen": "1762708640206.jpg",
      "platillos": [
        "Sopa de fideos",
        "Tortitas de papa con atún",
        "Guacamole",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-11-14",
      "imagen": "1762708757301.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Enchiladas suizas de pollo",
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
      "fecha": "2025-11-03",
      "imagen": "1761687413369.jpg",
      "platillos": [
        "Calabaza en dulce",
        "¡haz tu pedido al 3316922341!"
      ]
    }
  ]
};

    if (container && menuData.menu_semana) {
        container.innerHTML = "";
        // ✅ MOSTRAR LAS 7 TARJETAS (5 días + 2 especiales)
        menuData.menu_semana.forEach((dia, index) => {
            if (!dia.dia) return;
            
            const platillosHTML = dia.platillos && dia.platillos.length > 0
                ? dia.platillos.map(p => '<li>' + p + '</li>').join("")
                : '<p class="no-platillos">Próximamente...</p>';
            
            // Determinar si es una tarjeta especial (Ensaladas o Promociones)
            const isEnsaladas = dia.dia === "Ensaladas";
            const isPromociones = dia.dia === "Promociones de temporada";
            const cardClass = isEnsaladas || isPromociones ? 'card card-especial' : 'card';
                
            const card = document.createElement("div");
            card.className = cardClass;
            card.innerHTML = '<div class="card-inner"><div class="card-front"><h1>' + dia.dia + '</h1><p>' + (dia.fecha || '') + '</p></div><div class="card-back">' + (dia.imagen ? '<img src="img/' + dia.imagen + '" alt="' + dia.dia + '" class="dish-image">' : '') + '<ul class="menu-list">' + platillosHTML + '</ul></div></div>';
            container.appendChild(card);
        });
    }
});
