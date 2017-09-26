const { manager, Plugin } = require('leverage-js')

const service = require('./component')
const component = require('./service')

class Blues extends Plugin {
    constructor () {
        super()

        this._identifier = 0

        this.config = {
            type: 'blues',
            blues: {
                // generate a unique identifier
                // @TODO: Support multiple instances of blues
                identifier: () => this._identifier++
            },
            dependencies: {
                plugins: ['http', 'websocket']
            }
        }
    }

    ready () {
        manager.add(component)
    }

    blues (component) {

    }
}

module.exports = new Blues()
