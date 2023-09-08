import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.props.onSubmit(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
