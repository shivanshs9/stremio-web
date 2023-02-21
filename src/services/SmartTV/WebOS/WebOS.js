function WebOS() {
    const existingScript = document.getElementById('sdkWebOS');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = `${process.env.COMMIT_HASH}/scripts/webos/webOSTV.js`;
        script.id = 'sdkWebOS';
        document.body.appendChild(script);
        script.onload = init;
    }
    if (existingScript) init();

    function init() {
        console.log('init')
    }

    this.destroy = function () {
        console.log('destroy')
    }

    this.name = 'webOS';
}

module.exports = WebOS;
