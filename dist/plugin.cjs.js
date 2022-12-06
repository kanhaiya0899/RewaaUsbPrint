'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const usbPrint = core.registerPlugin('usbPrint', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.usbPrintWeb()),
});

class usbPrintWeb extends core.WebPlugin {
    async getPrinterStatus(options) {
        console.log('getPrinterStatus web 7', options);
        return options;
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    usbPrintWeb: usbPrintWeb
});

exports.usbPrint = usbPrint;
//# sourceMappingURL=plugin.cjs.js.map
