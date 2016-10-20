'use strict'


class TestAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
        }
    }
    componentDidMount() {
        let {
            pages,
            page
        } = this.props.params
        // let requrl = page == 'add' ? pages + '/add' : pages + '/detail'
        getfetch('api/tests/add')
            .then(function (res) {
                this.props.history.pushState(null, 'api/tests/' + res.info.id)
            }.bind(this))
    }
    render() {
        return (null)
    }
}
module.exports = TestAdd