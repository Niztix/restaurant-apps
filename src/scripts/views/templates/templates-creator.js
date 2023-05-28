import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => ` 
  <h2 class="detail__title">${restaurant.name}</h2>
  <img class="detail__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="detail__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menus">
    <h3>Menu</h3>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  </div>
  <div class="restaurant__overview">
    <span>${restaurant.customerReviews.reduce((show, value) => show.concat(`
    <div class="card__overview">
        <p class="name__overview">${value.name}</p>
        <p class="review__overview">${value.review}</p>
        <p class="date__overview">${value.date}</p>
    </div>
        `), '<h3>Customer Reviews</h3>')}</span>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
      <a class="restoran-item" href="/#/detail/${restaurant.id}">
      <div class="card">
        <div class="city">${restaurant.city}</div>
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar suasana restaurant yang berada di ${restaurant.name}">
        <div class="details">
          <h3 class="restaurant_name">${restaurant.name}<span> | ⭐️ ${restaurant.rating}</span></h3>
        </div>
      </div>
      </a>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
