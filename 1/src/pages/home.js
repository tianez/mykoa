'use strict'

var Home = React.createClass({
    propTypes: {
        counter: React.PropTypes.number
    },
    getInitialState: function() {
        return {
            items: ['hello', 'world', 'click', 'me']
        };
    },
    componentDidMount: function() {
        Rd.config('title', '首页')
    },
    handleSelect: function(data) {
        console.log(data); // Momentjs object
        console.log(data.format('YYYY-MM-D HH d')); // Momentjs object
    },
    updateHtml: function(html) {
        this.setState({
            html: html
        })
    },
    click: function() {
        Rd.user()
    },
    render: function() {
        return (
            React.createElement('div', {
                    className: 'container pure-g'
                },
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
});

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(Home)