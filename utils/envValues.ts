const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''
const NEXT_PUBLIC_AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ''
const NEXT_PUBLIC_AUTH0_CLIENT_ID =
  process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ''
const NEXT_PUBLIC_AUTH0_AUDIENCE = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE ?? ''

export {
  NEXT_PUBLIC_AUTH0_AUDIENCE,
  NEXT_PUBLIC_AUTH0_CLIENT_ID,
  NEXT_PUBLIC_AUTH0_DOMAIN,
  NEXT_PUBLIC_BASE_URL
}
