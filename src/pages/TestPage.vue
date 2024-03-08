<template>
  <q-page padding>
    <h5>Test page</h5>

    <q-list>
      <q-item v-for="(item, index) in contacts" :key="index">
        <q-item-section>
          <strong>{{ item.id }}</strong>
          {{ item.firstName }} {{ item.lastName }}
        </q-item-section>
        <q-item-section side> {{ item.phone }}</q-item-section>
        <q-item-section side>
          <q-btn @click="deleteContact(item)">Delete</q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
};
type Contacts = Contact[];

const contacts: Ref<Contacts> = ref([
  {
    id: 1,
    firstName: 'a',
    lastName: 'b',
    phone: '100',
  },
  {
    id: 2,
    firstName: 'a',
    lastName: 'b',
    phone: '100',
  },
  {
    id: 3,
    firstName: 'a',
    lastName: 'b',
    phone: '100',
  },
  {
    id: 4,
    firstName: 'a',
    lastName: 'b',
    phone: '100',
  },
]);

function deleteContact(contactForDelete: Contact) {
  contacts.value = contacts.value.filter(function (item) {
    if (item.id === contactForDelete.id) {
      return false;
    } else {
      return true;
    }
  });
}
</script>
