'use strict'

function GoogleAnalytics() {}
GoogleAnalytics.trackScreenView = function (screenName) {}
GoogleAnalytics.trackEvent = function (category, action, optionalValues) {}
GoogleAnalytics.trackScreenViewWithCustomDimensionValues = function (screenName, customDimensionValues) {}
GoogleAnalytics.trackEventWithCustomDimensionValues = function (category, action, optionalValues, customDimensionValues) {}
GoogleAnalytics.trackTiming = function (category, value, optionalValues) {}
GoogleAnalytics.trackPurchaseEvent = function (product, transaction, eventCategory, eventAction) {}
GoogleAnalytics.trackException = function (error, fatal) {}
GoogleAnalytics.setUser = function (userId) {}
GoogleAnalytics.allowIDFA = function (enabled) {}
GoogleAnalytics.trackSocialInteraction = function (network, action, targetUrl) {}
GoogleAnalytics.setDryRun = function (enabled) {}
GoogleAnalytics.setDispatchInterval = function (intervalInSeconds) {}
GoogleAnalytics.setTrackUncaughtExceptions = function (enabled) {}
GoogleAnalytics.setAnonymizeIp = function (enabled) {}
GoogleAnalytics.setOptOut = function (enabled) {}
GoogleAnalytics.setAppName = function (appName) {}
GoogleAnalytics.setTrackerId = function (trackerId) {}
GoogleAnalytics.setAppVersion = function (appVersion) {}

function GoogleTagManager() {}
GoogleTagManager.openContainerWithId = function (containerId) {
  return Promise.resolve()
}
GoogleTagManager.boolForKey = function (key) {
  return Promise.resolve(true)
}
GoogleTagManager.stringForKey = function (key) {
  return Promise.resolve('dummy')
}
GoogleTagManager.doubleForKey = function (key) {
  return Promise.resolve(1)
}
function GoogleAnalyticsTracker(){}
GoogleAnalytics.GoogleAnalyticsTracker = GoogleAnalyticsTracker;
function GoogleAnalyticsSettings(){}
GoogleAnalyticsSettings.setDispatchInterval = function(interval){
  return Promise.resolve(interval);
}
GoogleAnalytics.GoogleAnalyticsSettings = GoogleAnalyticsSettings;

GoogleAnalytics.GoogleTagManager = GoogleTagManager;
module.exports = GoogleAnalytics;
