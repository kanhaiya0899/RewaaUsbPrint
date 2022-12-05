import { WebPlugin } from '@capacitor/core';

import type { usbPrintPlugin } from './definitions';

export class usbPrintWeb extends WebPlugin implements usbPrintPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
