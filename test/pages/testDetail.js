'use strict'


const {
    Form,
    Input,
    Textarea,
    Radio,
    Checkbox,
    Upload,
    Range,
    Button,
    Select,
    Hidden
} = require('../components/forms')
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
                this.setState({
                    info: res.info
                })
            }.bind(this))
    }
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        console.log(value);
        this.setState({
            info: info
        })
    }
    _onAnswer(name, value) {
        let info = this.state.info
        info[name] = value
        console.log(value);
        this.setState({
            info: info
        })
    }
    _onChangeOption(name, value) {
        let info = this.state.info
        info.options[name].content = value
        info.options[name].status = -1
        console.log(value);
        this.setState({
            info: info
        })
    }
    _onSubmit(e) {
        console.log(this.state);
    }
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
    render() {
        let info = this.state.info
        console.log(this.state);
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
                        title: '题目类型',
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
                        onChange: this._onChange.bind(this)
                    }),
                    this.state.info.options.map(function (o, index) {
                        return React.createElement(Option, {
                            title: '选项' + (index + 1),
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
                    info.type == 0 ? React.createElement(Radio, {
                        title: '正确选项',
                        name: 'answer',
                        value: this.state.info.answer,
                        onChange: this._onAnswer.bind(this)
                    }) : React.createElement(Checkbox, {
                        title: '正确选项',
                        name: 'answer',
                        value: this.state.info.answer[0] || 0,
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