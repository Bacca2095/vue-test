import { defineStore } from "pinia";

interface DefaultStore {
  userEmail: string | null;
}
const useDefaultStore = defineStore("default", {
  state: (): DefaultStore => ({
    userEmail: null,
  }),
  actions: {
    signIn(userEmail: string) {
      this.userEmail = userEmail;
    },
  },
  getters: {
    getUserEmail: (state) => {
      return state.userEmail;
    },
  },
  persist: true,
});

export { useDefaultStore };
