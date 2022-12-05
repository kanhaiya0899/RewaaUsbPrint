import { registerPlugin } from '@capacitor/core';

import type { usbPrintPlugin } from './definitions';

const usbPrint = registerPlugin<usbPrintPlugin>('usbPrint', {
  web: () => import('./web').then(m => new m.usbPrintWeb()),
});

export * from './definitions';
export { usbPrint };
