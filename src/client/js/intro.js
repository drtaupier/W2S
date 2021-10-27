const { Intro, UI } = require('./classes');
const ui = new UI();
import '../css/intro.scss';

window.onload = function () {
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

  for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener('click', (e) => {
      switch (circle[i]) {
        case circle[0]:
          break;
        case circle[1]:
          ui.removeInfo();
          ui.info(
            'Profesor.png',
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

  ui.footer();
};

const circle = document.getElementsByClassName('circle');
console.log(circle);
