import PropTypes from 'prop-types';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id} name={contact.name}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
