/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { decodeJwt } from "jose"

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const payload = {
      ...user,
      provider: 'Google',
    }

    console.log("✅ Requisição bem-sucedida:")

    const apiDatascore = useRuntimeConfig().public.apiDatascore

    try {
      const response = await $fetch(`${apiDatascore}/auth/google/`, {
        method: 'POST',
        body: payload,
        headers: {
          accept: 'application/json',
        },
      })

      console.log("✅ Requisição bem-sucedida:")

      const tokenPayload = decodeJwt(response.access_token)
      // console.log("Token Payload:", tokenPayload)
      const now = Math.floor(Date.now() / 1000)
      const expiresIn = payload.exp ? payload.exp - now : 0

      await setUserSession(event, {
        user: {
          name: tokenPayload.name,
          permissoes: tokenPayload.permissoes || [],
        },
        access_token: response.access_token,
        refresh_token: response.refresh_token,
        maxAge: expiresIn > 0 ? expiresIn : undefined
      })

      return sendRedirect(event, '/')

    } catch (error) {
      if (error instanceof Error) {
        console.error('❌ Erro ao fazer POST:', error.message)
        if ('data' in error) {
          console.error('📦 Resposta do servidor:', error.data)
        }
      } else {
        console.error('❌ Erro desconhecido:', error)
      }

      return sendRedirect(event, '/')
    }
  },

  onError(event, error) {
    console.error('Erro de autenticação Google:', error)
    return sendRedirect(event, '/')
  },
})
