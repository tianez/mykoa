'use strict'
const {
    Link
} = ReactRouter;

const Apicloud = require('../components/utils/Apicloud')
class A extends React.Component {
    render() {
        return (
            React.createElement('li', {
                    className: 'pure-menu-item'
                },
                React.createElement(Link, {
                        className: 'pure-menu-link',
                        to: '/' + this.props.to,
                        activeClassName: 'active'
                    },
                    React.createElement("i", {
                        className: this.props.icon || 'fa fa-home'
                    }),
                    React.createElement("span", {}, this.props.title)
                ),
                this.props.children
            )
        )
    }
}

class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        let filter = {
            where: {
                state: 1
            },
            order: ['order DESC', 'createdAt DESC'],
            limit: 20
        }
        getfetch('admin/meun')
            .then(function (res) {
                this.setState({
                    menu: res
                })
            }.bind(this))
    }
    render() {
        let menus
        if (this.state.menu) {
            menus = this.state.menu.map(function (d, index) {
                return React.createElement(A, {
                    key: index,
                    to: d.link,
                    title: d.title,
                    icon: d.icon
                })
            })
        }
        return (
            React.createElement('aside', {
                    id: 'sidebar',
                    className: 'pure-u-1 pure-menu sidebar'
                },
                React.createElement('ul', {
                        className: 'pure-menu-list'
                    },
                    menus
                )
            )
        )
    }
}
module.exports = Sidebar