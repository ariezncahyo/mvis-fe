// @/services

import { AnyObject } from "yup/lib/types";
import { HttpRequest } from "./http";
import { LoginBody, TRegister } from "@/store/auth/types";
import { TChangePassword } from "@/store/user/types";
import { TPost } from "@/store/post/types";

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

/**
 * User
 * Register
 * @param body
 * @returns
 */
export function* register(body: TRegister) {
  const { data }: AnyObject = yield HttpRequest.post('/auth/register', {...body});
  return data;
}

/**
 * User
 * Get User
 * @returns
 */
export function* getUser() {
  const { data }: AnyObject = yield HttpRequest.get('/user');
  return data;
}

/**
 * User
 * Update User
 * @returns
 */
export function* updateUser(body: any) {
  const { data }: AnyObject = yield HttpRequest.put('/user', ...body);
  return data;
}


// * ===========================================================
/**
 * Post
 * Get Post
 * @param body
 * @returns
 */
export function* getPost(body: any) {
  const { data }: AnyObject = yield HttpRequest.get('/post', {params: {...body}});
  return data;
}

/**
 * Post
 * Delete Post
 * @param body
 * @returns
 */
export function* deletePost(post_id: any) {
  const { data }: AnyObject = yield HttpRequest.delete(`/post/${post_id}`);
  return data;
}
