'use strict'

const assert = require('assert')
const GoogleAnalytics = require('..')

const methods = [
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
