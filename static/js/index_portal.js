document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const submenuContainer = document.querySelector('.submenu-container');

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        submenuContainer.classList.toggle('show');
    });

    // Cerrar el submenú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target) && !submenuContainer.contains(e.target)) {
            submenuContainer.classList.remove('show');
        }
    });

    counter(0, 90120, 9000,"counter");
    counter(0, 420, 9000,"counter_tree");
    counter(0, 15, 3000,"counter_water");
    counter(0, 932, 9000,"counter_co2");
    counter(0, 82, 4000,"counter_oil");
    counter(0, 4, 1000,"counter_energy");
});
function mostrarContenido(opcion) {
    const contenidoDiv = document.getElementById("recycle_info");
    let contenido = "";

    switch (opcion) {
        case "opcion1":
            contenido = `
                <h3 class="title">Papel y Cartón</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://www.smurfitkappa.com/sv/-/m/images/blog-thumbnail-931-x-642/recycling.jpg?rev=-1" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar hojas blancas usadas y sin usar, hojas de cuaderno, fotocopias, fax, cartas, periódicos, revistas, folletos, cartón corrugado, cartulinas, cajas de embalaje, kraft, cilindros de papel absorbente e higiénico, papel y cartón plastificado o encerado.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar limpios y secos.</p>
                </div>
            `;
            break;
        case "opcion2":
            contenido = `
                <h3 class="title">Plástico PET</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOupw-DHVVdwK7bstc51Z7ZFaWVOYEjDDFnA&s" alt="plástico pet" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar botellas desechables de bebidas, aguas, jugos, yogurts, productos de higiene personal y limpieza (transparentes y de color), bandejas de frutas y domos de torta.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar limpios, secos y compactados.</p>
                </div>
            `;
            break;
        case "opcion3":
            contenido = `
                <h3 class="title">Plástico Duro</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKDIikVNxtzofRYOBx9TyBiObhe9dSU-N-g&s" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar tapas de botellas, bidones, botellas de shampoo, cremas y de cosméticos, así como envases de detergente, de productos lácteos, de mantequilla y margarina.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar limpios, secos y compactados.</p>
                </div>
            `;
            break;
        case "opcion4":
            contenido = `
                <h3 class="title">Tetra Pak</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Tetra_Pak_packaging_portfolio_I_medium_size.jpg/320px-Tetra_Pak_packaging_portfolio_I_medium_size.jpg" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar envases de cartón para leches, jugos, vino y cremas.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar enjuagados, secos, desarmados y aplastados.</p>
                </div>
            `;
            break;
        case "opcion5":
            contenido = `
                <h3 class="title">Vidrio</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSLo_F9JKrJqFCf39S8bULyWpsDnw3N2gbA&s" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar botellas de cerveza, jugos, vino, leche y yogurt, así como envases de vidrio para conservas.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar limpios y secos.</p>
                </div>
            `;
            break;
        case "opcion6":
            contenido = `
                <h3 class="title">Latas</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPpB0ypqGLzTKquoKiikUqTEjLpCHk6HP0w&s" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar latas de aluminio de cerveza, gaseosas, bebidas energizantes, leche, conservas, jugos y aerosoles. Además se pueden reciclar envases de hojalata de leche, bebidas y café.</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben estar limpios, secos y sin etiquetas.</p>
                </div>
            `;
            break;
        case "opcion7":
            contenido = `
                <h3 class="title">RAEE y Cartuchos HP</h3>
                <div class="info_details">
                    <div class="details_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6jQYWdScG49-BGOVkAiEFRqIAgaSm12i3g&s" alt="papel y cartón" class="img">
                    </div>
                    <div class="details_text">
                        <p>Se pueden reciclar todos los cartuchos y botellas para impresoras de tinta HP, todos los cartuchos para impresoras de tóner HP, cajas y empaques donde vienen los cartuchos HP, así como cartuchos de tinta y tóner de las marcas HP y Samsung.</p>
                        <p>
                        También se pueden reciclar aparatos eléctricos y electrónicos (que funcionan a pilas, baterías o con energía eléctrica) que no sobrepasen los 25 cm (Tablets, celulares, cargadores, audífonos, cables, etc).</p>
                    </div>
                </div>
                <div class="info_icon">
                    <i class="fa-solid fa-circle-check"></i>
                    <p class="text">Recuerda que deben ser del tamaño correspondiente.</p>
                </div>
            `;
            break;
        default:
            contenido = "<p>Selecciona una opción para ver el contenido.</p>";
    }

    contenidoDiv.innerHTML = contenido;
}

function counter(desde, hasta, duracion,id) {
    const elemento = document.getElementById(id);
    let inicio = desde;
    const incremento = (hasta - desde) / (duracion / 10); 
    const intervalo = setInterval(() => {
        inicio += incremento;
        elemento.innerText = Math.floor(inicio).toLocaleString(); 
        if (inicio >= hasta) { 
            clearInterval(intervalo);
            elemento.innerText = hasta.toLocaleString(); 
        }
    }, 10); 
}

