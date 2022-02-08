const URL = [
    'https://api.raindrop.io/rest/v1/raindrops/0',
    '?perpage=50',
    '&sort=-created',
    '&search=[{"key":"tag","val":"website"}]',
].join('')

async function getBookmarks() {
    const res = await fetch(URL, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${process.env.NUXT_ENV_RAINDROP}`,
        },
    })
    const data = await res.json()
    return data.items
}
export { getBookmarks }
