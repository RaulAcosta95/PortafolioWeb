let botonMovile = document.getElementById('boton-menu');
let enlacesMovile = document.getElementById('enlaces-movile');
// let enlaceMovile = document.querySelector('.enlace-movile')

botonMovile.addEventListener('click', () => {
    if (enlacesMovile.style.display==='none') {
        enlacesMovile.style.display='block';
    } else {
        enlacesMovile.style.display='none';
    }
})