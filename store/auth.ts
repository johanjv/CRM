
import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: ref(false),
    loading: ref(false),
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
        // useFetch from nuxt 3
        const { data, pending }: any = await useFetch('http://localhost:4500/api/auth/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                username,
                password,
            },
        });
        
        this.loading = pending.value;

        if (!pending.value) {
            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.token; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
            }
        }
    },
    async logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});