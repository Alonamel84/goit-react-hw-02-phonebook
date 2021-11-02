import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css'

class ContactForm extends Component {
    state = {
        number: '',
        name: ''
    };
     handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };
    onFormSubmit = e => {
        e.preventDefault();
        this.setState({name:'', number:''})
        if (this.props.contact.some(item => item.name.toLowerCase() === this.state.name.toLowerCase()))
            return alert(`${this.state.name} is already in contacts`);
        this.props.onSubmit(this.state)
    };
   
    render() {   
         const { name, number } = this.state;
        return(
        <>
         <form className={ s.form} onSubmit= {this.onFormSubmit}>
    <label className={ s.label}>
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
          <label className={ s.label}>
            Number
            <input
              type="tel"
            name="number"
            placeholder="Enter phone number"
              pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}?\)?[-.\s]?\d
            {(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
              title="Номер телефона должен состоять цифр и
            может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

                    <button className={ s.addButton} type="submit">Add contact</button>
        </form>

            </>
        )
    }
};
ContactForm.propTypes = {
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  pattern:PropTypes.string,
    title: PropTypes.string,
  type:PropTypes.string,
    placeholder:PropTypes.string,
  value:PropTypes.string,
  onChange:PropTypes.func,

};

export default ContactForm;