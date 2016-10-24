'use strict'
import {
    connect
} from 'react-redux'

class Iframe extends React.Component {
    constructor() {
        super();
        let width = window.innerWidth || document.documentElement.clientWidth;
        let height = width * 3 / 4;
        this.state = {
            height: height
        }
    }
    render() {
        let data = this.props.data
        let curl = this.props.curl
        return (
            data.length > 0 ? React.createElement('video', {
                id: 'frame',
                controls: 'controls',
                preload: 'none',
                src: data[curl].url,
                poster: data[curl].poster,
                frameBorder: 0,
                autoPlay: autoplay || true,
                style: {
                    width: '100%',
                    height: this.state.height
                }
            }) : null
        )
    }
}

export default connect(
    state => ({
        data: state.video,
        curl: state.config.curl
    })
)(Iframe)