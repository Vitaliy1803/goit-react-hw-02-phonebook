import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name } = this.state;

    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }
    const newContact = { id: nanoid(), name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
            {this.state.contacts.map(contact => (
                <li key={contact.id} id={contact.id} name={contact.name}>{contact.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}
