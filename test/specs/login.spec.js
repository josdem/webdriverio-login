const LoginPage = require("../pageobjects/login.page")
const HomePage = require("../pageobjects/home.page")

describe("should login", () => {
  it("send credentials", async () => {
    await LoginPage.open()
    await LoginPage.login()
    await HomePage.validateMessage()
    await browser.newWindow("http://localhost:8080/", {
      windowName: "Reactive Webflux Security",
    })
    console.log(await browser.getTitle())
    await HomePage.validateMessage()
  })
})
