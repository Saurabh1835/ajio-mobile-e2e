class ProductPage {
  // Add to bag button
  get addToCartBtn() {
    // text may be "ADD TO BAG" or "ADD TO CART"
    return $('android=new UiSelector().textContains("ADD TO BAG")');
  }

  // Sometimes size selection is required
  get firstSizeOption() {
    return $('android=new UiSelector().resourceId("com.ril.ajio:id/tv_size")');
  }

  // Optional: go to bag from bottom snackbar or button
  get viewBagBtn() {
    return $('android=new UiSelector().textContains("GO TO BAG")');
  }

  async addToCart() {
    await this.addToCartBtn.waitForDisplayed({ timeout: 20000 });
    await this.addToCartBtn.click();

    // if size selection is required
    try {
      if (await this.firstSizeOption.isDisplayed()) {
        await this.firstSizeOption.click();
      }
    } catch (e) {
      // ignore if not present
    }

    // wait for "GO TO BAG" or confirmation
    try {
      await this.viewBagBtn.waitForDisplayed({ timeout: 10000 });
    } catch (e) {
      // ignore if not present
    }
  }
}

module.exports = new ProductPage();
