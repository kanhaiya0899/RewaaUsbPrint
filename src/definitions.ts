export interface usbPrintPlugin {
  getPrinterStatus(options: { value: string }): Promise<{ value: string }>;
  echo(options: { value: string }): Promise<{ value: string }>;
}
