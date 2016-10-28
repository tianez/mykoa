'use strict'

import Tabbar from '../Weui/Tabbar'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            React.createElement('div', {},
                React.createElement(Tabbar)
            )
        )
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Profile)