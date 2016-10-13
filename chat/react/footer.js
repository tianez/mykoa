'use strict'

class Footer extends React.Component {
    constructor() {
        super();
    }
    _onClick(e) {
        e.preventDefault()
        Rd.config('login', true)
    }
    _onSubmit() {
        if (this.refs.input.value.trim() == '') {
            alert('请输入内容')
            return
        }
        Rd.config('show', 1)
        socket.emit('chat', {
            content: this.refs.input.value,
            username: localStorage.username,
            user_id: localStorage.userid,
            head_img: localStorage.head_img
        });
        this.refs.input.value = ''
        this.props.scrollTop()
    }
    render() {
        return (
            React.createElement('div', {
                id: 'footer'
            },
                React.createElement('div', {
                    id: 'formd',
                    style: {
                        display: this.props.islogin ? 'none' : 'block'
                    },
                    onClick: this._onClick.bind(this)
                }),
                React.createElement('div', {
                    id: 'form'
                },
                    React.createElement('div', {
                        className: 'f1'
                    },
                        React.createElement('input', {
                            ref: 'input',
                            type: 'text',
                            className: 'input',
                            placeholder: '我要发言',
                        })
                    ),
                    React.createElement('div', {
                        className: 'f2'
                    },
                        React.createElement('input', {
                            type: 'button',
                            className: 'submit',
                            value: '发送',
                            onClick: this._onSubmit.bind(this)
                        })
                    )
                )
            )
        )
    }
}

export default Footer;