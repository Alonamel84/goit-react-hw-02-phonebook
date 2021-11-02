import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactItem from './components/ContactItem';
import './App.css';
import FilterName from './components/FilterName';
import ContactList from './components/ContactsList/ContactsList';
import s from './components/data/data.module.css';
class App extends Component {
  state = {
    contacts: [],
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
  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const filterContacts = this.filter();
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} contact={this.state.contacts}></ContactForm>
        <h2 className={s.title}>Contacts</h2>
        <FilterName value={this.state.filter} onChange={this.filterName}></FilterName>
        <ContactList>
          {filterContacts.map(item => (
            <ContactItem
              key={item.id}
              name={item.name}
              number={item.number}
              onDelete={this.onDelete}
              id={item.id}
            ></ContactItem>
          ))}
        </ContactList>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contact: PropTypes.array,
  onSubmit: PropTypes.func,
};
FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};

export default App;
