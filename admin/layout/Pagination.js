'use strict'

const {
    Link
} = ReactRouter;

class L extends React.Component {
    constructor() {
        super()
    }
    render() {
        let p
        let page = this.props.page
        if (page == this.props.current_page) {
            p = React.createElement('span', {
                className: 'pure-button active',
            }, page)
        } else {
            p = React.createElement(Link, {
                className: 'pure-button',
                to: this.props.url,
                query: {
                    page: page,
                    state: this.props.query.state
                }
            }, page)
        }
        return (
            React.createElement("li", {
                key: page,
            }, p)
        )
    }
}

class Pagination extends React.Component {
    constructor() {
        super()
    }
    render() {
        let i = 1
        let prev = 4
        let total = this.props.page.total || 0
        let last_page = this.props.page.last_page || 0
        let current_page = this.props.page.current_page || ''
        let items = []
        if (prev > last_page + 1) {
            prev = last_page + 1
        }
        for (i; i < prev; i++) {
            let p = React.createElement(L, {
                url: this.props.url,
                page: i,
                key: i,
                query: this.props.query,
                current_page: current_page
            })
            items.push(p)
        }
        let j = current_page - 1
        let c = current_page + 2
        if (c > last_page + 1) {
            c = last_page + 1
        }
        if (j > i && j > prev - 1) {
            let p = React.createElement("li", {},
                React.createElement('span', {
                    className: 'pure-button'
                }, '...')
            )
            items.push(p)
            for (j; j < c; j++) {
                let p = React.createElement(L, {
                    url: this.props.url,
                    page: j,
                    key: j,
                    query: this.props.query,
                    current_page: current_page
                })
                items.push(p)
            }
        } else {
            j = i
            for (j; j < c; j++) {
                let p = React.createElement(L, {
                    url: this.props.url,
                    page: j,
                    key: j,
                    query: this.props.query,
                    current_page: current_page
                })
                items.push(p)
            }
        }
        let k = last_page - prev + 2
        if (k > j) {
            let p = React.createElement("li", {},
                React.createElement('span', {
                    className: 'pure-button'
                }, '...')
            )
            items.push(p)

        } else {
            k = j
        }
        for (k; k < last_page + 1; k++) {
            let p = React.createElement(L, {
                url: this.props.url,
                page: k,
                key: k,
                query: this.props.query,
                current_page: current_page
            })
            items.push(p)
        }
        return (
            React.createElement("nav", {
                className: 'pure-menu pure-menu-open pure-menu-horizontal'
            },
                React.createElement("ul", {
                    className: "pure-paginator"
                },
                    React.createElement("li", {},
                        React.createElement("span", {
                            className: 'pure-button',
                            "aria-hidden": "true"
                        }, '共查询到' + total + '条数据')
                    ),
                    items,
                    React.createElement("li", {},
                        React.createElement("span", {
                            className: 'pure-button totle',
                        }, '共' + last_page + '页')
                    )
                )
            )
        )
    }
}

module.exports = connect(
    state => ({
        page: state.pagedata.pages,
        query: state.routing.locationBeforeTransitions.query,
        url: state.routing.locationBeforeTransitions.pathname,
    })
)(Pagination)