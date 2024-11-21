function show_submenu(){
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
}

function insert_recyclable_products(){
    const productList = document.getElementById('container_products');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product_item'); 
        
        const productImg = document.createElement('img');
        productImg.classList.add('product_img')
        productImg.src = product.img;  
        productImg.alt = product.product;

        const productLink = document.createElement('a');
        productLink.classList.add('product_link');
        productLink.href = `recycle_product_detail.html?id=${product.id}`;

        productLink.appendChild(productImg);
        productItem.appendChild(productLink);
        productList.appendChild(productItem);
    });
}

function recycle_product_info(id) {
    const productDetailsContainer = document.getElementById('container_products_details');
    productDetailsContainer.innerHTML = '';

    const product = products.find(product => String(product.id) === String(id));
    if (!product) {
        productDetailsContainer.textContent = 'Producto no encontrado.';
        return;
    }

    // Crear contenedor principal de detalles
    const productDetails = document.createElement('div');
    productDetails.classList.add('product_details');

    // Información general
    const infoGeneral = document.createElement('div');
    infoGeneral.classList.add('details_info_general');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = product.product;

    const stepsList = document.createElement('ul');
    stepsList.classList.add('details_step_list');
    product.recycling_instructions.steps.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });

    const imageGeneral = document.createElement('div');
    imageGeneral.classList.add('details_info_image');

    const image = document.createElement('img');
    image.src = product.img;
    image.alt = product.product;

    // Notas importantes
    const productAdicional = document.createElement('div');
    productAdicional.classList.add('product_additional','product_details');

    const productAdicionalNotes = document.createElement('div');
    productAdicionalNotes.classList.add('details_info_notes','details_info_general');

    const notesTitle = document.createElement('h4');
    notesTitle.textContent = 'Notas Importantes:';

    const notesList = document.createElement('ul');
    notesList.classList.add('details_step_list');
    product.recycling_instructions.important_notes.forEach(note => {
        const noteItem = document.createElement('li');
        noteItem.textContent = note;
        notesList.appendChild(noteItem);
    });

    const imageGeneralNotes = document.createElement('div');
    imageGeneralNotes.classList.add('details_info_image');

    const imageNotes = document.createElement('img');
    imageNotes.src = product.recycle;
    imageNotes.alt = `${product.product} - Reciclaje`;

    // agrupar elementos
    imageGeneral.appendChild(image);
    infoGeneral.appendChild(title);
    infoGeneral.appendChild(stepsList);
    productDetails.appendChild(infoGeneral);
    productDetails.appendChild(imageGeneral);

    imageGeneralNotes.appendChild(imageNotes);
    productAdicionalNotes.appendChild(notesTitle);
    productAdicionalNotes.appendChild(notesList);
    productAdicional.appendChild(imageGeneralNotes);
    productAdicional.appendChild(productAdicionalNotes);

    // Agregar todo al contenedor principal
    productDetailsContainer.appendChild(productDetails);
    productDetailsContainer.appendChild(productAdicional);
}

function swipper(){
    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
}