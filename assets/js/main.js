const paneles = document.querySelectorAll('.panel');

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('activo');
    })
})