import React from 'react';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id} id={id} name={name}></li>
      ))}
    </ul>
  );
};

export default ContactsList;