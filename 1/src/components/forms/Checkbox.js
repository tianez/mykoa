'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        let options = []
        if (!props.ext) {
            options = props.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        let value = props.value
        if (value && typeof value == "string") {
            value = JSON.parse(value)
        }
        this.state = {
            value: value,
            help: props.help,
            option: options
        }
    }
    componentDidMount() {
        if (this.props.ext) {
            getfetch("api/" + this.props.ext)
                .then(function(res) {
                    console.log(res);
                    this.setState({
                        option: res
                    })
                }.bind(this))
        }
    }
    _onChange(e) {
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
        if (this.props.onChange) {
            if (this.props.value && typeof this.props.value == "string") {
                value = JSON.stringify(value)
            }
            this.props.onChange(this.props.name, value)
        }
    }
    render() {
        let value = this.state.value
        let name = this.props.name
        let options = this.state.option.map(function(d, index) {
            let checked = ''
            if (value.indexOf(d.value) > -1) {
                checked = ' checked'
            }
            let typeClass = 'checker'
            return (
                React.createElement('label', {
                        key: index,
                        className: 'form-radio',
                        title: this.props.title
                    },
                    React.createElement('div', {
                            className: typeClass + checked
                        },
                        React.createElement('input', {
                            type: 'checkbox',
                            name: name,
                            value: d.value,
                            checked: checked,
                            onChange: this._onChange.bind(this)
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
}

Checkbox.defaultProps = {
    title: '多选框',
    type: 'checkbox',
    value: [2],
    options: [{
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
    help: ' ',
    disabled: '',
    required: 'required'
}

module.exports = Checkbox