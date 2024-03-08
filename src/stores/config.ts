import { defineStore } from 'pinia';

export type Config = {
  isDark: boolean;
};

export const useConfigStore = defineStore('config', {
  persist: true,

  state: (): Config => ({
    isDark: true,
  }),

  getters: {
    isDarkMode(): boolean {
      return this.isDark;
    },
  },

  actions: {
    async setTheme(isDark: boolean) {
      this.isDark = isDark;
    },
  },
});
