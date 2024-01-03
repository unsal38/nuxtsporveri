import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
    state: () => ({
        firstName: null,
        lastName: null,
    }),
    actions: {
        //   async fetchTodos() {
        //     const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
        //     if (data.value) {
        //       this.todos = data.value;
        //     }
        //   },
    },
    getters: {
        fullName():String {
            return `${this.firstName} ${this.lastName}`;
        },
    }
});
