'use strict'
const Form = require('./Form')
const FormGroup = require('./FormGroup')
const Input = require('./Input')
const Textarea = require('./Textarea')
// const Editer = require('../editer')
const Ueditor = require('./ueditor')
const Canvas = require('./Canvas')
const Upload = require('./Upload')
const Radio = require('./Radio')
const Checkbox = require('./Checkbox')
const Range = require('./Range')
const Button = require('./Button')
const Hidden = require('./Hidden')
// const ColorPicker = require('./ColorPicker')
const Select = require('./Select')
const Tab = require('./Tab')
const Audio = require('./Audio')
// const {
//     Calendar,
//     DateRange
// } = require('react-date-range')

var Forms = {
    Form: Form,
    FormGroup: FormGroup,
    Input: Input,
    Textarea: Textarea,
    // Editer: Editer,
    Ueditor: Ueditor,
    Canvas: Canvas,
    Upload: Upload,
    Radio: Radio,
    Checkbox: Checkbox,
    Range: Range,
    Button: Button,
    Hidden: Hidden,
    Category: require('./Category'),
    // Calendar: Calendar,
    // DateRange: DateRange,
    // ColorPicker: ColorPicker,
    Select: Select,
    Tab: Tab,
    Audio: Audio
}
module.exports = Forms
