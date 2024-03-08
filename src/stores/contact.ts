import { defineStore } from 'pinia';

export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
};
export type Contacts = Contact[];
export type ContactStore = {
  contacts: Contacts;
};

export const useContactStore = defineStore('contact', {
  persist: true,

  state: (): ContactStore => ({
    contacts: [],
  }),

  // state: function (): ContactStore {
  //   return {
  //     contacts: []
  //   }
  // },

  getters: {
    list(): Contacts {
      return this.contacts;
    },

    contactsCount(): number {
      return this.contacts.length;
    },

    contactsCountStr(): string {
      if (this.contacts.length === 0) {
        return 'No Contact';
      }
      return 'Contacts Count : ' + this.contacts.length.toString();
    },
  },

  actions: {
    addContact(firstName: string, lastName: string, phone: string) {
      const foundItem = this.contacts.find((item) => item.phone === phone);
      // if (foundItem === undefined) {
      if (!foundItem) {
        this.contacts.push({
          id: +new Date(),
          firstName,
          lastName,
          phone,
        });
      }
    },

    removeContact(contact: Contact) {
      // this.contacts = this.contacts.filter(function (item) {
      //   if (item.id === contact.id) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // });

      // this.contacts = this.contacts.filter((item) => {
      //   return item.id !== contact.id;
      // });

      this.contacts = this.contacts.filter((item) => item.id !== contact.id);
    },

    clearContacts() {
      this.contacts = [];
    },
  },
});
