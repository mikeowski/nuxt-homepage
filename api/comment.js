import { nanoid } from 'nanoid'
import Redis from 'ioredis'

const express = require('express')
const bp = require('body-parser')
const app = express()
app.use(bp.json())

app.all('/', async function (req, res) {
  if (req.method === 'POST') {
    const { text, url, user } = req.body
    console.log(text, url, user)

    if (!text || !url || !user) {
      res.status(400).json({ message: 'parametreler eksik veya hatalı' })
    }
    const comment = {
      id: nanoid(),
      text,
      createdAt: Date.now(),
      user: {
        name: user.name,
        picture: user.picture,
      },
    }
    res.status(200).json(comment)
    //redis connection
    let redis = new Redis(
      'redis://:c24c148968a94037bcd9c29ded967a17@eu1-capital-sparrow-31880.upstash.io:31880'
    )
    //redis write
    redis.lpush(url, JSON.stringify(comment))
    //redis quit
    redis.quit()
    //response
  }
  if (req.method === 'GET') {
    let redis = new Redis(
      'redis://:c24c148968a94037bcd9c29ded967a17@eu1-capital-sparrow-31880.upstash.io:31880'
    )
    const comments = await redis.lrange('/notes/huso', 0, -1)
    redis.quit()
    const data = comments.map((v) => JSON.parse(v))
    res.status(200).json(data)
  }
})
export default app
