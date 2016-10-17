'use strict'

const Nomatch = require('./Nomatch')
const Home = require('./home')
const Pages = require('./Pages')
const Page = require('./Page')
const Login = require('./login')
const Logout = require('./logout')

var Temp = {
    Nomatch: Nomatch,
    Home: Home,
    Pages: Pages,
    Page: Page,
    Login: Login,
    Logout: Logout, 
}
module.exports = Temp
