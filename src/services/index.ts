// @/services

import { AnyObject } from "yup/lib/types";
import { HttpRequest } from "./http";
import { LoginBody } from "@/store/auth/types";
import { TBusinessFormValues } from "@/store/activity/types";


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
  const { data }: AnyObject = yield HttpRequest.post('/login', {...body, from: 'web'});
  return data;
}

