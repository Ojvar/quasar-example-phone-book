<template>
  <q-page
    class="bg-light-green window-height window-width row justify-center items-center"
  >
    <form class="column" @submit.prevent="validateUser">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">دفترچه تلفن</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="username"
                type="text"
                label="نام کاربری"
                ref="usernameRef"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="گذرواژه"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              type="submit"
              unelevated
              color="light-green-7"
              size="lg"
              class="full-width"
              label="ورود"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">حساب کاربری خود را بسازید</p>
          </q-card-section>
        </q-card>
      </div>
    </form>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

// Store
const router = useRouter();
const auth = useAuthStore();

// Refernces
const usernameRef: Ref<HTMLInputElement | undefined> = ref();

// State
const username = ref('');
const password = ref('');

// Functions
function redirectToHomePage() {
  // Redirect
  router.push('/');
}

function validateUser() {
  if (username.value === 'admin' && password.value === '12345') {
    // Update auth-store
    auth.setLoggedIn(username.value);
    redirectToHomePage();
  } else {
    alert('Invalid User/Password');

    // if (usernameRef.value !== undefined) {
    //   usernameRef.value.focus();
    // }
    usernameRef.value?.focus();
    usernameRef.value?.select();
  }
  ``;
}

function checkLoginState() {
  if (auth.isLoggedIn === true) {
    redirectToHomePage();
  }
}

// Hooks
onBeforeMount(() => {
  checkLoginState();
});
</script>

<style>
.q-card {
  width: 360px;
}
</style>
