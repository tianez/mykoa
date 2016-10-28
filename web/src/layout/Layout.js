'use strict'

const {
    Header,
    Sidebar,
    Footer,
    Message
} = require('./index')
var Layout = React.createClass({
    render: function () {
        return (
            React.createElement('div', {
                    id: 'warper',
                },
                React.createElement('section', {
                        id: 'main'
                    },
                    React.createElement(Header),
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
})
module.exports = Layout