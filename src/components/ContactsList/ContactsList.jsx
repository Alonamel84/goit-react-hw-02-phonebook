import s from '../ContactsList/ContactList.module.css'
const ContactList = ({ children }) => {
    return (
       
        <ul className={ s.contactList}>{ children}</ul>
    )
 }
export default ContactList;