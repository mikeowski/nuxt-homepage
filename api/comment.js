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
    res.status(200).json(comment)
    //redis connection
    let redis = new Redis(
      'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
    )
    //redis write
    redis.lpush(url, JSON.stringify(comment))
    //redis quit
    redis.quit()
    //response
  }
  if (req.method === 'GET') {
    const { currentUrl } = req.query
    let redis = new Redis(
      'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
    )
    const comments = await redis.lrange(`${currentUrl}`, 0, -1)
    redis.quit()
    const data = comments.map((v) => JSON.parse(v))
    res.status(200).json(data)
  }
  if (req.method === 'DELETE') {
    const { currentUrl, id } = req.query
    let redis = new Redis(
      'redis://:cd9325e584e94ca2bc669cadc9bee755@eu1-alive-pipefish-31892.upstash.io:31892'
    )
    const comments = await redis.lrange(`${currentUrl}`, 0, -1)
    const data = comments.map((v) => JSON.parse(v))
    const deletedComment = data.find((comment) => {
      return comment.id == `${id}`
    })
    const del = await redis.lrem(
      `${currentUrl}`,
      0,
      JSON.stringify(deletedComment)
    )
    res.status(200).json(del)
  }
})
export default app
