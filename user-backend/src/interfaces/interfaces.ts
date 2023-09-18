export interface UserAttributes {
   id: number;
   firstname: string;
   lastname: string;
   email: string;
   password: string;
 }

export interface UserValidation {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserLoginValidation {
  email: string;
}