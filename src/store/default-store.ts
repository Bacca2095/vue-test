import { defineStore } from "pinia";

interface DefaultStore {
  userEmail: string | null;
  showSuccessLogo: boolean;
}
const useDefaultStore = defineStore("default", {
  state: (): DefaultStore => ({
    userEmail: null,
    showSuccessLogo: false,
  }),
  actions: {
    signIn(userEmail: string) {
      this.userEmail = userEmail;
    },
  },
  getters: {
    getUserEmail: (state): string | null => state.userEmail,
    getShowSuccessLogo: (state): boolean => state.showSuccessLogo,
  },
  persist: true,
});

export { useDefaultStore };
