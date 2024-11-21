document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log(id);

    show_submenu();
    recycle_product_info(id);
});