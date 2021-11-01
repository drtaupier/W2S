import '../css/emprendedores.scss';
import { UI } from './classes';
const ui = new UI();

window.onload = function () {
  const t0 = performance.now();
  ui.footer();
  const t1 = performance.now();
  console.log('This code take: '`${t1 - t0} miliseconds`);
};
