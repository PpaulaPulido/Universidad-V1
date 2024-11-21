const products = [
    {
        "id": 1,
        "product": "botella de plástico",
        "img":"https://static.vecteezy.com/system/resources/previews/005/551/044/non_2x/water-plastic-bottle-cartoon-illustration-isolated-object-vector.jpg",
        "recycling_instructions": {
            "steps": [
                "Limpia la botella para eliminar residuos de alimentos o bebidas.",
                "Quita la tapa y el anillo (se reciclan por separado).",
                "Coloca la botella en el contenedor de reciclaje de plástico."
            ],
            "important_notes": [
                "No mezcles con otros tipos de basura.",
                "Asegúrate de no dejar residuos de comida."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 2,
        "product": "botella de vidrio",
        "img":"https://http2.mlstatic.com/D_NQ_NP_786836-MCO72433190597_102023-O.webp",
        "recycling_instructions": {
            "steps": [
                "Limpia la botella para eliminar restos de líquidos.",
                "Quita la tapa y las etiquetas.",
                "Coloca la botella en el contenedor de reciclaje de vidrio."
            ],
            "important_notes": [
                "El vidrio es reciclable infinitamente sin perder calidad.",
                "Evita romper la botella antes de reciclarla."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 3,
        "product": "tarro de mermelada (vidrio)",
        "img":"https://st2.depositphotos.com/1764439/9255/i/950/depositphotos_92556486-stock-photo-empty-jam-jar.jpg",
        "recycling_instructions": {
            "steps": [
                "Limpia el tarro de mermelada para eliminar residuos.",
                "Quita la tapa (generalmente no reciclable).",
                "Coloca el tarro en el contenedor de reciclaje de vidrio."
            ],
            "important_notes": [
                "Asegúrate de que el vidrio esté limpio para evitar la contaminación del reciclaje.",
                "Si el tarro tiene etiquetas adhesivas, quítalas antes de reciclar."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 4,
        "product": "lata de aluminio",
        "img":"https://img.freepik.com/vector-premium/lata-aluminio-brillante-refresco-o-plantilla-cerveza-blanco_88653-860.jpg",
        "recycling_instructions": {
            "steps": [
                "Limpia la lata para eliminar restos de bebidas.",
                "Aplana la lata si es posible.",
                "Coloca la lata en el contenedor de reciclaje de metales."
            ],
            "important_notes": [
                "El aluminio es 100% reciclable y puede reciclarse infinitamente.",
                "No mezcles con otros metales no reciclables como latas de aerosol."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 5,
        "product": "cartón Tetra Pak (jugo, leche)",
        "img":"https://img.mundopmmi.com/files/base/pmmi/mundo/image/2019/11/1_TetraPak_100_biobased_carton_1000x640.5ddeec398278b.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
        "recycling_instructions": {
            "steps": [
                "Limpia el envase para eliminar restos de líquidos.",
                "Aplana el cartón para ahorrar espacio.",
                "Verifica si tu centro de reciclaje acepta Tetra Pak."
            ],
            "important_notes": [
                "El Tetra Pak está compuesto de papel, plástico y aluminio, por lo que requiere un proceso especial de reciclaje."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 6,
        "product": "periódico",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Koxk4M9Ccd9lY0mLyF__2qqXInSDkFD_1Q&s",
        "recycling_instructions": {
            "steps": [
                "Aplana las hojas de periódico para ahorrar espacio.",
                "No mezcles con papel sucio o mojado.",
                "Coloca el periódico en el contenedor de reciclaje de papel."
            ],
            "important_notes": [
                "El papel reciclado puede usarse para fabricar nuevos productos de papel.",
                "Si el periódico está manchado con grasa, no lo pongas en el reciclaje."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 7,
        "product": "bolsa de plástico",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWln0F1ePDGlXHyEHA4huUc-Z9qTytxoAMfQ&s",
        "recycling_instructions": {
            "steps": [
                "Lleva las bolsas plásticas a un centro de reciclaje especializado.",
                "No las pongas en los contenedores de reciclaje estándar."
            ],
            "important_notes": [
                "Las bolsas plásticas pueden causar problemas en las instalaciones de reciclaje si no se gestionan adecuadamente.",
                "Verifica los puntos de reciclaje en tu área que acepten bolsas plásticas."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lI1dTEoWakLYs26jTElCZZXkImNV1B0P_w&s"
    },
    {
        "id": 8,
        "product": "dispositivo electrónico (móvil, computadora)",
        "img":"https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2022/04/1140-electronics-recycling-esp.jpg",
        "recycling_instructions": {
            "steps": [
                "Desmonta el dispositivo para separar las piezas reciclables.",
                "Lleva el dispositivo a un centro de reciclaje de electrónicos.",
                "Si tiene baterías, quítalas y llévalas a un punto de reciclaje de baterías."
            ],
            "important_notes": [
                "Los electrónicos contienen materiales raros y tóxicos que deben reciclarse correctamente.",
                "No los tires a la basura común."
            ]
        },
        "recycle": "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2017/10/13/59e151b9a2111.jpeg"
    },
    {
        "id": 9,
        "product": "batería de automóvil",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKROG3FSkPjbZwxO27Ay6EsYredbDqwHKztA&s",
        "recycling_instructions": {
            "steps": [
                "No tires las baterías de automóviles en la basura.",
                "Lleva la batería a un taller o punto de reciclaje especializado."
            ],
            "important_notes": [
                "Las baterías de automóviles contienen metales pesados y sustancias peligrosas que deben ser gestionadas adecuadamente."
            ]
        },
        "recycle": "https://www.paiscircular.cl/wp-content/uploads/2022/06/Reciclaje-baterias-en-Sodimac.jpg"
    },
    {
        "id": 10,
        "product": "envases de papel (cajas de cereales)",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxdzYnXb0g052zOCDPx9AKgUGK31e8VlA_A&s",
        "recycling_instructions": {
            "steps": [
                "Limpia las cajas si contienen restos de comida (especialmente las cajas de pizza, que suelen estar manchadas de grasa).",
                "Aplana las cajas para ahorrar espacio.",
                "Coloca las cajas en el contenedor de reciclaje de papel y cartón."
            ],
            "important_notes": [
                "Evita poner cajas con recubrimientos plásticos o de cera (como las de pizza con grasa)."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 11,
        "product": "tapas de frascos (plástico y metal)",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S0jIYbm1WCpE3EFf9-S3qO30SfwASSjOTg&s",
        "recycling_instructions": {
            "steps": [
                "Limpia la tapa si tiene restos de alimentos o líquidos.",
                "Colócala en el contenedor adecuado según el material (plástico o metal)."
            ],
            "important_notes": [
                "Asegúrate de separarlas de los frascos o botellas."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },
    {
        "id": 12,
        "product": "lámparas (incandescentes, fluorescentes, LED)",
        "img":"https://www.tecnocem.com/imagen/luces-fluorescentes/bombillas-fluorescentes.jpg",
        "recycling_instructions": {
            "steps": [
                "No las tires a la basura común.",
                "Llévalas a un punto de reciclaje de bombillas."
            ],
            "important_notes": [
                "Las lámparas fluorescentes contienen mercurio, por lo que no deben desecharse de manera convencional."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNkL3ONxNiYB0D5fx9a08jYj6EdZO9z-pkQ&s"
    },
    {
        "id": 13,
        "product": "baterías recargables (de móviles, cámaras, computadoras)",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_5SaIdmKr3FJyBl1jKaS3zPSOVxc2uB-aA&s",
        "recycling_instructions": {
            "steps": [
                "No las pongas en la basura común.",
                "Llévalas a un punto de reciclaje de baterías."
            ],
            "important_notes": [
                "Las baterías contienen materiales tóxicos que pueden contaminar el ambiente."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQog75hHGmFlOqBAUXqT9PHL3btNbcPTXkvQ&s"
    },
    {
        "id": 14,
        "product": "cápsulas de café (aluminio y plástico)",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEEDWWyjwobp58l4rPrKis4yC0v16674mXA&s",
        "recycling_instructions": {
            "steps": [
                "Limpia las cápsulas antes de reciclarlas.",
                "Colócalas en el contenedor adecuado según el material (plástico o aluminio)."
            ],
            "important_notes": [
                "Asegúrate de limpiar las cápsulas antes de reciclarlas para evitar contaminación."
            ]
        },
        "recycle": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDeLx1oGyebO8xw5k8UcHTsc45vvK9SHGgw&s"
    },

];
