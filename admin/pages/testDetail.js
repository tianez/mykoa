'use strict'

const {
    Form,
    FormGroup,
    Input,
    Textarea,
    Radio,
    Button
} = require('../components/forms')

const od = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

class testDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                options: [],
            },
            deleteid: [],
            addnew: []
        }
    }
    componentDidMount() {
        let {
            id
        } = this.props.params
            // let requrl = page == 'add' ? pages + '/add' : pages + '/detail'
        getfetch('api/tests/detail/' + id)
            .then(function (res) {
                res.info.answer = JSON.parse(res.info.answer)
                console.log(res);
                res.info.type = [0]
                this.setState({
                    info: res.info
                })
            }.bind(this))
    }

    /**
     * 修改题目标题
     */
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        this.setState({
            info: info
        })
    }

    /**
     * 改变题目类型
     */
    _onChangeType(name, value) {
        let info = this.state.info
        info[name] = value
        this.setState({
            info: info
        })
    }

    /**
     * 修改选项
     */
    _onChangeOption(name, value) {
        let info = this.state.info
        info.options[name].content = value
        if(info.options[name].status==0){
            info.options[name].status = -2
        }
        console.log(value);
        this.setState({
            info: info
        })
    }

    /**
     * 新增选项
     */
    _addOption(e) {
        let info = this.state.info
        let length = info.options.length - 1
        let isnew = info.options.every(function (o) {
            if (o.content == '') {
                alert('还有空白选项未完成，请完成后再新增！')
                return false
            }
            return true
        })
        if (!isnew) {
            return
        }
        getfetch('api/tests/addoption', {
                test_id: this.props.params.id,
                addnew: this.state.addnew
            })
            .then(function (res) {
                info.options.push(res.info)
                let addnew = this.state.addnew
                addnew.push(res.info.id)
                this.setState({
                    info: info,
                    addnew: addnew
                })
            }.bind(this))
    }

    /**
     * 删除选项
     */
    _deleteOption(index) {
        let info = this.state.info
        let deleteid = this.state.deleteid
        deleteid.push(info.options[index].id)
        delete info.options.splice(index, 1)
        this.setState({
            info: info,
            deleteid: deleteid
        })
    }

    /**
     * 改变答案
     */
    _onAnswer(name, value) {
        let info = this.state.info
        info[name] = value
        this.setState({
            info: info
        })
    }

    /**
     * 提交表单
     */
    _onSubmit(e) {
        console.log(this.state);
        postfetch('api/tests/detail', this.state)
            .then(function (res) {
                console.log(res);

                // if (page == 'add') {
                //     this.props.history.pushState(null, 'api/' + pages + '/' + res.info.id)
                // }
                Rd.message(res.msg)
            }.bind(this))
    }
    render() {
        let info = this.state.info
        console.log(this.state);
        console.log(this.state.info.answer);

        let render =
            React.createElement('section', {
                    className: 'container pure-u-1'
                },
                React.createElement("h3", {
                        className: "page-title"
                    },
                    this.state.title
                ),
                React.createElement(Form, {
                        action: this.state.action,
                        info: info,
                        apiSubmit: false,
                        // legend: this.state.title,
                        onSubmit: this._onSubmit.bind(this)
                    },
                    React.createElement(Textarea, {
                        title: '题目',
                        key: 'title',
                        name: 'title',
                        value: this.state.info.title,
                        onChange: this._onChange.bind(this)
                    }),
                    React.createElement(Radio, {
                        title: '类型',
                        type: 'radio',
                        value: this.state.info.type,
                        options: [{
                            title: '单选题',
                            value: 0
                        }, {
                            title: '多选题',
                            value: 1
                        }],
                        name: 'type',
                        help: '判断题将作为单选题（选项为正确和错误）',
                        disabled: '',
                        onChange: this._onChangeType.bind(this)
                    }),
                    this.state.info.options.map(function (o, index) {
                        return React.createElement(Option, {
                            title: '选项 ' + od[index],
                            key: index,
                            name: index,
                            value: o.content,
                            deleteOption: this._deleteOption.bind(this),
                            onChange: this._onChangeOption.bind(this)
                        })
                    }.bind(this)),
                    React.createElement(Button, {
                        type: 'button',
                        value: '新增选项',
                        onClick: this._addOption.bind(this)
                    }),
                    info.type == 0 ? React.createElement(Radio2, {
                        title: '正确答案',
                        name: 'answer',
                        value: this.state.info.answer,
                        options: this.state.info.options,
                        onChange: this._onAnswer.bind(this)
                    }) : React.createElement(Checkbox, {
                        title: '正确答案',
                        name: 'answer',
                        value: this.state.info.answer,
                        options: this.state.info.options,
                        onChange: this._onAnswer.bind(this)
                    }),
                    React.createElement(Button)
                )
            )
        return (
            React.createElement('section', {
                className: 'warp'
            }, render)
        )
    }
}

module.exports = connect(
    state => ({
        counter: state.config.show
    })
)(testDetail)

