class HomePage {
  // Search bar at top
  get searchBox() {
    return $('android=new UiSelector().textContains("Search AJIO")');
  }

  // Cart icon
  get cartBtn() {
    return $('android=new UiSelector().descriptionContains("Cart")');
  }

  // Hamburger / menu icon
  get menuBtn() {
    return $('android=new UiSelector().descriptionContains("Menu")');
  }

  // Logout option in side menu
  get logoutOption() {
    return $('android=new UiSelector().textContains("Logout")');
  }

  async waitForHome(timeout = 20000) {
    await this.searchBox.waitForDisplayed({ timeout });
  }

  async isDisplayed() {
    return this.searchBox.isDisplayed();
  }

  async search(text) {
    await this.searchBox.waitForDisplayed({ timeout: 15000 });
    await this.searchBox.click();
    await this.searchBox.setValue(text);
    // Press Enter
    await driver.pressKeyCode(66); // Android KEYCODE_ENTER
    await driver.pause(3000);
  }

  async openCart() {
    await this.cartBtn.waitForDisplayed({ timeout: 15000 });
    await this.cartBtn.click();
  }

  async openMenu() {
    await this.menuBtn.waitForDisplayed({ timeout: 15000 });
    await this.menuBtn.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutOption.waitForDisplayed({ timeout: 15000 });
    await this.logoutOption.click();
  }
}

module.exports = new HomePage();
