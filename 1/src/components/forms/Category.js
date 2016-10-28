'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

const Checkbox = React.createClass({
    getDefaultProps: function () {
        return {
            title: '多选框',
            type: 'checkbox',
            value: [2],
            f_options: [{
                title: '选项1',
                value: 0
            }, {
                    title: '选项2',
                    value: 1
                }, {
                    title: '选项3',
                    value: 's2'
                }],
            name: 'state',
            placeholder: '',
            help: '',
            disabled: '',
            required: 'required'
        }
    },
    getInitialState: function () {
        let options = []
        if (!this.props.f_ext) {
            options = this.props.f_options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        let value = this.props.value
        if (value) {
            value = JSON.parse(value)
        } else {
            value = []
        }
        return {
            value: value,
            help: this.props.help,
            option: options
        }
    },
    componentDidMount: function () {
        console.log(this.props.f_ext);
        if (this.props.f_ext) {
            request.get('admin/' + this.props.f_ext)
                .end(function (err, res) {
                    let data = JSON.parse(res.text)
                    this.setState({
                        option: data
                    })
                }.bind(this))
        }
    },
    _onChange: function (e) {
        let type = this.props.type
        let v = e.target.value
        if (!isNaN(v)) {
            v = parseInt(v)
        }
        let value = this.state.value
        let index = value.indexOf(v)
        if (index == -1) {
            value.push(v)
        } else {
            value.splice(index, 1)
        }
        this.setState({
            value: value
        })
        value = JSON.stringify(value)
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
            let typeClass = 'checker'
            return (
                React.createElement('label', {
                    key: index,
                    className: 'form-radio',
                    title: this.props.title,
                    help: this.state.help
                },
                    React.createElement('div', {
                        className: typeClass + checked
                    },
                        React.createElement('input', {
                            type: 'checkbox',
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
module.exports = Checkbox