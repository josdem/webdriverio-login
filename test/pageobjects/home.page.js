class Home {
  get messageParagraph() {
    return $('p[id="message"]')
  }

  async validateMessage() {
    const message = await this.messageParagraph
    expect(message).toBeExisting()
  }
}

module.exports = new Home()
