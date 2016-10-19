'use strict'
const classNames = require('classNames')

class FormGroup extends React.Component {
    render() {
        const {
            title,
            help,
            error,
            show,
            show2
        } = this.props
        const ecls = classNames({
            weui_cell: true,
            weui_cell_warn: error
        })
        return (
            React.createElement('section', {},
                show ? React.createElement('div', {
                    className: 'weui_cells_title'
                }, title) : null,
                React.createElement('div', {
                        className: 'weui_cells weui_cells_form'
                    },
                    React.createElement('div', {
                            className: ecls
                        },
                        show2 ? React.createElement('div', {
                                className: 'weui_cell_hd'
                            },
                            React.createElement('label', {
                                className: 'weui_label weui_cell_hd'
                            }, title)
                        ) : null,
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            this.props.children
                        ),
                        error ? React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('i', {
                                className: 'weui_icon_warn'
                            })
                        ) : null
                    )
                ),
                help ? React.createElement('div', {
                    className: 'weui_cells_tips'
                }, help) : null
            )
        )
    }
}

FormGroup.defaultProps = {
    title: '项目名',
    error: false,
    help: '这儿是提示信息',
    show: true,
    show2: true
}


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            length: props.value.length || 0,
        }
    }
    _onChange(e) {
        let value = e.target.value
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    }
    render() {
        return (
            React.createElement(FormGroup, this.props,
                React.createElement('input', {
                    className: 'weui_input',
                    type: this.props.type,
                    value: this.props.value,
                    maxLength: this.props.max ? this.props.max : null,
                    onChange: this._onChange.bind(this),
                    placeholder: this.props.placeholder
                })
            )
        )
    }
}
Input.defaultProps = {
    value: '',
    name: 'test',
    type: 'text',
    placeholder: '请输入项目名'
}
module.exports = Input