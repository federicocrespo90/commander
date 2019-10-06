import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'

const router = new Router()

/**
 * @api {post} /mid-layers Create mid layer
 * @apiName CreateMidLayer
 * @apiGroup MidLayer
 * @apiSuccess {Object} midLayer Mid layer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mid layer not found.
 */
router.post('/',
  create)

/**
 * @api {get} /mid-layers Retrieve mid layers
 * @apiName RetrieveMidLayers
 * @apiGroup MidLayer
 * @apiUse listParams
 * @apiSuccess {Object[]} midLayers List of mid layers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /mid-layers/:id Retrieve mid layer
 * @apiName RetrieveMidLayer
 * @apiGroup MidLayer
 * @apiSuccess {Object} midLayer Mid layer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mid layer not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /mid-layers/:id Update mid layer
 * @apiName UpdateMidLayer
 * @apiGroup MidLayer
 * @apiSuccess {Object} midLayer Mid layer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mid layer not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /mid-layers/:id Delete mid layer
 * @apiName DeleteMidLayer
 * @apiGroup MidLayer
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Mid layer not found.
 */
router.delete('/:id',
  destroy)

export default router
