
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
      "fecha": "2025-10-20",
      "imagen": "1760392644349.jpg",
      "platillos": [
        "Arroz blanco con elote",
        "Chilacayote con mole y carne de puerco",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Martes",
      "fecha": "2025-10-21",
      "imagen": "1760373690586.jpeg",
      "platillos": [
        "Crema de champiñones",
        "Enfrijoladas",
        "Ensalada",
        "Postre"
      ]
    },
    {
      "dia": "Miércoles",
      "fecha": "2025-10-22",
      "imagen": "1760373740012.jpg",
      "platillos": [
        "Sopa de fideos",
        "Salchichas con papa al chipotle",
        "Guacamole",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Jueves",
      "fecha": "2025-10-23",
      "imagen": "1760374150650.jpg",
      "platillos": [
        "Arroz rojo con verduras",
        "Tacos de papa a la mexicana",
        "Frijoles de la olla",
        "Postre"
      ]
    },
    {
      "dia": "Viernes",
      "fecha": "2025-10-24",
      "imagen": "1760632431633.jpg",
      "platillos": [
        "Sopa de lentejas",
        "Tortitas de espinacas con queso",
        "Ensalada",
        "Postre"
      ]
    }
  ]
};

    if (container && menuData.menu_semana) {
        container.innerHTML = "";
        // ✅ MOSTRAR SOLO LOS PRIMEROS 5 DÍAS (Lunes a Viernes)
        menuData.menu_semana.slice(0, 5).forEach(dia => {
            if (!dia.dia) return;
            
            const platillosHTML = dia.platillos 
                ? dia.platillos.map(p => '<li>' + p + '</li>').join("")
                : "";
                
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = '<div class="card-inner"><div class="card-front"><h1>' + dia.dia + '</h1><p>' + (dia.fecha || '') + '</p></div><div class="card-back"><img src="img/' + (dia.imagen || 'default.jpg') + '" alt="' + dia.dia + '" class="dish-image"><ul class="menu-list">' + platillosHTML + '</ul></div></div>';
            container.appendChild(card);
        });
    }
});
