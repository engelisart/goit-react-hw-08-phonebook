export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectorContacts = state => state.contacts.contacts.items;
export const selectorFilter = state => state.contacts.filter;
