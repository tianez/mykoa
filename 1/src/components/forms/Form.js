'use strict'

const classNames = require('classNames')

class Form extends React.Component {
    constructor() {
        super()
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.locked) {
            return;
        }
        this.props.onSubmit(e)
    }
    render() {
        return (
            React.createElement('form', {
                    className: 'form-fields form-horizontal',
                    role: 'form',
                    onSubmit: this.handleSubmit.bind(this)
                },
                React.createElement('fieldset', {
                        className: 'form-fieldset'
                    },
                    React.createElement('legend', {
                        className: 'form-legend'
                    }, this.props.legend),
                    this.props.children
                )
            )
        )
    }
}
module.exports = Form