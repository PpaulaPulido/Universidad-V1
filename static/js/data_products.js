const products = [
    {
        "id": 1,
        "product": "botella de plástico",
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
        }
    },
    {
        "id": 2,
        "product": "botella de vidrio",
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
        }
    },
    {
        "id": 3,
        "product": "tarro de mermelada (vidrio)",
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
        }
    },
    {
        "id": 4,
        "product": "lata de aluminio",
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
        }
    },
    {
        "id": 5,
        "product": "cartón Tetra Pak (jugo, leche)",
        "recycling_instructions": {
            "steps": [
                "Limpia el envase para eliminar restos de líquidos.",
                "Aplana el cartón para ahorrar espacio.",
                "Verifica si tu centro de reciclaje acepta Tetra Pak."
            ],
            "important_notes": [
                "El Tetra Pak está compuesto de papel, plástico y aluminio, por lo que requiere un proceso especial de reciclaje."
            ]
        }
    },
    {
        "id": 6,
        "product": "periódico",
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
        }
    },
    {
        "id": 7,
        "product": "bolsa de plástico",
        "recycling_instructions": {
            "steps": [
                "Lleva las bolsas plásticas a un centro de reciclaje especializado.",
                "No las pongas en los contenedores de reciclaje estándar."
            ],
            "important_notes": [
                "Las bolsas plásticas pueden causar problemas en las instalaciones de reciclaje si no se gestionan adecuadamente.",
                "Verifica los puntos de reciclaje en tu área que acepten bolsas plásticas."
            ]
        }
    },
    {
        "id": 8,
        "product": "dispositivo electrónico (móvil, computadora)",
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
        }
    },
    {
        "id": 9,
        "product": "batería de automóvil",
        "recycling_instructions": {
            "steps": [
                "No tires las baterías de automóviles en la basura.",
                "Lleva la batería a un taller o punto de reciclaje especializado."
            ],
            "important_notes": [
                "Las baterías de automóviles contienen metales pesados y sustancias peligrosas que deben ser gestionadas adecuadamente."
            ]
        }
    },
    {
        "id": 10,
        "product": "envases de papel (cajas de cereales, cajas de pizza)",
        "recycling_instructions": {
            "steps": [
                "Limpia las cajas si contienen restos de comida (especialmente las cajas de pizza, que suelen estar manchadas de grasa).",
                "Aplana las cajas para ahorrar espacio.",
                "Coloca las cajas en el contenedor de reciclaje de papel y cartón."
            ],
            "important_notes": [
                "Evita poner cajas con recubrimientos plásticos o de cera (como las de pizza con grasa)."
            ]
        }
    },
    {
        "id": 11,
        "product": "tapas de frascos (plástico y metal)",
        "recycling_instructions": {
            "steps": [
                "Limpia la tapa si tiene restos de alimentos o líquidos.",
                "Colócala en el contenedor adecuado según el material (plástico o metal)."
            ],
            "important_notes": [
                "Asegúrate de separarlas de los frascos o botellas."
            ]
        }
    },
    {
        "id": 12,
        "product": "lámparas (incandescentes, fluorescentes, LED)",
        "recycling_instructions": {
            "steps": [
                "No las tires a la basura común.",
                "Llévalas a un punto de reciclaje de bombillas."
            ],
            "important_notes": [
                "Las lámparas fluorescentes contienen mercurio, por lo que no deben desecharse de manera convencional."
            ]
        }
    },
    {
        "id": 13,
        "product": "baterías recargables (de móviles, cámaras, computadoras)",
        "recycling_instructions": {
            "steps": [
                "No las pongas en la basura común.",
                "Llévalas a un punto de reciclaje de baterías."
            ],
            "important_notes": [
                "Las baterías contienen materiales tóxicos que pueden contaminar el ambiente."
            ]
        }
    },
    {
        "id": 14,
        "product": "cápsulas de café (aluminio y plástico)",
        "recycling_instructions": {
            "steps": [
                "Limpia las cápsulas antes de reciclarlas.",
                "Colócalas en el contenedor adecuado según el material (plástico o aluminio)."
            ],
            "important_notes": [
                "Asegúrate de limpiar las cápsulas antes de reciclarlas para evitar contaminación."
            ]
        }
    },
    {
        "id": 15,
        "product": "muebles viejos (madera, metal)",
        "recycling_instructions": {
            "steps": [
                "Desmonta los muebles si es posible (separando madera, metal, y otros componentes).",
                "Lleva las partes a centros de reciclaje especializados en muebles o materiales de construcción."
            ],
            "important_notes": [
                "Algunos materiales requieren reciclaje especializado, como el MDF o los barnices."
            ]
        }
    },
    {
        "id": 16,
        "product": "ropa vieja (sábanas, toallas)",
        "recycling_instructions": {
            "steps": [
                "Si la ropa está en buen estado, dónala.",
                "Si está dañada, llévala a un punto de reciclaje de textiles."
            ],
            "important_notes": [
                "El reciclaje de textiles puede evitar que terminen en vertederos."
            ]
        }
    }
];
