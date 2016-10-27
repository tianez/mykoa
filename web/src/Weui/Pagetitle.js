'use strict'
const classNames = require('classNames')
class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            React.createElement('section', {},
                React.createElement('div', {
                    className: 'hd'
                },
                    React.createElement('h1', {
                        className: 'page_title'
                    }, 'WeUI'),
                    React.createElement('p', {
                        className: 'page_desc'
                    }, '为微信Web服务量身设计')
                )
            )
        )
    }
}
Input.defaultProps = {
    title: '项目名',
}
module.exports = Input