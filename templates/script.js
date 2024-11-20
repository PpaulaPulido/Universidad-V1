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
});
