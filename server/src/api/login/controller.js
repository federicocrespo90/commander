import request from 'request';
import { MAIN_ENDPOINT } from '../../config'

export const create = ({ body }, res, next) => {
  console.log(body)
  const options = {
    method: 'POST',
    url: `${MAIN_ENDPOINT}/login`,
    json: {
      username: body.username,
      password: body.password
    }
  }
  request(options, (error, response, body) => {
    let info = null
    if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
      info = body
    } else {
      console.log('ERROR::: ', error)
      info == error
    }
    res.status(response.statusCode).json(info)
  })
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  res.status(200).json([])

export const show = ({ params }, res, next) =>
  res.status(200).json({})

export const update = ({ body, params }, res, next) =>
  res.status(200).json(body)

export const destroy = ({ params }, res, next) =>
  res.status(204).end()
