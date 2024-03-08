<template>
  <q-layout view="hHh lpR fFf" dark="true">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          {{ appInfo.title }}
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Contacts List" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>{{ appInfo.title }} ({{ appInfo.version }})</div>
        </q-toolbar-title>
        <q-toggle v-model="isDarkMode" @update:model-value="changeDarkMode">Dark Mode</q-toggle>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { Ref, ref, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import { useConfigStore } from 'src/stores/config';

// Store
const $q = useQuasar();
const configStore = useConfigStore();

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

// Run on startup
onBeforeMount(() => {
  $q.dark.set(configStore.isDarkMode);
});
</script>
