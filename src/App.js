import { Component } from 'react';
import './App.css';
import Contact from './components/Contacts/Contact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  // addContact = e => {
  //   // console.log(e);
  //   const Contact = { name: this.name, number: this.number };
  // };

  handleSubmit = e => {
    e.preventDefault();
    const shortid = require('shortid');
    const contact = { id: shortid.generate(), name: this.state.name, number: this.state.number };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <p>Phonebok</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Tel
            <input
              type="tel"
              name="number"
              pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}?\)?[-.\s]?\d
            {(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
              title="Номер телефона должен состоять цифр и
            может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        {/* <form onSubmit={this.handleSubmit}></form> */}
        <ul>
          Contacts
          <Contact name={name} />
        </ul>
      </>
    );
  }
}

export default App;
