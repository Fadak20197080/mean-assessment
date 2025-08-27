export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}
