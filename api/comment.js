import { nanoid } from 'nanoid'
import Redis from 'ioredis'
import Boom from '@hapi/boom'

const errorResponse = (res, error) => {
  const { output } = error
  return res.status(output.statusCode).json(output.payload)
}

const express = require('express')
const bp = require('body-parser')
const app = express()
app.use(bp.json())

app.all('/', async function (req, res) {
  if (req.method === 'POST') {
    const { text, url, user } = req.body

    if (!text || !url || !user) {
      return errorResponse(res, Boom.badData('Parametreler eksik'))
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
    try {
      //redis connection
      let redis = new Redis(
        'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
      )
      //redis write
      redis.lpush(url, JSON.stringify(comment))
      //redis quit
      redis.quit()
      //response
      return res.status(200).json(comment)
    } catch (_) {
      return res.status(400).json({ message: 'Unexpected error occurred.' })
    }
  }
  if (req.method === 'GET') {
    const { currentUrl } = req.query
    if (!currentUrl) {
      return errorResponse(res, Boom.badData('Missing parameters'))
    }
    let redis = new Redis(
      'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
    )
    try {
      const comments = await redis.lrange(`${currentUrl}`, 0, -1)
      redis.quit()
      const data = comments.map((v) => JSON.parse(v))
      res.status(200).json(data)
    } catch (err) {
      return res.status(400).json({ message: 'Unexpected error occurred.' })
    }
  }

  if (req.method === 'DELETE') {
    const { currentUrl, comment } = req.body
    if ((!currentUrl, !comment)) {
      return errorResponse(res, Boom.badData('Missing parameters'))
    }
    let redis = new Redis(
      'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
    )
    try {
      await redis.lrem(currentUrl, 0, JSON.stringify(comment))
      res.status(200).json()
      redis.quit()
    } catch (err) {
      return res.status(400).json({ message: 'Unexpected error occurred.' })
    }
  }
})
export default app
