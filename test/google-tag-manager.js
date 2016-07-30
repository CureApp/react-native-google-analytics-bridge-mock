'use strict'

const assert = require('assert')
const GoogleTagManager = require('..').GoogleTagManager

const methods = [
    'openContainerWithId',
    'boolForKey',
    'stringForKey',
    'doubleForKey',
]

describe('GoogleTagManager', function () {
    it('has all methods of react-native-google-analytics-bridge', function () {
        methods.forEach(function (method) {
            assert(typeof GoogleTagManager[method] === 'function')
        })
    })

    describe('openContainerWithId', function () {
        it ('returns an instance of Promise', function () {
            const result = GoogleTagManager.openContainerWithId('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('boolForKey', function () {
        it ('returns an instance of Promise', function () {
            const result = GoogleTagManager.boolForKey('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('stringForKey', function () {
        it ('returns an instance of Promise', function () {
            const result = GoogleTagManager.stringForKey('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('doubleForKey', function () {
        it ('returns an instance of Promise', function () {
            const result = GoogleTagManager.doubleForKey('dummy')
            assert(result instanceof Promise)
        })
    })
})
