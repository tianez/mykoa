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
        let style1
        let style2
        let data = this.props.data
        let curl = this.props.curl
        if (data.length > 0) {
            style1 = {
                width: '100%',
                height: data[curl].type == 0 ? this.state.height:0
            }
            style2 = {
                width: '100%',
                height: data[curl].type == 1 ? this.state.height:0
            }
        }
        return (
            data.length > 0 ? React.createElement('div', {
                    id: 'frame',
                    style: {
                        width: '100%',
                        height: this.state.height
                    }
                },
                React.createElement('video', {
                    controls: 'controls',
                    preload: 'none',
                    src: data[curl].url,
                    poster: data[curl].poster,
                    frameBorder: 0,
                    autoPlay: autoplay || true,
                    style: style1
                }),
                React.createElement('img', {
                    src: data[curl].poster,
                    style: style2
                })
            ) : null
        )
    }
}

export default connect(
    state => ({
        data: state.video,
        curl: state.config.curl
    })
)(Iframe)