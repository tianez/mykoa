'use strict'
const {
    Link
} = ReactRouter;

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: null
        }
    }
    render() {
        return (
            <div className="header">
    <a href="/" className="icon icon-left"></a>
    <h1>我是头部</h1>
</div>
        )
    }
}
module.exports = connect(
    state => ({
        user: state.user
    })
)(Header)