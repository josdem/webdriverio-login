const properties = require("../properties/test.properties")

class Login {
    get usernameInput() {
        return $('div[id="username"]')
    }
    get passwordInput() {
        return $('div[id="password"]')
    }

    async login(){
        const username = await this.usernameInput
        expect(username).toBeExisting()
        await username.setValue(properties.username)
        const password = await this.passwordInput
        expect(password).toBeExisting()
        await password.setValue(properties.password)
    }  

    async open (){
        return browser.url(properties.url)
    }
}

module.exports = new Login()