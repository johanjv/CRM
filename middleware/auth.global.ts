import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";


export default defineNuxtRouteMiddleware((to, from) => {
  

  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies

  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'auth') {
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'auth') {
    abortNavigation();
    return navigateTo('/auth');
  }
})