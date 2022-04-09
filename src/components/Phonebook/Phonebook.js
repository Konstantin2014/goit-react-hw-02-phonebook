import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import {
  TitleContactFotm,
  TitleContact,
} from '../ContactForm/ContactForm.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  addContact = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  onFilterHandleChange = filter => {
    this.setState({ filter });
  };

  contactDelete = contactId => {
    this.setState(prevstate => ({
      contacts: prevstate.contact.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  render() {
    const { filter } = this.state;
    const visivleContact = this.getFilteredContacts();
    return (
      <div>
        <TitleContactFotm>Phonebook</TitleContactFotm>
        <ContactForm
          onSubmit={this.formSubmitHendler}
          addContact={this.addContact}
        />

        <TitleContact>Contacts</TitleContact>
        <Filter
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />
        <ContactList
          contact={visivleContact}
          onContactDelete={this.contactDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
