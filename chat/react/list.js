'use strict'

import {
    connect
} from 'react-redux'

class Time extends React.Component {
    render() {
        let out
        let time = this.props.time * 1000
        let date = new Date(time)
        let curdate = new Date()
        let seconds = Math.ceil((curdate - date) / 1000)
        if (seconds < 60) {
            if (seconds < 1) {
                seconds = 1
            }
            out = seconds + '秒前'
        } else {
            let minutes = parseInt(seconds / 60)
            if (minutes < 60) {
                out = minutes + '分钟前'
            } else {
                let hours = parseInt(minutes / 60)
                if (hours < 24) {
                    out = hours + '小时前'
                } else {
                    let Y = date.getFullYear() + '-';
                    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    let D = date.getDate() + ' ';
                    let h = date.getHours() + ':';
                    let m = date.getMinutes() + ':';
                    let s = date.getSeconds();
                    out = Y + M + D + h + m + s
                }
            }
        }
        return (
            React.createElement('div', {
                className: 'c2'
            }, out)
        );
    }
}

class List extends React.Component {
    constructor() {
        super()
    }
    render() {
        let ul = this.props.data.map(function (d, index) {
            return React.createElement('div', {
                    className: 'li',
                    key: index
                },
                React.createElement('div', {
                        className: 'thumb'
                    },
                    React.createElement('img', {
                        src: d.head_img
                    })
                ),
                React.createElement('div', {
                        className: 'c'
                    },
                    React.createElement('div', {
                        className: 'c1',
                        dangerouslySetInnerHTML: {
                            __html: d.realname
                        }
                    }),
                    React.createElement(Time, {
                        time: d.time
                    }),
                    React.createElement('div', {
                        className: 'c3'
                    }, d.content)
                )
            )
        })
        return (
            React.createElement('div', {
                className: this.props.show == 0 ? 'content2 active' : 'content2',
                ref: 'list'
            }, ul)
        );
    }
}

export default connect(
    state => ({
        data: state.comment
    })
)(List)