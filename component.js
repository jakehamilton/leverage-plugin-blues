const path = require('path')
const express = require('express')
const { Component } = require('leverage-js')

const script = path.resolve(__dirname, 'client.js')

class C extends Component {
    constructor () {
        super()

        this.config = {
            type: ['http', 'websocket'],
            http: {
                path: '/blues/blues.js',
                method: 'get'
            },
            websocket: {
                event: 'blues:sync'
            },
            dependencies: {
                services: ['blues']
            }
        }
    }

    http (request, response) {
        response.sendFile(script)
    }

    websocket (socket, io, data) {
        console.log(data)
    }
}

module.exports = new C()
