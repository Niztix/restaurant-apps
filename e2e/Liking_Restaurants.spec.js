const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item_not_found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');
  I.seeElement('.explore a');

  const firstRestaurant = locate('.explore a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restoran-item');
  const likedRestaurantTitle = await I.grabTextFrom('.explore');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
