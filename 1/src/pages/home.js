'use strict'

class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        let ue = UE.getEditor('editor');
    }
    render() {
        return (
            React.createElement('div', {
                className: 'container pure-g'
            },
                React.createElement('div', {
                    id: 'editor'
                }),
                React.createElement('div', {
                    className: 'pure-u-1',
                    onClick: this.click
                }, '欢迎使用云上恩施cms 1.01版本！' + this.props.counter
                    // React.createElement('div', {
                    //     dangerouslySetInnerHTML: {
                    //         __html: this.state.html
                    //     }
                    // })
                )
            )
        )
    }
}

module.exports = Home