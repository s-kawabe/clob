import path from 'path'
import Fastify, { FastifyServerFactory } from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import fastifyJwt from 'fastify-jwt'
import fastifyAuth0Verify from 'fastify-auth0-verify'
import {
  API_BASE_PATH,
  API_UPLOAD_DIR,
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET
} from '$/service/envValues'
import server from '$/$server'

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory })
  app.register(helmet)
  app.register(cors)

  if (API_UPLOAD_DIR) {
    app.after(() => {
      app.register(fastifyStatic, {
        root: path.resolve(__dirname, API_UPLOAD_DIR),
        prefix: '/upload/',
        decorateReply: false
      })
    })
  }

  app.register(fastifyAuth0Verify, {
    domain: AUTH0_DOMAIN,
    secret: AUTH0_CLIENT_SECRET,
    audience: AUTH0_AUDIENCE
  })
  server(app, { basePath: API_BASE_PATH })
  return app
}
