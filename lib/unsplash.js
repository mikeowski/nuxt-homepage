class Unsplash {
  constructor() {
    this.baseUrl = 'https://api.unsplash.com/users/mahykisreal'
    this.clientId = `client_id=${process.env.NUXT_ENV_UNSPLASH}`
  }
  async getData(url) {
    const res = await fetch(url, {
      method: 'get',
    })
    return await res.json()
  }
  async getPhotos() {
    const url = [this.baseUrl, '/photos?per_page=50&', this.clientId].join('')
    return this.getData(url)
  }
}

export default new Unsplash()
