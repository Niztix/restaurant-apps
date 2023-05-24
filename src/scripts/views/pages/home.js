import RestaurantSource from '../../data/data-resource';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <section class="hero_section">
          <img src="./images/heros/hero-image_4.jpg" alt="Hero image">
        </section>
        <h2>Explore Restaurant</h2>
        <div id="resto" class="explore">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurant();
    const restaurantContainer = document.querySelector('.explore');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
