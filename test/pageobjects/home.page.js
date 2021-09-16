class Home {
  get messageParagraph() {
    return $('p[id="message"]')
  }

  async validateMessage() {
    const message = await this.messageParagraph
    await expect(message).toBeExisting()
  }
}

module.exports = new Home()
