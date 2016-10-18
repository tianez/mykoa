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
            value: range
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, range._d)
        }
    },
    render: function () {
        const format = 'dddd, D MMMM YYYY';
        return (
            React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                React.createElement('input', {
                    className: 'form-input',
                    readOnly: true,
                    value: this.state.value.format(format).toString()
                }),
                React.createElement(Calendar, {
                    firstDayOfWeek: 1,
                    date: function () {
                        now => {
                            return now.add(-4, 'days')
                        }
                    },
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