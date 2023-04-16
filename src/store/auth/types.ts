// @/store/auth/types

export type LoginBody = {
  username: string;
  password: string;
  from?: string
}

export type TRegister = {
  name: string;
  username: string;
  email: string,
  password: string,
}
