'use strict'

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
        let left = 0
        if (this.props.login && !this.props.islogin) {
            left = '-100%'
        }
        return (
            React.createElement('video', {
                id: 'frame',
                controls: 'controls',
                preload: 'none',
                src: vurl,
                poster: 'images/1.jpg',
                frameBorder: 0,
                style: {
                    width: '100%',
                    height: this.state.height,
                    // left: left
                }
            })
        )
    }
}

export default Iframe;