// @/store/auth/types

export type TChangePassword = {
  old_password: string;
  new_password: string;
  confirm_password: string
}

export type TUser = {
  public_id?: string,
  name: string,
  username: string,
  email: string,
  photo?:string,
  created_at?:string,
  updated_at?: string
}
