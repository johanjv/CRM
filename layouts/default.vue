<script lang="ts" setup>
  import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
  import { useAuthStore } from '~/store/auth'; // import the auth store we just created

  const router = useRouter();


  const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

</script>

<template>
    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-purple-300 rounded">
      
      <!-- :accionOpen="accionOpen" -->
      <div>
        <themeComponentsAppSidebar  />
      </div>

      <div class="flex-1 flex flex-col overflow-hidden">
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-purple-300 rounded">
          <div class="container px-2 py-2">

            <div class="col-md-12">
              <themeComponentsAppHeader />
            </div>

            <div class="flex flex-col">
              <div class="">
                <div class="min-w-full sm:rounded-lg">
                  <slot />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
</template>