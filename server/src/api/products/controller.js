import request from 'request';
import { MAIN_ENDPOINT } from '../../config'

export const create = ({ headers, body }, res, next) => {
  const authHeader = headers.authorization ? headers.authorization : null
  if(body) {
    body.attributeSets = [
      "a118dc46-ac43-4c58-9140-4c3451d72060"
    ];
    body.attributes.images = []
  }
  const options = {
    headers: {
      'Authorization': `${authHeader}`
    },
    method: 'POST',
    url: `${MAIN_ENDPOINT}/products`,
    json: body
  }
  request(options, (error, response, body) => {
    let info = null
    if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
      info = body
    } else {
      info = error
    }
    res.status(response.statusCode).json(info)
  })
}

export const index = ({ headers, querymen: { query, select, cursor } }, res, next) => {
  const authHeader = headers.authorization ? headers.authorization : null
  const options = {
    url: `${MAIN_ENDPOINT}/products`,
    headers: {
      'Authorization': `${authHeader}`
    }
  }
  request(options, (error, response, body) => {
    let info = null
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body)
      res.set({
        'Access-Control-Expose-Headers': 'X-Total-Count',
        'X-Total-Count': info.length
      })
    } else {
      info = error
    }
    res.status(response.statusCode).json(info)
  })
}

export const show = ({ headers, params }, res, next) => {
  const authHeader = headers.authorization ? headers.authorization : null
  const id = params && params.id ? params.id : null
  const options = {
    url: `${MAIN_ENDPOINT}/products/${id}`,
    headers: {
      'Authorization': `${authHeader}`
    }
  }
  request(options, (error, response, body) => {
    let info = null
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body)
      res.set({
        'Access-Control-Expose-Headers': 'X-Total-Count',
        'X-Total-Count': info.length
      })
    } else {
      info = error
    }
    res.status(response.statusCode).json(info)
  })
}

export const update = ({ headers, body, params }, res, next) => {
  const authHeader = headers.authorization ? headers.authorization : null
  const id = params && params.id ? params.id : null
  const options = {
    headers: {
      'Authorization': `${authHeader}`
    },
    method: 'PUT',
    url: `${MAIN_ENDPOINT}/products/${id}`,
    json: {
      attributes: {
        quantity: body.attributes.quantity,
        manufacturer: body.attributes.manufacturer,
        sku: body.attributes.sku,
        images: []
      },
      attributeSets: [
        "a118dc46-ac43-4c58-9140-4c3451d72060"
      ]
    }
  }
  console.log('OPTIONS.JSON ::: ', options.json)
  request(options, (error, response, body) => {
    let info = null
    if (!error && (response.statusCode == 200 ||
        response.statusCode == 201 ||
        response.statusCode == 204
        )) {
          console.log('HERE', response)
          
    } else {
      info = error
    }
    res.status(response.statusCode).json(body)
  })
}

export const destroy = ({ headers, params }, res, next) => {
  const authHeader = headers.authorization ? headers.authorization : null
  const id = params && params.id ? params.id : null
  const options = {
    headers: {
      'Authorization': `${authHeader}`
    },
    method: 'DELETE',
    url: `${MAIN_ENDPOINT}/products/${id}`
  }
  request(options, (error, response, body) => {
    let info = null
    if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
      info = body
    } else {
      info = error
    }
    res.status(response.statusCode).json(info)
  })
}
