import { WebPlugin } from '@capacitor/core';
import type { usbPrintPlugin } from './definitions';
export declare class usbPrintWeb extends WebPlugin implements usbPrintPlugin {
    getPrinterStatus(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
