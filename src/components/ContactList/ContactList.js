import { ConlactList, ConlactItem } from './ContactList.styled.js';

export const ContactList = ({ contact, onContactDelete }) => {
  <ul>
    {contact.map(({ name, number, id }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button
          type="button"
          onClick={() => {
            onContactDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>;
};
