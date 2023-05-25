import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2>Your Liked Restaurant</h2>
        <div id="resto" class="explore">
          <h2 class="restaurant-item_not_found"></h2>
          <div id="query"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.explore');
    const empty = document.querySelector('.restaurant-item_not_found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
