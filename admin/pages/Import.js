'use strict'

const {
    Form,
    FormGroup,
    Input,
    Button,
    Hidden
} = require('../components/forms/index')

const ajaxUpload = require('../components/utils/AjaxUpload')

var Import = React.createClass({
    componentDidMount: function() {
        Rd.config('title', '数据导入')
    },
    _onSubmit: function() {
        let files = this.refs.file2.files
        console.log(files);
        let file = files[0]
        return ajaxUpload({
            url: 'admin/import',
            name: 'file',
            key: file.name,
            file: file,
            data: {
                table: 'member'
            },
            onProgress: (e) => {
                console.log((e.loaded / e.total) * 100 + '%')
            },
            onLoad: (e) => {
                let res = JSON.parse(e.currentTarget.responseText)
                console.log(res);
                Rd.message(res.msg)
            },
            onError: () => {}
        })
    },
    _onSubmit2: function() {
        let files = this.refs.result.files
        let file = files[0]
        return ajaxUpload({
            url: 'admin/import',
            name: 'file',
            key: file.name,
            file: file,
            data: {
                table: 'result'
            },
            onProgress: (e) => {
                console.log((e.loaded / e.total) * 100 + '%')
            },
            onLoad: (e) => {
                let res = JSON.parse(e.currentTarget.responseText)
                console.log(res);
                Rd.message(res.msg)
            },
            onError: () => {}
        })
    },
    render: function() {
        return (
            React.createElement('div', {
                    className: 'container pure-g'
                },
                React.createElement('div', {
                        className: 'pure-u-1'
                    },
                    React.createElement(Form, {
                            action: 'user/login',
                            apiSubmit: false,
                            legend: '人员数据上传',
                            onSubmit: this._onSubmit
                        },
                        React.createElement(FormGroup, {
                                title: '文件上传'
                            },
                            React.createElement('input', {
                                id: 'file',
                                name: 'file',
                                ref: 'file2',
                                className: 'ipt',
                                type: 'file',
                                multiple: false,
                            })
                        ),
                        React.createElement(Button, {
                            value: '文件上传'
                        })
                    ),
                    React.createElement(Form, {
                            action: 'user/login',
                            apiSubmit: false,
                            legend: '人员数据上传',
                            onSubmit: this._onSubmit2
                        },
                        React.createElement(FormGroup, {
                                title: '文件上传'
                            },
                            React.createElement('input', {
                                id: 'file',
                                name: 'file',
                                ref: 'result',
                                className: 'ipt',
                                type: 'file',
                                multiple: false,
                            })
                        ),
                        React.createElement(Button, {
                            value: '文件上传'
                        })
                    )
                )
            )
        )
    }
})

Import.defaultProps = {
    value: '保存'
}

module.exports = Import