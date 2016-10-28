'use strict'
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
const Apicloud = require('../components/utils/Apicloud')

const {
    Header,
    Sidebar,
    Footer,
    Message
} = require('./index')
var Layout = React.createClass({
    componentDidMount: function () {
        let filter = {
            where: {
                state: 1
            },
            order: ['order DESC', 'createdAt DESC'],
            limit: 100
        }
        Apicloud.get('role', filter, function (err, res) {
            let roles = JSON.parse(res.text)
            Rd.config('roles', roles)
        })
    },
    render: function () {
        return (
            // React.createElement(ReactCSSTransitionGroup, {
            //         component: 'div',
            //         id: 'warper',
            //         className: 'pure-g',
            //         transitionName: 'switch',
            //         transitionEnterTimeout: 500,
            //         transitionLeaveTimeout: 500
            //     },
            React.createElement('div', {
                    id: 'warper',
                    className: 'pure-g',
                },
                // React.createElement('div', {
                //         className: 'switch',
                //         key: this.props.location.pathname
                //     },
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
})
module.exports = Layout