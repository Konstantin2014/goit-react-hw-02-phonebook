import {
  ConlactList,
  ConlactItem,
  Button,
  NameNumber,
} from './ContactList.styled.js';

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
