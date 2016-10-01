'use strict'

class Home extends React.Component {
    render() {
        return (
            <div>
                好的是 nizh de
            </div>
        );
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Home)