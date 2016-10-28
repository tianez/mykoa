'use strict'
const classNames = require('classNames')
const {
    Link
} = ReactRouter
class Tabbar extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {
            className,
            onClick
        } = this.props;
        const cls = classNames({
            weui_btn: true,
            [className]: className
        })
        return (
            React.createElement('div', {
                    className: 'weui_tab'
                },
                React.createElement('div', {
                        className: 'weui_tabbar'
                    },
                    React.createElement(Link, {
                            className: 'weui_tabbar_item weui_bar_item_on',
                            to: '/'
                        },
                        React.createElement('div', {
                            className: 'fa fa-home'
                        }),
                        React.createElement('p', {
                            className: 'weui_tabbar_label'
                        }, '首页')
                    ),
                    React.createElement(Link, {
                            className: 'weui_tabbar_item',
                            to: '/'
                        },
                        React.createElement('div', {
                            className: 'fa fa-user'
                        }),
                        React.createElement('p', {
                            className: 'weui_tabbar_label'
                        }, '个人中心')
                    )
                )
            )
        )
    }
}
Tabbar.defaultProps = {
    title: '保存'
}
module.exports = Tabbar