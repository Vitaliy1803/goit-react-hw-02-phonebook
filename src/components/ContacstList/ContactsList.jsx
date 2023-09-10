import PropTypes from 'prop-types';
import { Button, List, Item } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
   
      <List>
        {contacts.map(contact => (
          <Item key={contact.id} id={contact.id} name={contact.name}>
            {contact.name}: {contact.number}
            <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </Item>
        ))}
        
      </List>
      
    
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
