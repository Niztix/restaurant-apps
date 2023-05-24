Feature('Liking Restaurants');

Before(({  }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants',  ({ I }) => {
    I.seeElement('.details');
    I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
