
//iniciar muuri
var grid = new Muuri('.images', {
    layout: {
        rounding: false
      },
});

//galería
window.addEventListener('load',() => {
    grid.refreshItems().layout();
    document.getElementById('images').classList.add('image-loaded');
    
    // AddEventListener for categories
    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((elemento)=> {
        elemento.addEventListener('click', (evento)=> {
            evento.preventDefault();
            enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const category = evento.target.innerHTML.toLowerCase(); 
            category=== "all" ? grid.filter('[data-category]'): grid.filter(`[data-category="${category}"]`);
        });
    });

    // AddEventListener for images
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.images .item img').forEach((elemento)=>{
        elemento.addEventListener('click',() => {
            const ruta= elemento.getAttribute('src');
            const description= elemento.parentNode.parentNode.dataset.description;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta; 
            document.querySelector('#overlay .description').innerHTML = description;
        });
    });   
    //AddEventListener for close 
    document.querySelector('#btn-close-popup').addEventListener('click', ()=>{
        overlay.classList.remove('activo');
    });
    //addEventListener overlay close
    overlay.addEventListener('click',(evento) => {
        evento.target.id === 'overlay'? overlay.classList.remove('activo') : '';
    });
});



