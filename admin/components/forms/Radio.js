'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

var Radio = React.createClass({
    getDefaultProps: function() {
        return {
            title: '单选框',
            type: 'radio',
            value: 2,
            default: 'sdsds',
            options: [{
                title: '选项1',
                value: 1
            }, {
                title: '选项2',
                value: 2
            }],
            name: 'state',
            placeholder: '',
            help: ' ',
            disabled: '',
            required: 'required'
        }
    },
    getInitialState: function() {
        let options = []
        if (!this.props.ext) {
            options = this.props.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        return {
            value: this.props.value,
            help: this.props.help,
            option: options,
        }
    },
    componentDidMount: function() {
        if (this.props.ext) {
            request.get('admin/' + this.props.ext)
                .end(function(err, res) {
                    let data = JSON.parse(res.text)
                    this.setState({
                        option: data
                    })
                }.bind(this))
        }
    },
    _onChange: function(e) {
        let value = e.target.value
        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    },
    render: function() {
        let value = this.state.value
        let name = this.props.name
        let options = this.state.option.map(function(d, index) {
            let checked = ''
            if (value == d.value) {
                checked = ' checked'
            }
            let typeClass = 'radio'
            return (
                React.createElement('label', {
                        key: index,
                        className: 'form-radio',
                    },
                    React.createElement('div', {
                            className: typeClass + checked
                        },
                        React.createElement('input', {
                            type: 'radio',
                            name: name,
                            value: d.value,
                            checked: checked,
                            onChange: this._onChange
                        })
                    ),
                    React.createElement('span', null, d.title)
                )
            )
        }.bind(this))
        return (
            this.state.option.length > 0 ? React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                options
            ) : null
        )
    }
})

module.exports = Radio