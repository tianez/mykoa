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
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                options: [{
                    id: 23,
                    content: 'wo shi hao ren  ni zhi dao de'
                }, {
                    id: 24,
                    content: '222222222222222222'
                }]
            }
        }
    }
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        console.log(value);
        this.setState({
            info: info
        })
    }
    _onChangeOption(name, value) {
        let info = this.state.info
            // info[name] = value
        console.log(name);
        info.options[name].content = value
        console.log(value);
        this.setState({
            info: info
        })
    }
    _onSubmit(e) {
        console.log(this.state.info);
    }
    _onClick(e) {
        let option = {
            content: '222222222222222222'
        }
        let info = this.state.info
        info.options.push(option)
        this.setState({
            info: info
        })

    }
    render() {
        let info = this.state.info
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
                        default: 1,
                        options: [{
                            title: '选项1',
                            value: 1
                        }, {
                            title: '选项2',
                            value: 2
                        }],
                        name: 'type',
                        help: '请选择题目类型，判断题将作为选项为正确和错误的单选题',
                        disabled: '',
                        onChange: this._onChange.bind(this)
                    }),
                    this.state.info.options.map(function (o, index) {
                        return React.createElement(Input, {
                            title: '选项' + (index + 1),
                            key: index,
                            name: index,
                            value: o.content,
                            onChange: this._onChangeOption.bind(this)
                        })
                    }.bind(this)),
                    React.createElement(Button, {
                        type: 'button',
                        onClick: this._onClick.bind(this)
                    }),
                    React.createElement(Checkbox,{
                        title: '正确选项'
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
)(Home)