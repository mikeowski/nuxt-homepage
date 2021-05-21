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
      Authorization: 'Bearer 56832446-4a1e-4dfe-8a5b-1a00a83d7f1f',
    },
  })
  const data = await res.json()
  return data.items
}
export { getBookmarks }
