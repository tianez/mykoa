'use strict'

const classNames = require('classNames')
const FormGroup = require('./FormGroup')

var Ueditor = React.createClass({
    getDefaultProps: function () {
        return {
            type: 'text',
            value: '',
            autocomplete: 'off',
            required: 'required',
        }
    },
    getInitialState: function () {
        return {
            value: this.props.value,
            help: this.props.help,
            length: this.props.value.length || 0
        }
    },
    componentDidMount: function () {
        this.ueditor = UE.getEditor('ueditor');
        this.ueditor.ready(function () {
            this.ueditor.setContent(this.props.value);
            this.ueditor.addListener('selectionchange', function () {
                let html = this.ueditor.getContent();
                if (this.props.onChange) {
                    this.props.onChange(this.props.name, html)
                }
            }.bind(this))
        }.bind(this));
    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentWillUnmount: function () {
        this.ueditor.destroy();
    },
    render: function () {
        return (
            React.createElement(FormGroup, {
                title: this.props.title,
                className: 'form-ueditor'
            },
                React.createElement('textarea', {
                    id: 'ueditor',
                    ref: 'ueditor',
                    name: this.props.name,
                })
            )
        )
    }
})

module.exports = Ueditor
