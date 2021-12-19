const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''
const NEXT_PUBLIC_AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ''
const NEXT_PUBLIC_AUTH0_CLIENT_ID =
  process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ''

export {
  NEXT_PUBLIC_AUTH0_CLIENT_ID,
  NEXT_PUBLIC_AUTH0_DOMAIN,
  NEXT_PUBLIC_BASE_URL
}