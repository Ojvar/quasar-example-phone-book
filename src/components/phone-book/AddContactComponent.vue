<template>
  <q-form @submit="addNewContact">
    <q-input v-model="newContact.firstName" label="First name"></q-input>
    <q-input v-model="newContact.lastName" label="Last name"></q-input>
    <q-input v-model="newContact.phone" label="Phone number"></q-input>

    <q-btn type="submit" color="primary" icon="add">Add Contact</q-btn>
  </q-form>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useContactStore } from 'src/stores/contact';
import { Contact } from 'src/stores/contact';

// Store
const contactStore = useContactStore();

// State
const newContact: Ref<Contact> = ref({
  firstName: '',
  lastName: '',
  phone: '',
  id: 0,
});

// Functions
function addNewContact() {
  contactStore.addContact(
    newContact.value.firstName,
    newContact.value.lastName,
    newContact.value.phone
  );
}
</script>
