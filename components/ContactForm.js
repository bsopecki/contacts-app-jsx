var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return ( <
            form className = 'contactForm' >
            <
            input type = 'text'
            placeholder = 'Imię'
            value = {
                this.props.contact.firstName
            }
            className = 'form-control' / >
            <
            input type = 'text'
            placeholder = 'Nazwisko'
            value = {
                this.props.contact.lastName
            }
            className = 'form-control' / >
            <
            input type = 'email'
            placeholder = 'E-mail'
            value = {
                this.props.contact.email
            }
            className = 'form-control' / >

            <
            button className = 'btn'
            type = 'submit' > Dodaj kontakt < /button>  < /
            form >
        )
    },
})