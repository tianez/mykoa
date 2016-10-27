'use strict'

import Input from '../Weui/input'
import Button from '../Weui/Button'
import List from './list'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {

    }

    _onChange(name, value) {
        let state = this.state
        state[name] = value
        this.setState(state)
    }

    _onSubmit(e) {
        e.preventDefault()
        socket.emit('chat', this.state.chat);
        this.setState({
            chat:''
        })
    }

    render() {
        return (
            React.createElement('form', {
                onSubmit :this._onSubmit.bind(this)
            }, React.createElement(List),
                React.createElement(Input, {
                    onChange: this._onChange.bind(this),
                    name: 'chat',
                    title:'聊天内容',
                    value:this.state.chat
                }),
                React.createElement(Button,{type:'submit '})
            )
        )
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Home)