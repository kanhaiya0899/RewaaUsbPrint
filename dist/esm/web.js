import { WebPlugin } from '@capacitor/core';
export class usbPrintWeb extends WebPlugin {
    async getPrinterStatus(options) {
        console.log('getPrinterStatus web 7', options);
        return options;
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map