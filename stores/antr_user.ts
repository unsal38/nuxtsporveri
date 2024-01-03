import { defineStore } from 'pinia';
import { antrUser } from "~~/server/models/antr.model";

export const useAntrUserStore = defineStore('AntrUserStore', {

    state: () => ({
        antr: []
    }),
    actions: {
        // async antr_email() {
        //     const { status, data, signIn, signOut } = useAuth();
        //      this.antr.push({deneme: "deneme"}) //{deneme: "deneme"} //  {email: data.value?.user?.email}
        //   },
        //   addTodo() {
        //     this.antr = { deneme: "deneme" }
        //   },

    },
    getters: {
        antr_email() {
            const { status, data, signIn, signOut } = useAuth();
            return {email: data.value?.user?.email}
          },
    },

});