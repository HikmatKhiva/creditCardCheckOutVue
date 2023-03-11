import { defineStore } from 'pinia';
export const useStorage = defineStore('storage', {
    state: () => ({
        cardNumber: '',
        cardHolder: '',
        cardDate: { month: '', year: '' },
        cardCVV: '',
        clicked: false
    }),
    actions: {
        proceed() {
            this.clicked = true;
        }
    }
})