'use strict';

class Logout extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        getfetch('admin/logout')
            .then(function (res) {
                Rd.user('')
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
