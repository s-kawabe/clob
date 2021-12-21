import { defineController } from './$relay'
import { getUserById, upsertUser } from '$/service/user'

export default defineController(
  { getUserById, upsertUser },
  ({ getUserById, upsertUser }) => ({
    get: async ({ query }) => {
      const user = getUserById(query?.id)
      return user ? { status: 200, body: user } : { status: 404 }
    },
    post: async ({ body }) => ({
      status: 201,
      body: await upsertUser(body)
    })
  })
)
