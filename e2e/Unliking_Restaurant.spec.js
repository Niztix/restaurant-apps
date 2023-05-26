const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('UnLiking Restaurant');
// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});
// eslint-disable-next-line no-undef
Scenario('unliking', async ({ I }) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item_not_found');
  I.amOnPage('/');
  I.seeElement('.explore a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.explore a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.seeElement('.like');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.content');
  const likedRestaurantTitle = await I.grabTextFrom('.explore a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.seeElement('.like');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item_not_found');
});
