<script setup lang="ts">
    import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
    import { useAuthStore } from '@/store/auth'; // import the auth store we just created
    import { useAppStore } from '@/store/app'
    
    const { title, eslogan } = useAppStore()
    const { authenticateUser, loading } = useAuthStore(); // use authenticateUser action from  auth store
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

    const user = ref({
        username: 'admin@gmail.com', 
        password: '123123123',
    });

    const loadLogin = ref(false);

    const router = useRouter();
    
    const login = async () => {
        loadLogin.value = true;
        await authenticateUser(user.value); // call authenticateUser and pass the user object
        // redirect to homepage if user is authenticated
        if (authenticated) {
            router.push('/');
        }  
        loadLogin.value = false;

    };    

    definePageMeta({
        layout: 'login'
    })
</script>

<template>
    <div>
        <div class="min-h-screen bg-purple-400 flex justify-center items-center">
            <div class=" w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block absolute"></div>
            <div class=" w-48 h-48 rounded-xl bg-purple-300 bottom-12 right-12 transform rotate-12 hidden md:block  absolute "></div>
            <form class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div style="align-items:center;text-align: center;">
                    <NuxtLink to="/" class="text-3xl font-bold text-center mb-4 cursor-pointer">{{ title }}</NuxtLink>
                    <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                        {{ eslogan }}
                    </p>
                </div>
                <div class="space-y-4">
                <input v-model="user.username" :disabled="loadLogin" type="text" placeholder="Correo Electrónico" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
                <input v-model="user.password" :disabled="loadLogin" type="password" placeholder="Contraseña" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
                </div>
                <div class="text-center mt-6">
                    <button v-if="!loadLogin" @click.prevent="login" class="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
                        Iniciar Sesión
                    </button>
                    <ThemeComponentsLoadingPage v-else :disabled="!loadLogin" />
                    
                    <p class="mt-4 text-sm">¿No tienes una cuenta? <span class="underline cursor-pointer font-bold"> Registrate!</span></p>
                </div>
            </form>
            <div class="w-40 h-40  bg-purple-300 rounded-full top-0 right-12 hidden md:block absolute "></div>
            <div class="w-20 h-40  bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
    </div>
</template>