'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

var Radio = React.createClass({
    getDefaultProps: function () {
        return {
            title: '单选框',
            type: 'radio',
            value: [1],
            default: 0,
            options: [{
                title: '选项1',
                value: 0
            }, {
                title: '选项2',
                value: 1
            }],
            name: 'state',
            placeholder: '',
            disabled: '',
            required: 'required'
        }
    },
    getInitialState: function () {
        let options = []
        if (!this.props.ext) {
            options = this.props.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        let value = this.props.value
        if (value && typeof value == "string") {
            value = JSON.parse(value)
        }
        let v = []
        v.push(value[0])
        return {
            value: v,
            help: this.props.help,
            option: options,
        }
    },
    componentDidMount: function () {
        if (this.props.ext) {
            request.get('admin/' + this.props.ext)
                .end(function (err, res) {
                    let data = JSON.parse(res.text)
                    this.setState({
                        option: data
                    })
                }.bind(this))
        }
    },
    componentWillReceiveProps: function (nextProps) {
        let options = []
        if (!nextProps.ext) {
            options = nextProps.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        this.setState({
            value: nextProps.value,
            help: nextProps.help,
            option: options,
        })
    },
    _onChange: function (e) {
        let value = []
        let v = e.target.value
        if (!isNaN(v)) {
            v = parseInt(v)
        }
        value.push(v)
        console.log(value);

        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    },
    render: function () {
        let value = this.state.value
        let name = this.props.name
        let options = this.state.option.map(function (d, index) {
            let checked = ''
            if (value.indexOf(d.value) > -1) {
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