import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import {
  TitleContactFotm,
  TitleContact,
} from '../ContactForm/ContactForm.styled';
import { Filter } from 'components/Filter/Filter';
// import ContactList from 'components/ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <TitleContactFotm>Phonebook</TitleContactFotm>
        <ContactForm onSubmit={this.formSubmitHendler} />

        <TitleContact>Contacts</TitleContact>
        <Filter />
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default Phonebook;
