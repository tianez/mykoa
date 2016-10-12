'use strict'

const {
    Form,
    Input,
    Textarea,
    // Editer,
    Ueditor,
    Radio,
    Checkbox,
    Upload,
    Range,
    Button,
    Select,
    Hidden,
    Category
} = require('../components/forms')
const {
    Link
} = ReactRouter;
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
        }
    }
    componentDidMount() {
        this._req(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.params.pages != nextProps.params.pages || this.props.params.page != nextProps.params.page) {
            this._req(nextProps)
        }
    }
    _req(props) {
        let {
            pages,
            page
        } = props.params
        let requrl = page == 'add' ? pages + '/add' : pages + '/detail/' + page
        request.get(requrl)
            .end(function (err, res) {
                let msg
                if (err) {
                    this.props.history.pushState(null, '/')
                    msg = err.response.text
                } else {
                    let data = JSON.parse(res.text);
                    msg = data.msg
                    this.setState({
                        title: data.title,
                        fields: data.fields,
                        info: data.info || {}
                    })
                }
            }.bind(this))
    }
    _onSubmit(e) {
        let {
            pages,
            page
        } = this.props.params
        let requrl = page == 'add' ? pages + '/add' : pages + '/detail'
        postfetch(requrl, this.state.info)
            .then(function (res) {
                if (page == 'add') {
                    this.props.history.pushState(null, 'api/' + pages + '/' + res.info.id)
                }
                Rd.message(res.msg)
            }.bind(this))
    }
    _onChange(name, value) {
        let info = this.state.info
        info[name] = value
        this.setState({
            info: info
        })
    }
    render() {
        let render
        let forms
        let info = this.state.info
        let model = this.state.fields
        if (model) {
            let onChange = this._onChange.bind(this)
            forms = model.map(function (ds, index) {
                let d = {}
                if (info[ds.key] || info[ds.key] == 0) {
                    d.value = info[ds.key]
                } else {
                    d.value = ds.f_default || ''
                }
                if (ds.f_options) {
                    d.f_options = ds.f_options
                }
                d.f_ext = ds.f_ext
                d.key = ds.key
                d.name = ds.key
                d.type = ds.type
                d.title = ds.title
                d.onChange = onChange
                switch (d.type) {
                    case "text":
                        return (React.createElement(Input, d))
                        break;
                    case "password":
                        return (React.createElement(Input, d))
                        break;
                    case "email":
                        return (React.createElement(Input, d))
                        break;
                    case "textarea":
                        return (React.createElement(Textarea, d))
                        break;
                    case "upload":
                        return (React.createElement(Upload, d))
                        break;
                    case "image":
                        return (React.createElement(Upload, d))
                        break;
                    case "editer":
                        return (React.createElement(Ueditor, d))
                        break;
                    case "radio":
                        return (React.createElement(Radio, d))
                        break;
                    case "checkbox":
                        return (React.createElement(Checkbox, d))
                        break;
                    case "select":
                        return (React.createElement(Select, d))
                        break;
                    case "category":
                        return (React.createElement(Category, d))
                        break;
                    case "hidden":
                        return (React.createElement(Hidden, d))
                        break;
                    default:
                        break;
                }
            })
        }
        // if (info) {
        render =
            React.createElement('section', {
                    className: 'container pure-u-1'
                },
                React.createElement("h3", {
                        className: "page-title"
                    },
                    this.state.title,
                    this.props.params.page !== 'add' ?
                    React.createElement(Link, {
                        to: '/api/' + this.props.params.pages + '/add',
                    }, '（新增）') : null
                ),
                React.createElement(Form, {
                        action: this.state.action,
                        info: info,
                        apiSubmit: false,
                        // legend: this.state.title,
                        onSubmit: this._onSubmit.bind(this)
                    },
                    forms,
                    React.createElement(Button)
                )
            )
            // }
        return (
            React.createElement('section', {
                className: 'warp'
            }, render)
        )
    }
}
module.exports = Page