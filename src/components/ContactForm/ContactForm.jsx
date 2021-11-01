import { Component } from 'react';

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
        this.props.onSubmit(this.state)
        this.setState({name:'', number:''})
     };
    render() {   
         const { name, number } = this.state;
        return(
        <>
   <form onSubmit= {this.onFormSubmit}>
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

            </>
        )
    }
}

export default ContactForm;