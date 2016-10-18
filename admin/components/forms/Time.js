'use strict'

const classNames = require('classNames')
const moment = require('moment')
const FormGroup = require('./FormGroup')
const {
    defaultRanges,
    Calendar,
    DateRange
} = require('react-date-range')

var Time = React.createClass({
    getInitialState: function () {
        return {
            'datePicker': this.props.value || null,
            'predefined': {},
        }
    },
    handleChange(which, payload) {
        this.setState({
            [which]: payload.format('YYYY-MM-DD').toString()
        });
        if (this.props.onChange) {
            this.props.onChange(this.props.name, payload.format('YYYY-MM-DD').toString())
        }
    },
    render: function () {
        const {
            datePicker,
            predefined
        } = this.state;
        const format = 'YYYY-MM-DD h:mm:ss 星期d';
        return (
            React.createElement('div', {},
                React.createElement(FormGroup, {
                        title: this.props.title,
                        help: this.state.help
                    },
                    React.createElement('input', {
                        type: 'text',
                        className: 'form-input',
                        value: datePicker
                    }),
                    React.createElement(Calendar, {
                        theme: {
                            Calendar: {
                                width: 281
                            }
                        },
                        firstDayOfWeek: 1,
                        date: now => {
                            return moment(this.props.value).format('DD/MM/YYYY')
                        },
                        onInit: this.handleChange.bind(this, 'datePicker'),
                        onChange: this.handleChange.bind(this, 'datePicker')
                    })
                )
                // React.createElement(FormGroup, {
                //         title: 'Date Picker',
                //         help: this.state.help
                //     },
                //     React.createElement('input', {
                //         type: 'text',
                //         className: 'form-input',
                //         readOnly: true,
                //         value: predefined['startDate'] && predefined['startDate'].format(format).toString()
                //     }),
                //     React.createElement('input', {
                //         type: 'text',
                //         className: 'form-input',
                //         readOnly: true,
                //         value: predefined['endDate'] && predefined['endDate'].format(format).toString()
                //     }),
                //     React.createElement(DateRange, {
                //         linkedCalendars: true,
                //         // startDate: '10/11/2015',
                //         // endDate: '11/12/2015',
                //         // ranges: defaultRanges,
                //         onInit: this.handleChange.bind(this, 'predefined'),
                //         onChange: this.handleChange.bind(this, 'predefined'),
                //         theme: {
                //             DateRange: {
                //                 background: '#ffffff'
                //             },
                //             Calendar: {
                //                 width: 281,
                //                 background: 'transparent',
                //                 color: '#95a5a6',
                //             },
                //             MonthAndYear: {
                //                 background: '#e74c3c',
                //                 color: '#9e3024'
                //             },
                //             MonthButton: {
                //                 background: '#c0392b'
                //             },
                //             MonthArrowPrev: {
                //                 borderRightColor: '#d96659',
                //             },
                //             MonthArrowNext: {
                //                 borderLeftColor: '#d96659',
                //             },
                //             Weekday: {
                //                 background: '#e74c3c',
                //                 color: '#9e3024'
                //             },
                //             Day: {
                //                 transition: 'transform .1s ease, box-shadow .1s ease, background .1s ease'
                //             },
                //             DaySelected: {
                //                 background: '#8e44ad'
                //             },
                //             DayActive: {
                //                 background: '#8e44ad',
                //                 boxShadow: 'none'
                //             },
                //             DayInRange: {
                //                 background: '#9b59b6',
                //                 color: '#fff'
                //             },
                //             DayHover: {
                //                 background: '#ffffff',
                //                 color: '#7f8c8d',
                //                 transform: 'scale(1.1) translateY(-10%)',
                //                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
                //             }
                //         }
                //     })
                // )
            )
        )
    }
})

module.exports = Time