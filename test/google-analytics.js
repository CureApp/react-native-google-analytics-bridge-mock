'use strict'

var assert = require('assert')
var GoogleAnalytics = require('..')

var methods = [
    'trackScreenView',
    'trackEvent',
    'trackScreenViewWithCustomDimensionValues',
    'trackEventWithCustomDimensionValues',
    'trackTiming',
    'trackPurchaseEvent',
    'trackException',
    'setUser',
    'allowIDFA',
    'trackSocialInteraction',
    'setDryRun',
    'setDispatchInterval',
    'setTrackUncaughtExceptions',
    'setAnonymizeIp',
    'setOptOut',
    'setAppName',
    'setTrackerId',
    'setAppVersion',
]

describe('GoogleAnalytics', function () {
    it('has all methods of react-native-google-analytics-bridge', function () {
        methods.forEach(function (method) {
            assert(typeof GoogleAnalytics[method] === 'function')
        })
    })
})
