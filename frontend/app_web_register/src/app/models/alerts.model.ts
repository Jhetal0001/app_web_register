/**
 * Interface representing an information alert message.
 */
export interface InfoAlert {
  message: string;
  type: string;
}

/**
 * Interface representing CSS classes for different types of alerts.
 */
export interface AlertClass {
  [key: string]: string;
}
