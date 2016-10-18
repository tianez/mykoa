'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')
const {
    Calendar,
    DateRange
} = require('react-date-range')
var Time = React.createClass({
    getDefaultProps: function () {
        return {
            type: 'text',
            value: ''
        }
    },
    getInitialState: function () {
        return {
            value: this.props.value,
            help: this.props.help
        }
    },
    _onChange: function (range) {
        console.log(range._d);
        this.setState({
            value: range._d
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, range._d)
        }
    },
    render: function () {
        return (
            React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                React.createElement('div', {
                    className: 'form-input'
                }, this.state.value),
                React.createElement(Calendar, {
                    onChange: this._onChange,
                    style: {
                        width: '281px'
                    }
                })
            )
        )
    }
})

module.exports = Time