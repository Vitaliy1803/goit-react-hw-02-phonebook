import React, { Component } from 'react';
import { Form, Input, Button, Container } from './ContactForm.styled';

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
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="number">Number</label>
          <Input
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    );
  }
}
