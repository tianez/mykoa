'use strict'

class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        // let ue = UE.getEditor('editor');
        var editor = new Simditor({
            textarea: $('#editor'),
            upload: {
                url: 'http://localhost:4000/api/upload',
                params: {
                   token: localStorage.token
                },
                fileKey: 'upfile',
                connectionCount: 3,
                leaveConfirm: 'Uploading is in progress, are you sure to leave this page?'
            }
        });
    }
    render() {
        return (
            React.createElement('div', {
                className: 'container pure-g'
            },
                React.createElement('textarea', {
                    id: 'editor',
                    placeholder: 'haodesdss'
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