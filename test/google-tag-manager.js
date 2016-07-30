'use strict'

var assert = require('assert')
var promise = require('pinkie-promise')
var GoogleTagManager = require('..').GoogleTagManager

var methods = [
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
            var result = GoogleTagManager.openContainerWithId('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('boolForKey', function () {
        it ('returns an instance of Promise', function () {
            var result = GoogleTagManager.boolForKey('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('stringForKey', function () {
        it ('returns an instance of Promise', function () {
            var result = GoogleTagManager.stringForKey('dummy')
            assert(result instanceof Promise)
        })
    })

    describe('doubleForKey', function () {
        it ('returns an instance of Promise', function () {
            var result = GoogleTagManager.doubleForKey('dummy')
            assert(result instanceof Promise)
        })
    })
})
