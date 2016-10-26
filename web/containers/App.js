import React, { Component, PropTypes } from 'react';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Header from '../components/Header';
// import Content from '../components/Content';
// import * as Actions from '../actions';

class App extends Component{
    _onSubmit(e) {
        console.log('111');
        Rd.config('title','2323232')
        }
    render(){
        // const {todos, actions} = this.props;
        return (
            React.createElement('div', {
                    onClick : this._onSubmit.bind(this)
                },'1111111111111111')
        );
    }
}

// function mapStateToProps(state){
//     return {
//         todos : state
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         actions : bindActionCreators(Actions, dispatch)
//     }
// }
module.exports = App
