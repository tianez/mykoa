// var width = window.innerWidth || document.documentElement.clientWidth;
// var height = width * 3 / 4;
// document.getElementById('frame').style.height = height + 'px';
// // document.getElementById('body').style.paddingTop = height + 'px';

// $('.nav1').bind('click', function () {
//     $(this).addClass('active');
//     $num = $(this).index();
//     $(this).siblings().removeClass('active');
//     $('#content').find('div').removeClass('active');
//     $('#content').find('div').eq($num).addClass('active');
// })

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
        return (
            React.createElement('iframe', {
                id: 'frame',
                src: 'http://app.cjyun.org/video/player/index?vid=12&thumb=&sid=10076&next=&autoStart=1&type=stream',
                frameBorder: 0,
                allowFullScreen: true,
                style: {
                    width: '100%',
                    height: this.state.height
                }
            })
        )
    }
}

class Ul extends React.Component {
    constructor(props) {
        super(props);
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
                        src: '../images/12.jpg'
                    })
                ),
                React.createElement('div', {
                    className: 'c'
                },
                    React.createElement('div', {
                        className: 'c1'
                    }, 'wodemingzishidusohaosa'),
                    React.createElement('div', {
                        className: 'c2'
                    }, '33分钟前'),
                    React.createElement('div', {
                        className: 'c3'
                    }, '2提供两种优化flash播放器的嵌入方法：基于标记的方法和依赖于js的方法。')
                )
            )
        })
        return (
            React.createElement('div', {
                className: 'content2 active'
            }, ul)
        );
    }
}

class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            React.createElement('div', {
                id: 'footer'
            },
                React.createElement('div', {
                    id: 'formd'
                }),
                React.createElement('form', {
                    id: 'form'
                },
                    React.createElement('div', {
                        className: 'f1'
                    },
                        React.createElement('input', {
                            type: 'text',
                            className: 'input',
                            placeholder: '我要发言'
                        })
                    ),
                    React.createElement('div', {
                        className: 'f2'
                    },
                        React.createElement('input', {
                            type: 'submit',
                            className: 'submit',
                            value: '发送'
                        })
                    )
                )
            )
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            React.createElement('div', {
                id: 'bodyd'
            },
                React.createElement(Iframe),
                React.createElement('div', {
                    id: 'main'
                },
                    React.createElement('div', {
                        className: 'nav'
                    },
                        React.createElement('div', {
                            className: 'nav1'
                        }, '今日话题'),
                        React.createElement('div', {
                            className: 'nav1 active'
                        }, '评论')
                    ),
                    React.createElement('div', {
                        id: 'content'
                    },
                        React.createElement('div', {
                            className: 'content1'
                        },
                            'SWFObject 2提供两种优化flash播放器的嵌入方法：基于标记的方法和依赖于js的方法。'
                        ),
                        React.createElement(Ul, {
                            data: ['1', '23', '23']
                        })
                    )
                ),
                React.createElement(Footer)
            )
        )
    }
}

ReactDOM.render(
    React.createElement(Home),
    document.getElementById('app')
);