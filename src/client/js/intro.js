const { Intro, UI } = require('./classes');
const ui = new UI();
import '../css/intro.scss';

window.onload = function () {
  const t0 = performance.now();
  //circulos
  const centro = new Intro('centro', 'head.png', '');
  const emprendedores = new Intro(
    'emprendedores',
    'Alumno.png',
    'Emprendedores'
  );
  const secretos = new Intro('secretos', 'Secreto.png', 'Secretos del exito');
  const empresas = new Intro('empresas', 'Empresarial.png', 'Empresas');
  const comunidad = new Intro(
    'comunidad',
    'Empresa.png',
    'Comunidad en General'
  );
  const elearning = new Intro(
    'elearning',
    'Profesor.png',
    'Desarrollo E-learning'
  );
  //Información de cada circulo
  for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener('click', (e) => {
      switch (circle[i]) {
        case circle[0]:
          break;
        case circle[1]:
          ui.removeInfo();
          ui.info(
            'Alumno.png',
            'Emprendedores',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab molestiae, corrupti nesciunt eaque debitis.',
            '#'
          );
          break;
        case circle[2]:
          ui.removeInfo();
          ui.info(
            'Secreto.png',
            'Secretos del Exito',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab molestiae, corrupti nesciunt eaque debitis.',
            '#'
          );
          break;
        case circle[3]:
          ui.removeInfo();
          ui.info(
            'Empresarial.png',
            'Empresas',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab molestiae, corrupti nesciunt eaque debitis.',
            '#'
          );
          break;
        case circle[4]:
          ui.removeInfo();
          ui.info(
            'Empresa.png',
            'Comunidad en General',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab molestiae, corrupti nesciunt eaque debitis.',
            '#'
          );
          break;
        case circle[5]:
          ui.removeInfo();
          ui.info(
            'Profesor.png',
            'Desarrollo E-Learning',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab molestiae, corrupti nesciunt eaque debitis.',
            '#'
          );
          break;
      }
    });
  }
  //Animaciones
  ui.animaciones('art2', 'nosotrosHistoriaText', 'animateIzq');
  ui.animaciones('art2', 'nosotrosImg', 'imagAnimada');
  ui.animaciones('art3', 'teachingHistory-content', 'imagAnimada');
  ui.animaciones('art3', 'teachingImage-content', 'animateIzq');
  //Footer
  ui.footer();
  //Rendimiento de la página:
  const t1 = performance.now();
  console.log('This code take: ', `${t1 - t0} miliseconds`);
};

const circle = document.getElementsByClassName('circle');
