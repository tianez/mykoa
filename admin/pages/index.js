'use strict'

const Nomatch = require('./Nomatch')
const Home = require('./home')
const Drag = require('./drag')
const ApiCloudsIndex = require('./ApiCloudsIndex')
const ApiClouds = require('./ApiClouds')
const ApiCloud = require('./ApiCloud')
const Pages = require('./Pages')
const Page = require('./Page')
const Login = require('./login')
const Logout = require('./logout')
const Import = require('./Import')

var Temp = {
    Nomatch: Nomatch,
    Home: Home,
    Drag: Drag,
    ApiCloudsIndex: ApiCloudsIndex,
    ApiClouds: ApiClouds,
    ApiCloud: ApiCloud,
    Pages: Pages,
    Page: Page,
    Login: Login,
    Logout: Logout,
    Import:Import
}
module.exports = Temp
