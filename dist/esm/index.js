import { registerPlugin } from '@capacitor/core';
const usbPrint = registerPlugin('usbPrint', {
    web: () => import('./web').then(m => new m.usbPrintWeb()),
});
export * from './definitions';
export { usbPrint };
//# sourceMappingURL=index.js.map