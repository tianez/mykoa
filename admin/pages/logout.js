'use strict';

class Logout extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        getfetch('api/removetoken')
            .then(function (res) {
                localStorage.removeItem('token')
                this.props.history.pushState(null, 'login')
            }.bind(this))
    }
    render() {
        return (
            null
        )
    }
}

module.exports = Logout