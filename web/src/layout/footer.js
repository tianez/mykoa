'use strict'
const classNames = require('classNames')
const {
    Link
} = ReactRouter

const Footer = React.createClass({
    getInitialState: function () {
        return {
            info: {}
        }
    },
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
           <div className="footer">
    <div className="meun">
        <a href="/">
            <div className="fa fa-home"></div>
            <div className="t">首页</div>
        </a>
        <a href="#/profile">
            <div className="fa fa-user"></div>
            <div className="t">个人中心</div>
        </a>
    </div>
</div>
        )
    }
})

module.exports = Footer