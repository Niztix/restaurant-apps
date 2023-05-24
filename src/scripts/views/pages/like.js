import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createMessageNotFoundRestaurant } from '../templates/templates-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2>Your Liked Restaurant</h2>
        <div id="resto" class="explore">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.explore');

    if (!restaurants.length) {
      mainContainer.innerHTML = createMessageNotFoundRestaurant();
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
