import { useAuthStore } from "~/store/auth"

export default defineNuxtPlugin(() => {
    const token = useCookie('token')
  
    const api = $fetch.create({
      baseURL: 'http://localhost:4500/api',

      onRequest({ request, options, error }) {
        if (token.value) {
          const headers = options.headers ||= {}
          if (Array.isArray(headers)) {
            headers.push(['x-access-token', `${token.value}`])
          } else if (headers instanceof Headers) {
            headers.set('x-access-token', `${token.value}`)
          } else {
            headers['x-access-token'] = `${token.value}`
          }
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await navigateTo('/auth')
        }
      }
    })
  
    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
  