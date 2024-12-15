import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFilter = defineStore("filter", () => {
    const url = ref("https://restcountries.com/v3.1/");
    const search = (search) => {
        url.value = search;
    };
    return {
        url,
        search,
    };
});