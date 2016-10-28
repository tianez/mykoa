'use strict'

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            message: []
        }
        this.autoplayTimer = null
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.message !== '') { 
            let message = this.state.message
            message.push(nextProps.message)
            this.setState({ message: message })
            this.setInterval()
        }
    }
    setInterval() {
        if (this.autoplayTimer != null) {
            return
        }
        this.autoplayTimer = setInterval(function() {
            let message = this.state.message
            message.shift()
            this.setState({ message: message })
            if (message.length == 0) {
                clearInterval(this.autoplayTimer);
                this.autoplayTimer = null
            }
        }.bind(this), 3000)
    }
    render() {
        let message = this.state.message
        let list = message.map(function(d, index) {
            return React.createElement('div', {
                key: index,
                className: ''
            }, d.msg)
        })
        return (
            message.length > 0 ? React.createElement('div', {
                    id: 'message',
                    className: 'message pure-u-1'
                },
                list
            ) : null
        )
    }
}

module.exports = connect(
    state => ({
        message: state.message 
    })
)(Message)