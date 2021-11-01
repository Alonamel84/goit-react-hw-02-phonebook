import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactItem from './components/ContactItem';
import './App.css';
import FilterName from './components/FilterName';
import ContactList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    const shortid = require('shortid');
    const contact = { id: shortid.generate(), ...data };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  filterName = e => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };
  filter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };
  render() {
    const filterContacts = this.filter();
    return (
      <div>
        <h1>Phonebok</h1>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        <h2>Contacts</h2>
        <FilterName value={this.state.filter} onChange={this.filterName}></FilterName>
        <ContactList>
          {filterContacts.map(item => (
            <ContactItem key={item.id} name={item.name} number={item.number}></ContactItem>
          ))}
        </ContactList>
      </div>
    );
  }
}

export default App;
