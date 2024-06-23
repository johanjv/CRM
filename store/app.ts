import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        title: "CRM JV",
        eslogan: "¡Gestiona tus clientes y oportunidades de manera eficiente y efectiva!",
        showModal: ref(false)
    }),
    getters: { },
    actions: {
        async changeVisibilityModal() {
            this.showModal = !this.showModal; // set authenticated  state value to false
        },
    },
    persist: true,

});