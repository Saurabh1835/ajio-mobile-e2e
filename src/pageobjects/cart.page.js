class CartPage {
  get cartHeader() {
    return $('android=new UiSelector().textContains("My Bag")');
  }

  get firstCartItem() {
    return $('android=new UiSelector().resourceId("com.ril.ajio:id/cartItemLayout")');
  }

  get removeBtn() {
    // Remove / Delete button
    return $('android=new UiSelector().textContains("REMOVE")');
  }

  get confirmRemoveBtn() {
    // sometimes a confirmation popup appears
    return $('android=new UiSelector().textContains("YES")');
  }

  async waitForCart(timeout = 20000) {
    await this.cartHeader.waitForDisplayed({ timeout });
  }

  async removeItem() {
    await this.firstCartItem.waitForDisplayed({ timeout: 20000 });
    await this.firstCartItem.click();

    await this.removeBtn.waitForDisplayed({ timeout: 10000 });
    await this.removeBtn.click();

    // confirm if popup
    try {
      if (await this.confirmRemoveBtn.isDisplayed()) {
        await this.confirmRemoveBtn.click();
      }
    } catch (e) {
      // ignore
    }

    await driver.pause(2000);
  }
}

module.exports = new CartPage();
