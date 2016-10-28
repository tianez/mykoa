'use strict'
const classNames = require('classNames')
class Button extends React.Component {
    render() {
        const {
            className
        } = this.props;
        const cls = classNames({
            weui_btn: true,
            weui_btn_primary: true,
            [className]: className
        })
        return (
            React.createElement('div', {
                    className: 'weui_btn_area'
                },
                React.createElement('button', {
                    className: cls,
                    type: this.props.type
                }, this.props.title)
            )
        )
    }
}
Button.defaultProps = {
    title: '保存',
    type: 'Button'
}
module.exports = Button