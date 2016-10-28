'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

class Textarea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            help: this.props.help,
            error: false,
            warning: false,
            success: false,
        }
    }
    componentWillMount() {
        let length = this.props.value.length
        let help = this.props.help || '请输入' + this.props.title
        this.setState({
            help: help,
            length: length
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value
    }
    componentWillReceiveProps(nextProps) {
        this.state = {
            value: nextProps.value,
            length: nextProps.value.length || 0
        }
    }
    _onChange(e) {
        let error
        let warning
        let success
        let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
        let length = value.length
        let help = this.props.help || '请输入' + this.props.title
        if (length > 0) {
            if (this.props.min && length < this.props.min) {
                help = '请输入至少' + this.props.min + '个字符！'
                error = true
            } else if (this.props.max && length > this.props.max) {
                help = '请输入至多' + this.props.max + '个字符！'
                error = true
            }
            if (!error) {
                success = true
            }
        } else if (this.props.required) {
            help = this.props.title + '必须填写！'
            warning = true
        }
        this.setState({
            value: value,
            help: help,
            length: length,
            error: error,
            warning: warning,
            success: success,
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    }
    onWheel(obj) {
        console.log(obj)
        console.log(obj.currentTarget.offsetTop)
    }
    onKeyPress(obj) {
        console.log(obj)
        console.log(obj.nativeEvent.charCode)
    }
    onCopy(obj) {
        console.log(obj)
    }
    render() {
        let Class = classNames({
            'has-error': this.state.error,
            'has-warning': this.state.warning,
            'has-success': this.state.success,
        })
        let limit = ' ' + this.state.length
        if (this.props.max) {
            limit += ' / ' + this.props.max
        }
        return (
            React.createElement(FormGroup, {
                class: Class,
                title: this.props.title,
                limit: limit,
                help: this.state.help,
                onWheel: this.onWheel.bind(this),
                onCopy: this.onCopy.bind(this),
                onKeyPress: this.onKeyPress.bind(this)
            },
                React.createElement('textarea', {
                    className: 'form-textarea',
                    rows: this.props.rows,
                    placeholder: this.props.placeholder,
                    disabled: this.props.disabled,
                    autoComplete: this.props.autoComplete,
                    value: this.state.value,
                    onChange: this._onChange.bind(this)
                })
            )
        )
    }
}
Textarea.defaultProps = {
    title: '字段名称',
    value: '',
    placeholder: '',
    help: '',
    disabled: '',
    autocomplete: 'off',
    required: 'required',
    min: 2,
    rows: 2
}
module.exports = Textarea
