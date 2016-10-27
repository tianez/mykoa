'use strict'
import {
    connect
} from 'react-redux'
class Message extends React.Component {
    render() {
        return (
            this.props.data.show == 1 ? React.createElement('div', {
                    id: 'message'
                },
                this.props.data.msg
            ) : null
        )
    }
}
export default connect(
    state => ({
        data: state.config.message
    })
)(Message)