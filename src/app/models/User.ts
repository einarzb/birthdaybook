export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?:string;
  hobbies?: string[];
  friends?: string[];
  birthday: any;
}