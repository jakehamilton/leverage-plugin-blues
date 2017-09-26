const { manager, Middleware } = require('leverage-js')
const http = require('leverage-plugin-http')
const websocket = require('leverage-plugin-socket.io')
const express = require('express')
const path = require('path')

const blues = require('../index')

manager.add(http, websocket, blues)

const assets = Middleware.of({
    config: {
        type: 'http',
        http: {
            express: () => [express.static(path.resolve(__dirname, 'public'))]
        }
    }
})

manager.add(assets)

http.listen(3000)
