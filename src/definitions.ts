export interface usbPrintPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
