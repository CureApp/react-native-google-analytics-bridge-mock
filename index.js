'use strict'

class GoogleAnalytics {
    static trackScreenView(screenName) {}
    static trackEvent(category, action, optionalValues) {}
    static trackScreenViewWithCustomDimensionValues(screenName, customDimensionValues) {}
    static trackEventWithCustomDimensionValues(category, action, optionalValues, customDimensionValues) {}
    static trackTiming(category, value, optionalValues) {}
    static trackPurchaseEvent(product, transaction, eventCategory, eventAction) {}
    static trackException(error, fatal) {}
    static setUser(userId) {}
    static allowIDFA(enabled) {}
    static trackSocialInteraction(network, action, targetUrl) {}
    static setDryRun(enabled) {}
    static setDispatchInterval(intervalInSeconds) {}
    static setTrackUncaughtExceptions(enabled) {}
    static setAnonymizeIp(enabled) {}
    static setOptOut(enabled) {}
    static setAppName(appName) {}
    static setTrackerId(trackerId) {}
    static setAppVersion(appVersion) {}
}

class GoogleTagManager {
    static openContainerWithId(containerId){
        return Promise.resolve()
    }

    static boolForKey(key){
        return Promise.resolve(true)
    }

    static stringForKey(key){
        return Promise.resolve('dummy')
    }

    static doubleForKey(key){
        return Promise.resolve(1)
    }
}

GoogleAnalytics.GoogleTagManager = GoogleTagManager
module.exports = GoogleAnalytics
