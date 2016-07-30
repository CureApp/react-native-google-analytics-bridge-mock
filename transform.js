module.exports = function () {
    return {
        visitor: {
            ImportDeclaration: function(path) {
                if (path.node.source.value === 'react-native-google-analytics-bridge') {
                    path.node.source.value = 'react-native-google-analytics-bridge-mock'
                }
            }
        }
    }
}
