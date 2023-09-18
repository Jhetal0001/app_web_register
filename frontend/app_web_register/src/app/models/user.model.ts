/**
 * Interface representing user data.
 */
export interface User {
  id?: number;
  userName: string;
  password?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address?: string;
  city?: string;
  country?: string;
  gender?: string;
  birthDate?: Date;
  registrationDate?: Date;
}
