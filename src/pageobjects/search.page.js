class SearchPage {
  // List of product cards – placeholder: use a proper locator
  get resultItems() {
    // clickable layout – adjust using inspector
    return $$('android=new UiSelector().resourceId("com.ril.ajio:id/productItemLayout")');
  }

  async openFirst() {
    await driver.pause(3000); // wait results load
    const items = await this.resultItems;
    if (items.length === 0) {
      throw new Error('No search results found');
    }
    await items[0].waitForDisplayed({ timeout: 15000 });
    await items[0].click();
  }
}

module.exports = new SearchPage();
