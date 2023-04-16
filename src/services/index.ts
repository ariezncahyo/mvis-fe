// @/services

import { AnyObject } from "yup/lib/types";
import { HttpRequest } from "./http";
import { LoginBody } from "@/store/auth/types";

/**
 * ===========================================================
 * Auth
 */

/**
 * User login auth
 * @param body
 * @returns
 */
export function* login(body: LoginBody) {
  const { data }: AnyObject = yield HttpRequest.post('/auth/login', {...body});
  return data;
}

