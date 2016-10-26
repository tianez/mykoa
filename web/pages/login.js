'use strict'

import Input from '../Weui/input'
import Button from '../Weui/Button'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    _onChange(name, value) {
        let state = this.state
        state[name] = value
        this.setState(state)
    }

    _onSubmit(e) {
            e.preventDefault()
            postfetch(curl + 'api', this.state)
                .then(function (res) {
                    if (res) {
                        Rd.config('token', res.token)
                        localStorage.token = res.token
                        this.props.history.pushState(null, '/')
                    }
                }.bind(this))
        }
    render() {
        return (
            React.createElement('form', {
                    onSubmit: this._onSubmit.bind(this)
                },
                React.createElement(Input, {
                    onChange: this._onChange.bind(this),
                    name: 'username',
                    title: '用户名',
                    value: this.state.username
                }),
                React.createElement(Input, {
                    onChange: this._onChange.bind(this),
                    name: 'password',
                    title: '密码',
                    type: 'password',
                    value: this.state.password
                }),
                React.createElement(Button, {
                    type: 'submit '
                })
            )
        )
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Login)