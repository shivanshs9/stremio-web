const React = require('react');
const WebOS = require('./WebOS');

var smartTV = null;

const useSmartTV = () => {
    return React.useEffect(() => {
        const deviceAgent = navigator.userAgent.toLowerCase();
        // var smartTV = null;
        if (deviceAgent.match(/web0s|webos/)) {
            console.log('selected WebOS')
            smartTV = new WebOS();
        }
        return () => {
            if (smartTV !== null) smartTV.destroy();
        }
    })
};

module.exports = {
    useSmartTV,
    smartTV
};
