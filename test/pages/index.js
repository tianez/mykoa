'use strict'

const Home = require('./home')
const Login = require('./login')
const TestAdd = require('./testAdd')
const TestDetail = require('./testDetail')

var Temp = {
    Home: Home,
    Login: Login,
    TestAdd: TestAdd,
    TestDetail: TestDetail
}
module.exports = Temp