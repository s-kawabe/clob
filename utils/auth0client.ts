import { Auth0Client } from '@auth0/auth0-spa-js'

import {
  NEXT_PUBLIC_AUTH0_CLIENT_ID,
  NEXT_PUBLIC_AUTH0_DOMAIN
} from '@/utils/envValues'

export const auth0 = new Auth0Client({
  domain: NEXT_PUBLIC_AUTH0_DOMAIN,
  client_id: NEXT_PUBLIC_AUTH0_CLIENT_ID
})
