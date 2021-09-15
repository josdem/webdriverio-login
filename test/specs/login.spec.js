const LoginPage = require("../pageobjects/login.page")

describe("should login", () => {
  it("send credentials", async () => {
    await LoginPage.open()
    await LoginPage.login()
  })
})
