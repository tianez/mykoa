'use strict'
const {
    Link
} = ReactRouter;

const request = require('superagent')
const Pagination = require('../layout/Pagination')

const Pages = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            del_id: [],
            del_all: [],
            isdel_all: false,
            thead: [],
            title: ''
        }
    },

    getDefaultProps: function () {},

    componentDidMount: function () {
        this._reQuest(this.props)
    },
    componentWillReceiveProps: function (nextProps) {
        let page = nextProps.location.query.page || 1
        let page2 = this.props.location.query.page || 1
        if (this.props.params.pages != nextProps.params.pages || page != page2 || nextProps.location.search !== this.state.search) {
            this._reQuest(nextProps)
        }
    },
    _reQuest: function (props) {
        console.log(props.location);
        getfetch(props.params.pages, props.location.query)
            .then(function (res) {
                Rd.config('title', res.title)
                Rd.pagedata(res)
                let items = []
                this.setState({
                    items: items.concat(res.pages.data),
                    del_all: this._set_del_all(res.info),
                    thead: res.thead,
                    title: res.title,
                });
            }.bind(this))
    },
    _set_del_all: function (items) {
        let del_all = []
        let x
        for (x in items) {
            del_all.push(items[x]['id'])
        }
        return del_all
    },
    _del: function (e) {
        console.log(e.target)
        console.log(e.target.value)
    },
    _thead: function () {
        let isdel_all = this.state.isdel_all
        let checked
        if (isdel_all) {
            checked = 'checked'
        } else {
            checked = ''
        }
        let item = []
        let p
        let thead = this.state.thead
        for (let i in thead) {
            p = React.createElement("th", {
                key: i
            }, thead[i])
            item.push(p)
        }
        return (
            React.createElement("thead", {},
                React.createElement("tr", {},
                    React.createElement("th", {
                            className: "table-checkbox sorting_disabled"
                        },
                        React.createElement("div", {
                                className: "checker"
                            },
                            React.createElement("span", {
                                    className: checked
                                },
                                React.createElement("input", {
                                    className: "group-checkable",
                                    type: "checkbox",
                                    onClick: this._isdel_all,
                                })
                            )
                        )
                    ),
                    item,
                    React.createElement("th", {}, '操作')
                )
            )
        )
    },
    _list: function (data) {
        let list = []
        let p
        let thead = this.state.thead
        for (let i in thead) {
            p = React.createElement("td", {
                key: i + data.id
            }, data[i])
            list.push(p)
        }
        return list
    },
    _isdel_all: function () {
        let isdel_all = this.state.isdel_all
        let del_all = this.state.del_all
        let del_id = []
        if (isdel_all) {
            isdel_all = false
        } else {
            isdel_all = true
            del_id = del_id.concat(del_all)
        }
        this.setState({
            isdel_all: isdel_all,
            del_id: del_id
        });
    },
    _click: function (e) {
        let del_id = this.state.del_id
        let k = parseInt(e.target.value)
        let index = del_id.indexOf(k)
        if (index == -1) {
            del_id.push(k)
        } else {
            del_id.splice(index, 1)
        }
        this.setState({
            del_id: del_id
        })
    },
    _onDel: function (e) {
        e.preventDefault()
        let id = e.target.id
        id = id.split("_")
        id = id[1]
        let url = this.props.params.pages + '/delete/' + id
        getfetch(url).then(function (res) {
            this.componentDidMount()
            Rd.message(res.msg)
        }.bind(this))
    },
    qq: function () {
        let query = this.props.location.query
        console.log(query);
        return query
    },
    render: function () {
        let url = this.props.params.pages
        let list = this.state.items.map(function (data) {
            let curl = '/api/' + url + '/' + data.id
            let arr = this.state.del_id
            let k = data.id
            let checked
            if (arr.indexOf(k) != -1) {
                checked = 'checked'
            } else {
                checked = ''
            }
            let role
            if (url == 'roles') {
                role = React.createElement(Link, {
                    activeClassName: "active",
                    to: '/permissions/' + data.id,
                    style: {
                        marginLeft: '20px'
                    }
                }, "用户组权限")
            }
            return (
                React.createElement("tr", {
                        key: data.id
                    },
                    React.createElement("td", {},
                        React.createElement("div", {
                                className: "checker " + checked
                            },
                            React.createElement("input", {
                                className: "checkboxes",
                                value: data.id,
                                name: 'del_id[]',
                                type: "checkbox",
                                onClick: this._click,
                            })
                        )
                    ),
                    this._list(data),
                    React.createElement("td", {},
                        React.createElement(Link, {
                            activeClassName: "active",
                            to: curl
                        }, "编辑"),
                        ' | ',
                        React.createElement('a', {
                            activeClassName: "active",
                            id: 'del_' + data.id,
                            onClick: this._onDel
                        }, "删除"),
                        role
                    )
                )
            )
        }.bind(this))
        return (
            React.createElement("section", {
                    className: "pure-u-1"
                },
                React.createElement("h3", {
                        className: "page-title"
                    },
                    this.state.title
                ),
                React.createElement('div', {
                        className: 'pure-u-1 filter'
                    },
                    React.createElement('a', {
                            className: 'pure-menu-link'
                        },
                        '筛选'
                    ),
                    React.createElement(Link, {
                            to: '/api/' + this.props.params.pages,
                            className: 'pure-menu-link',
                            activeClassName: 'active'
                        },
                        '全部'
                    ),
                    React.createElement(Link, {
                            to: '/api/' + this.props.params.pages,
                            className: 'pure-menu-link',
                            activeClassName: 'active',
                            query: {
                                state: 0
                            }
                        },
                        '正常'
                    ),
                    React.createElement(Link, {
                            to: '/api/' + this.props.params.pages,
                            className: 'pure-menu-link',
                            activeClassName: 'active',
                            query: {
                                state: 1
                            }
                        },
                        '已删除'
                    ),
                    React.createElement(Link, {
                            to: '/api/' + this.props.params.pages + '/add',
                            className: 'pure-menu-link',
                            activeClassName: 'active',
                        },
                        '新增'
                    )
                ),
                React.createElement("table", {
                        className: "pure-table pure-table-bordered",
                        style: {
                            width: '100%'
                        }
                    },
                    this._thead(),
                    React.createElement("tbody", null,
                        list
                    )
                ),
                React.createElement(Pagination)
            )
        )
    }
})

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Pages)