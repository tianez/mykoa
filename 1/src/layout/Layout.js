'use strict'

const {
    Header,
    Sidebar,
    Footer,
    Message
} = require('./index')
class Layout extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('div', {
                id: 'warper',
                className: 'pure-g',
            },
                React.createElement(Header),
                React.createElement('section', {
                    id: 'main'
                },
                    React.createElement(Sidebar),
                    React.createElement('section', {
                        id: 'content',
                        className: 'pure-u-1'
                    }, this.props.children)
                ),
                React.createElement(Footer),
                React.createElement(Message)
            )
        )
    }
}
module.exports = Layout