var capacitorusbPrint = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
