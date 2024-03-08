<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          {{ appInfo.title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Contacts List" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="left" bordered>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="person" />
          </q-item-section>
          <q-item-section>
            <h5>{{ auth._username }}</h5>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-avatar size="md" color="teal" text-color="white" icon="logout" />
          </q-item-section>
          <q-item-section>
            <q-btn @click="logout" flat> Logout </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>{{ appInfo.title }} ({{ appInfo.version }})</div>
        </q-toolbar-title>
        <q-toggle v-model="isDarkMode" @update:model-value="changeDarkMode"
          >Dark Mode</q-toggle
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { Ref, ref, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import { useConfigStore } from 'src/stores/config';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

// Store
const $q = useQuasar();
const configStore = useConfigStore();
const auth = useAuthStore();
const router = useRouter();

// State
const isDarkMode: Ref<boolean> = ref(configStore.isDarkMode);
const appInfo = {
  title: 'Phone Book',
  version: '1.0.0',
};
const rightDrawerOpen = ref(false);

// Functions
function changeDarkMode(value: boolean) {
  configStore.setTheme(value);
  $q.dark.set(value);
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function redirectToLoginPage() {
  router.push('/auth/login');
}

function logout() {
  auth.clearLogginData();
  redirectToLoginPage();
}

function checkUserAuthenticationState() {
  if (auth.isLoggedIn === false) {
    redirectToLoginPage();
  }
}

// Run on startup
onBeforeMount(() => {
  checkUserAuthenticationState();
  $q.dark.set(configStore.isDarkMode);
});
</script>
