import { WebPlugin } from '@capacitor/core';

import type { usbPrintPlugin } from './definitions';

export class usbPrintWeb extends WebPlugin implements usbPrintPlugin {

  async getPrinterStatus(options: { value: string }) {
    console.log('getPrinterStatus web 7', options);
    return options;
  }
  
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
