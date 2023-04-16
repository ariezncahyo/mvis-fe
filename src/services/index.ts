// @/services

import { AnyObject } from "yup/lib/types";
import { HttpRequest } from "./http";
import { LoginBody } from "@/store/auth/types";
import { TChangePassword } from "@/store/user/types";

// * ===========================================================
/**
 * User login auth
 * @param body
 * @returns
 */
export function* login(body: LoginBody) {
  const { data }: AnyObject = yield HttpRequest.post('/auth/login', {...body});
  return data;
}


// * ===========================================================
/**
 * User
 * Change Password
 * @param body
 * @returns
 */
export function* changePassword(body: TChangePassword) {
  const { data }: AnyObject = yield HttpRequest.put('/user/change-password', {...body});
  return data;
}
