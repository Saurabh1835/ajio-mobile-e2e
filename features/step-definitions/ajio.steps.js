const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../src/pageobjects/login.page');
const HomePage = require('../../src/pageobjects/home.page');
const SearchPage = require('../../src/pageobjects/search.page');
const ProductPage = require('../../src/pageobjects/product.page');
const CartPage = require('../../src/pageobjects/cart.page');

Given('the app is launched', async () => {
  // Appium will open the app from APK automatically
  await driver.pause(5000);
});

When('I login with username {string} and password {string}', async (username, password) => {
  await LoginPage.waitForLogin();
  await LoginPage.login(username, password);
});

Then('I should see the home screen', async () => {
  await HomePage.waitForHome();
  expect(await HomePage.isDisplayed()).to.be.true;
});

When('I search for {string}', async (text) => {
  await HomePage.search(text);
});

When('I open first product in results', async () => {
  await SearchPage.openFirst();
});

When('I add product to cart', async () => {
  await ProductPage.addToCart();
});

Then('I open cart', async () => {
  await HomePage.openCart();
  await CartPage.waitForCart();
});

When('I remove the product from cart', async () => {
  await CartPage.removeItem();
});

When('I logout', async () => {
  await HomePage.logout();
});

Then('I should see the login screen', async () => {
  await LoginPage.waitForLogin();
  expect(await LoginPage.isDisplayed()).to.be.true;
});
