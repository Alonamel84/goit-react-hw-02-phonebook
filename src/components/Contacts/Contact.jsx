const Contact = ({ name , id, number}) => {
    console.log(name, number)
    return (
        <li>{name} { number}</li>
    )
}
export default Contact;