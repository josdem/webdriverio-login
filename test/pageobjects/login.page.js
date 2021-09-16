const properties = require("../properties/test.properties")

class Login {
  get usernameInput() {
    return $('input[id="username"]')
  }
  get passwordInput() {
    return $('input[id="password"]')
  }
  get singInButton() {
    return $('button[class="btn btn-lg btn-primary btn-block"]')
  }

  async login() {
    const username = await this.usernameInput
    expect(username).toBeExisting()
    await username.setValue(properties.username)
    const password = await this.passwordInput
    expect(password).toBeExisting()
    await password.setValue(properties.password)
    const submit = await this.singInButton
    expect(submit).toBeExisting()
    await submit.click()
  }

  async open() {
    return browser.url(properties.url)
  }
}

module.exports = new Login()
