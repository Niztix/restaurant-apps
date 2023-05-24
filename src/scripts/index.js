import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/main.scss';
import '../styles/sass/navbar.scss';
import '../styles/sass/resto-card.scss';
import '../styles/sass/responsive.scss';
import '../styles/sass/footer.scss';
import '../styles/sass/detail.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('.app-navigation'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
