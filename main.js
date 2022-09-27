const inicio_btn = document.getElementById('inicio_btn');
const menu_btn = document.getElementById('menu_btn');
const detalle_btn = document.getElementById('detalle_btn');
const contacto_btn = document.getElementById('contacto_btn');
const modo_btn = document.getElementById('modo_btn');

const container = document.querySelector('.container');
const card_contacto = document.querySelector('.card-contacto');
const footer = document.querySelector('footer');

const ul = document.getElementById('ul');

const paginaInicio = () => {
    document.location.href = "index.html";
}
const paginaMenu = () => {
    document.location.href = "menu.html";
}
const paginaDetalle = () => {
    document.location.href = "detalle.html";
}
const paginaContacto = () => {
    document.location.href = "contacto.html";
}

const cambiarModo = () => {
    container.classList.toggle('container-claro');
    card_contacto.classList.toggle('card-contacto-claro');
    footer.classList.toggle('footer-claro');
    modo_btn.classList.toggle('modo-claro');
}

ul.addEventListener('click', (e) => {
    let target = e.target;
    switch (target){
        case inicio_btn: 
            paginaInicio();
        break;
        case menu_btn: 
            paginaMenu();
        break;
        case detalle_btn: 
            paginaDetalle();
        break;
        case contacto_btn: 
            paginaContacto();
        break;
        case modo_btn:
            cambiarModo();
        break;
    }
});