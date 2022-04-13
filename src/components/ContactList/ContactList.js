import {
  ConlactList,
  ConlactItem,
  Button,
  NameNumber,
} from './ContactList.styled.js';
import PropTypes from 'prop-types';

export const ContactList = ({ contact, onContactDelete }) => (
  <ConlactList>
    {contact.map(({ name, number, id }) => (
      <ConlactItem key={id}>
        <NameNumber>{name} :</NameNumber>
        <NameNumber>{number}</NameNumber>
        <Button type="button" onClick={() => onContactDelete(id)}>
          Delete
        </Button>
      </ConlactItem>
    ))}
  </ConlactList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
