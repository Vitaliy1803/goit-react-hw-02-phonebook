import React, { Component } from 'react';
import { ContactForm } from './ContactsForm/ContactForm';
import Filter from './Filter';
import ContacstList from './ContacstList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  

  findContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContacstList contacts={filteredContacts} />
      </div>
    );
  }
}

