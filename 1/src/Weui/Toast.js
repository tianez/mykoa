/**
 * Created by jf on 15/10/27.
 */

class Toast extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('div', {
                    style: {
                        display: this.props.message ? 'block' : 'none'
                    }
                },
                React.createElement('div', {
                    className: 'weui_mask_transparent'
                }),
                React.createElement('div', {
                        className: 'weui_toast'
                    },
                    React.createElement('i', {
                        className: 'weui_icon_toast'
                    }),
                    React.createElement('p', {
                        className: 'weui_toast_content'
                    }, this.props.msg))
            )
        )
    }
}

Toast.defaultProps = {
    msg: 'OK！',
}

module.exports = connect(
    state => ({
        message: state.toast.message
    })
)(Toast)