'use strict'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {

    }

    render() {
        return (
            React.createElement('div', {}, 'sssssss')
        )
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Home)