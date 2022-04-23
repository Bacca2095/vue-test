import { defineStore } from "pinia";

export interface LoggedUser {
  userName: string | null;
  token: string | null;
}

export default defineStore("store", {
  state: () => {
    const user: LoggedUser = {
      userName: null,
      token: null,
    };
    return {
      user,
    };
  },
  actions: {
    setUser(user: LoggedUser) {
      this.user = user;
    },
  },
  getters: {
    getToken: (state) => {
      return state.user.token;
    },
  },
});
