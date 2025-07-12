const allowedKeys = [
  'NUXT_PUBLIC_API_DATASCORE',
  'NODE_ENV',
  'NUXT_HOST',
  'NUXT_OAUTH_GOOGLE_CLIENT_ID',
  'NUXT_OAUTH_GOOGLE_CLIENT_SECRET',
  'NUXT_PORT',
  'NUXT_SESSION_PASSWORD',
]

export default defineEventHandler(() => {
  const filteredEnv = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => allowedKeys.includes(key))
  )
  return filteredEnv
})
