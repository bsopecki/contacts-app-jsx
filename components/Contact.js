var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (<div className={'contactItem'}>
            <img className={'contactImage'} src={'https://img.freepik.com/darmowe-ikony/u%C5%BCytkownik-wype%C5%82nia-osoba-kszta%C5%82t_318-74922.jpg?size=338c&ext=jpg'} />
            <p className={'contactLabel'}>
                Imię: {this.props.item.firstName}
            </p>
            <p className={'contactLabel'}>
                Nazwisko: {this.props.item.lastName}
            </p>
            <a href={'mailto:' + this.props.item.email}>
                {this.props.item.email}
            </a>
        </div>)
    }
})