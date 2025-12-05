class LoginPage {
  // Example: use correct IDs from Ajio login screen
  get loginButtonOnLanding() {
    // e.g. "Sign In" button on first screen
    return $('android=new UiSelector().textContains("Sign In")');
  }

  get mobileNumberField() {
    // e.g. mobile/email input field
    return $('android=new UiSelector().resourceId("com.ril.ajio:id/et_mobile")');
  }

  get continueBtn() {
    return $('android=new UiSelector().textContains("CONTINUE")');
  }

  get passwordField() {
    return $('android=new UiSelector().resourceId("com.ril.ajio:id/et_password")');
  }

  get loginSubmitBtn() {
    return $('android=new UiSelector().textContains("LOGIN")');
  }

  async waitForLogin(timeout = 20000) {
    // adjust depending on screen
    await this.loginButtonOnLanding.waitForDisplayed({ timeout });
  }

  async login(username, password) {
    // Step 1: open login page if needed
    if (await this.loginButtonOnLanding.isDisplayed()) {
      await this.loginButtonOnLanding.click();
    }

    // Step 2: enter mobile/email
    await this.mobileNumberField.waitForDisplayed({ timeout: 15000 });
    await this.mobileNumberField.setValue(username);
    await this.continueBtn.click();

    // Step 3: enter password
    await this.passwordField.waitForDisplayed({ timeout: 15000 });
    await this.passwordField.setValue(password);

    // Step 4: submit
    await this.loginSubmitBtn.click();
  }

  async isDisplayed() {
    return this.loginButtonOnLanding.isDisplayed();
  }
}

module.exports = new LoginPage();
