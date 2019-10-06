import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'

const router = new Router()

/**
 * @api {post} /login Create login
 * @apiName CreateLogin
 * @apiGroup Login
 * @apiSuccess {Object} login Login's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login not found.
 */
router.post('/',
  create)

/**
 * @api {get} /login Retrieve logins
 * @apiName RetrieveLogins
 * @apiGroup Login
 * @apiUse listParams
 * @apiSuccess {Object[]} logins List of logins.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /login/:id Retrieve login
 * @apiName RetrieveLogin
 * @apiGroup Login
 * @apiSuccess {Object} login Login's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /login/:id Update login
 * @apiName UpdateLogin
 * @apiGroup Login
 * @apiSuccess {Object} login Login's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Login not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /login/:id Delete login
 * @apiName DeleteLogin
 * @apiGroup Login
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Login not found.
 */
router.delete('/:id',
  destroy)

export default router
