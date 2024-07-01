<template>
    <div class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex 
    justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
        <div class="flex flex-col justify-center">
            <div class="relative sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center space-x-5">
                            <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 class="leading-relaxed">Register an Prospect</h2>
                                <p class="text-sm text-gray-500 font-normal leading-relaxed">Manage Prospects Effectively.</p>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-2 text-base leading-6 space-y-1 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Full Name</label>
                                    <input type="text" v-model="prospect.fullName"
                                        class="px-4 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Full Name">
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Company</label>
                                    <input type="text" v-model="prospect.company"
                                        class="px-4 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Company">
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Email</label>
                                    <input type="text" v-model="prospect.email"
                                        class="px-4 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Email">
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Cell phone</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" v-model="prospect.cellPhone"
                                                class="pr-4 pl-10 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="CellPhone">
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Phone</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" v-model="prospect.phone"
                                                class="pr-4 pl-10 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Phone">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Country</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" v-model="prospect.country"
                                                class="pr-4 pl-10 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="Country">
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Entry Date</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="text" v-model="prospect.entryDate"
                                                class="pr-4 pl-10 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="26/02/2020">
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Comments</label>
                                    <input type="text" v-model="prospect.comments"
                                        class="px-4 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Comments">
                                </div>
                            </div>
                            <div class="pt-4 flex items-center space-x-4  justify-center">
                                <template v-if="!loadSaveProspects">
                                    <button @click="showModal"
                                        class="flex justify-center items-center w-full bg-red-400 hover:bg-red-700 text-white px-4 py-3 rounded-md focus:outline-none">
                                        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"></path>
                                        </svg> Go Back
                                    </button>
                                    <button @click="createNewProspect" class="bg-purple-400 hover:bg-purple-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                        Register
                                    </button>
                                </template>
                                <ThemeComponentsLoadingPage v-else :disabled="!loadSaveProspects" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import type { ProspectInterface } from '~/interfaces/ProspectInterface';
  import { useAppStore } from '~/store/app'; // import the auth store we just created
  import { defineEmits } from 'vue';

  const emit = defineEmits(['refresh-prospects']);

  const { changeVisibilityModal } = useAppStore(); // make authenticated state reactive with storeToRefs

  const loadSaveProspects = ref(false);
  const prospect: ProspectInterface = reactive({
    fullName: '',
    company: '',
    email: '',
    cellPhone: '',
    phone: '',
    country: '',
    entryDate: new Date().toISOString(),
    comments: ''
  })
  

  const showModal = async () => {    
    await changeVisibilityModal();
  }

  const createNewProspect = async () => {
    loadSaveProspects.value = true;
    const { data, error: fetchError } = await useAPI('/prospects', {
      method: 'POST',
      body: JSON.stringify(prospect),
      headers: {
        'Content-Type': 'application/json',
      },
      default: () => ({}),
    });
    loadSaveProspects.value = false;
    showModal();
    emit('refresh-prospects');

  }
</script>

<style scoped></style>