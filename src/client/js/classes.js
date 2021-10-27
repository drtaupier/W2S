const { result } = require('underscore');

class UI {
  footer() {
    const today = new Date();
    const year = today.getFullYear();
    const footer = document.querySelector('footer');
    footer.innerHTML = `<h2>Way-2-Success</h2>`;
    footer.innerHTML += `<h3>&copy; Derechos Reservados - ${year}</h3>`;
  }

  stickyNav() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      let headerPositionTop = header.getBoundingClientRect().top;
      let positionY = window.scrollY;
      if (headerPositionTop < positionY) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
        header.style.transition = 'all 0.3s';
      }
    });
  }

  cursos(curso) {
    const listaCursos = document.querySelector('.cursos-lista');
    const element = document.createElement('element');
    element.classList.add('cursosDisponibles');
    listaCursos.appendChild(element);
    const imagen = document.createElement('div');
    imagen.classList.add('imagen-curso');
    imagen.innerHTML = `<img src="public/img/${curso.imagen}">`;
    element.appendChild(imagen);
    const barra = document.createElement('div');
    barra.classList.add('barra');
    element.appendChild(barra);
    const info = document.createElement('div');
    info.classList.add('cursoName');
    info.innerHTML = `<h3>${curso.curso}</h3>`;
    info.innerHTML += `<a href="#">${curso.informe}</a>`;
    info.innerHTML += `<p>$ ${curso.precio}</p>`;
    element.appendChild(info);
  }

  info(img, area, texto, link) {
    const showResults = document.getElementById('show-results');
    const element = document.createElement('div');
    element.classList.add('results');
    element.innerHTML = `<h2><img src="public/icons/${img}">${area}</h2>`;
    element.innerHTML += `<p>${texto}</p>`;
    element.innerHTML += `<a href="#">Learn more..</a>`;
    showResults.appendChild(element);
  }

  removeInfo() {
    const result = document.querySelector('.results');
    if (result) {
      result.remove();
    }
  }
}

class Intro {
  constructor(id, imagen, texto) {
    const circuloMarco = document.querySelector('.circulo');
    const element = document.createElement('div');
    element.classList.add('circle');
    element.setAttribute('id', id);
    element.innerHTML = `<img src="public/icons/${imagen}">`;
    element.innerHTML += `<p>${texto}</p>`;
    circuloMarco.appendChild(element);
  }
}

module.exports = {
  UI,
  Intro,
};
