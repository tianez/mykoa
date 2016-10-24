'use strict'

import {
    Iframe,
    Footer,
    Login,
    List
} from './index'
class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        request
            .get('chat/list')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (res.ok) {
                    let d = JSON.parse(res.text)
                    console.log(d);
                    Rd.comments(d.chat)
                    Rd.todays(d.today)
                    Rd.video(d.video)
                    console.log(JSON.parse(res.text))
                } else {
                    alert(res.text)
                }
            })
    }
    _onClick(i) {
        if (this.props.config.show !== i) {
            Rd.config('show', i)
        }
    }
    _onScroll(e) {
        console.log(e);
    }
    _scrollTop() {
        this.refs.content.scrollTop = 0
    }
    _changeVideo(index) {
        console.log(index);

        Rd.config('curl', index)
    }
    render() {
        let show = this.props.config.show
        return (
            React.createElement('div', {
                    id: 'bodyd',
                    className: this.props.config.login ? 'leftx' : ''
                },
                React.createElement(Iframe),
                React.createElement('div', {
                        id: 'main'
                    },
                    React.createElement('div', {
                            className: 'nav'
                        },
                        React.createElement('div', {
                            className: show == 0 ? 'nav1 active' : 'nav1',
                            onClick: this._onClick.bind(this, 0)
                        }, '聊天室（' + this.props.config.number + '）'),
                        React.createElement('div', {
                            className: show == 1 ? 'nav1 active' : 'nav1',
                            onClick: this._onClick.bind(this, 1)
                        }, '电视广播')
                    ),
                    React.createElement('div', {
                            id: 'content',
                            ref: 'content'
                        },
                        React.createElement(List, {
                            show: show,
                        }),
                        React.createElement('div', {
                                className: show == 1 ? 'content1 active' : 'content1',
                            },
                            this.props.video.map(function (ele, index) {
                                return React.createElement('div', {
                                        key: index,
                                        className: this.props.config.curl == index ? 'video active' : 'video',
                                        onClick: this._changeVideo.bind(this, index)
                                    },
                                    ele.name
                                )
                            }.bind(this))
                        )
                    )
                ),
                React.createElement(Footer, {
                    islogin: this.props.config.islogin,
                    scrollTop: this._scrollTop.bind(this)
                }),
                React.createElement(Login)
            )
        )
    }
}

export default Home;