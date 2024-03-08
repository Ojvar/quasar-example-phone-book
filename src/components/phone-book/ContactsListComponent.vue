<template>
  <q-list>
    <q-item v-for="(item, index) in contactStore.list" :key="item.id">
      <q-item-section>
        <span>#{{ index }}</span>
        {{ item.firstName }} {{ item.lastName }}
      </q-item-section>
      <q-item-section side>
        {{ item.phone }}
      </q-item-section>
      <q-item-section side>
        <q-btn
          color="negative"
          icon="delete"
          @click="deleteContact(item)"
        ></q-btn>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { Contact } from 'src/models';
import { useContactStore } from 'src/stores/contact';

// Store
const contactStore = useContactStore();

// Functions
function deleteContact(item: Contact) {
  contactStore.removeContact(item);
}
</script>
