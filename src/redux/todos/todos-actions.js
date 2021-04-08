//Redux Tookit
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('todos/fetchContactsRequest');
const fetchContactsSuccess = createAction('todos/fetchContactsSuccess');
const fetchContactsError = createAction('todos/fetchContactsError');

const addContactsRequest = createAction('todos/addContactsRequest');
const addContactsSuccess = createAction('todos/addContactsSuccess');
const addContactsError = createAction('todos/addContactsError');

const deleteContactsRequest = createAction('todos/deleteContactsRequest');
const deleteContactsSuccess = createAction('todos/deleteContactsSuccess');
const deleteContactsError = createAction('todos/deleteContactsError');

const filterContacts = createAction('todos/changeFilter');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
};
