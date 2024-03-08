import { defineStore } from 'pinia';

export type AuthStore = {
  _username: string | null;
  _logged_at: Date | null;
};

export const useAuthStore = defineStore('auth', {
  persist: true,

  state: (): AuthStore => ({
    _username: null,
    _logged_at: null,
  }),

  getters: {
    username(): string | null {
      return this._username;
    },
    loggedTime(): Date | null {
      return this._logged_at;
    },
    isLoggedIn(): boolean {
      return this._username !== null;
    },
  },

  actions: {
    setLoggedIn(value: string) {
      this._username = value;
      this._logged_at = new Date();
    },
    clearLogginData() {
      this._username = null;
      this._logged_at = null;
    },
  },
});
