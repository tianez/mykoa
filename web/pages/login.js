'use strict'

import Input from '../Weui/input'
import Button from '../Weui/Button'

const {
    browserHistory
} = ReactRouter

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

    // _onSubmit(e) {
    //     e.preventDefault()
    //     console.log(this.state);

    //     postfetch('http://' + document.domain + ':3000/api', this.state)
    //         .then(function (res) {
    //             Rd.config('token', res.token)
    //             localStorage.token = res.token
    //             console.log('111111111111');
    //             // this.context.router.pushState(null, '/')
    //             // this.props.history.pushState(null, '/')
    //             // this.context.router.push('/')
    //             browserHistory.push('#/')

    //         }.bind(this))
    // }
    _onSubmit(e) {
        e.preventDefault();
        request
            .post('http://' + document.domain + ':3000/api')
            .send(this.state)
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (err) throw err
                let data = JSON.parse(res.text)
                console.log(data);
                Rd.config('token', data.token)
                localStorage.token = data.token
                this.props.history.pushState(null, '/')
                    // this.context.router.push('/')
                    // this.context.history.push('/')
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