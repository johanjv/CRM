import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        title: "CRM JV",
        eslogan: "¡Gestiona tus clientes y oportunidades de manera eficiente y efectiva!"
    }),
    getters: { },
    actions: { },
    persist: true,

});