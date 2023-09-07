import React, { Component } from 'react';
import { ContactForm } from './Form/Form';
//import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };


  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm/>
      </div>
    );
  }
}