var Option = React.createClass({
    getDefaultProps: function () {
        return {
            type: 'text',
            value: '',
        }
    },
    getInitialState: function () {
        return {
            value: this.props.value,
            length: this.props.value.length || 0
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.state = {
            value: nextProps.value,
            length: nextProps.value.length || 0
        }
    },
    _onChange: function (e) {
        let value = e.target.value.replace(/(^\s*)|(\s*$)/, "")
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    },
    deleteOption(e) {
        if (this.props.deleteOption) {
            this.props.deleteOption(this.props.name)
        }
    },
    render: function () {
        let limit = ' ' + this.state.length
        if (this.props.max) {
            limit += ' / ' + this.props.max
        }
        return (
            React.createElement('div', {
                    className: 'form-group'
                },
                React.createElement('label', {
                    className: 'form-label'
                }, this.props.title),
                React.createElement('div', {
                        className: 'form-control'
                    },
                    limit ? React.createElement('i', {
                        className: 'form-ico fa'
                    }, this.props.limit) : null,
                    React.createElement('input', {
                        className: 'form-input',
                        type: this.props.type,
                        max: this.props.max,
                        value: this.state.value,
                        onChange: this._onChange
                    })
                ),
                React.createElement('div', {
                    className: 'form-delete',
                    onClick: this.deleteOption
                }, '删除')
            )
        )
    }
})

const Checkbox = React.createClass({
    getInitialState: function () {
        let options = []
        if (!this.props.ext) {
            options = this.props.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        let value = this.props.value
        if (value && typeof value == "string") {
            value = JSON.parse(value)
        }
        return {
            value: value,
            help: this.props.help,
            option: options
        }
    },
    componentDidMount: function () {
        if (this.props.ext) {
            getfetch("api/" + this.props.ext)
                .then(function (res) {
                    console.log(res);
                    this.setState({
                        option: res
                    })
                }.bind(this))
        }
    },
    _onChange: function (e) {
        let type = this.props.type
        let v = e.target.value
        if (!isNaN(v)) {
            v = parseInt(v)
        }
        let value = this.state.value
        let index = value.indexOf(v)
        if (index == -1) {
            value.push(v)
        } else {
            value.splice(index, 1)
        }
        this.setState({
            value: value
        })
        if (this.props.onChange) {
            if (this.props.value && typeof this.props.value == "string") {
                value = JSON.stringify(value)
            }
            this.props.onChange(this.props.name, value)
        }
    },
    render: function () {
        let value = this.state.value
        let name = this.props.name
        let options = this.state.option.map(function (d, index) {
            let checked = ''
            if (value.indexOf(d.id) > -1) {
                checked = ' checked'
            }
            let typeClass = 'checker'
            return (
                React.createElement('label', {
                        key: index,
                        className: 'form-radio',
                    },
                    React.createElement('div', {
                            className: typeClass + checked
                        },
                        React.createElement('input', {
                            type: 'checkbox',
                            name: name,
                            value: d.id,
                            checked: checked,
                            onChange: this._onChange
                        })
                    ),
                    React.createElement('span', null, od[index])
                )
            )
        }.bind(this))
        return (
            this.state.option.length > 0 ? React.createElement(FormGroup, {
                    title: this.props.title
                },
                options
            ) : null
        )
    }
})

const Radio2 = React.createClass({
    getInitialState: function () {
        let options = []
        if (!this.props.ext) {
            options = this.props.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        let value = this.props.value
        if (value && typeof value == "string") {
            value = JSON.parse(value)
        }
        let v = []
        v.push(value[0])
        return {
            value: v,
            help: this.props.help,
            option: options,
        }
    },
    componentDidMount: function () {
        if (this.props.ext) {
            request.get('admin/' + this.props.ext)
                .end(function (err, res) {
                    let data = JSON.parse(res.text)
                    this.setState({
                        option: data
                    })
                }.bind(this))
        }
    },
    componentWillReceiveProps: function (nextProps) {
        let options = []
        if (!nextProps.ext) {
            options = nextProps.options
            if (typeof options == "string") {
                options = JSON.parse(options)
            }
        }
        this.setState({
            value: nextProps.value,
            help: nextProps.help,
            option: options,
        })
    },
    _onChange: function (e) {
        let value = []
        let v = e.target.value
        if (!isNaN(v)) {
            v = parseInt(v)
        }
        value.push(v)
        console.log(value);

        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
    },
    render: function () {
        let value = this.state.value
        let name = this.props.name
        let options = this.state.option.map(function (d, index) {
            let checked = ''
            if (value.indexOf(d.id) > -1) {
                checked = ' checked'
            }
            let typeClass = 'radio'
            return (
                React.createElement('label', {
                        key: index,
                        className: 'form-radio',
                    },
                    React.createElement('div', {
                            className: typeClass + checked
                        },
                        React.createElement('input', {
                            type: 'radio',
                            value: d.id,
                            checked: checked,
                            onChange: this._onChange
                        })
                    ),
                    React.createElement('span', null, od[index])
                )
            )
        }.bind(this))
        return (
            this.state.option.length > 0 ? React.createElement(FormGroup, {
                    title: this.props.title,
                    help: this.state.help
                },
                options
            ) : null
        )
    }
})