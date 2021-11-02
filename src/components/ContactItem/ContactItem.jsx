import s from '../ContactItem/ContactItem.module.css'
const ContactItem = ({ name,  number, onDelete,id }) => {
    
    return (
        <>
            <li className={s.contactItem} id={ id}>{name} {number}
            <button className={ s.delButton} type='button' onClick={() => { onDelete(id) }}>Delete</button>
           </li>
            </>
    )
}
export default ContactItem;