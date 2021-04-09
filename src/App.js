import { Component } from 'react';

import './App.css';

import ContactForm from './components/ContactForm/ContactForm.container';
import Contacts from './components/Contacts/Contact.container';
import Filter from './components/Filter/Filter.container';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <Contacts />
      </div>
    );
  }
}

export default App;
