<template>
  <div class="row full-width">
    <HeaderComponent class="col-12"></HeaderComponent>
    <AddContactComponent class="col-4"></AddContactComponent>
    <ContactsListComponent class="col-8"></ContactsListComponent>
  </div>
</template>

<script lang="ts" setup>
import AddContactComponent from './AddContactComponent.vue';
import ContactsListComponent from './ContactsListComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>
