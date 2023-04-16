import React, { ReactElement, Suspense, useEffect } from 'react';
import { Navigate, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const LoginPage = React.lazy(()=> import('@/pages/Login'));
const RegisterPage = React.lazy(()=> import('@/pages/Register'));
const DashboardPage = React.lazy(()=> import('@/pages/Dashboard'));
const UserPage = React.lazy(()=> import('@/pages/User'));
const ChangePasswordPage = React.lazy(()=> import('@/pages/ChangePassword'));
const PostPage = React.lazy(()=> import('@/pages/Post'));

const PublicRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </>
));

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path="/"
      element={<DashboardPage/>}
      handle={{
        crumb: () => <Link to="/">Home</Link>
      }}
    />
    <Route
      path="/user"
      element={<UserPage/>}
      handle={{
        crumb: () => <Link to="/">User</Link>
      }}
    />
        <Route
      path="/user/change-password"
      element={<ChangePasswordPage/>}
      handle={{
        crumb: () => <Link to="/user/change-password">Change Password</Link>
      }}
    />
        <Route
      path="/post"
      element={<PostPage/>}
      handle={{
        crumb: () => <Link to="/post">Post</Link>
      }}
    />
    <Route path="*" element={<Navigate replace to="/" />} />
  </>
));

const Router = (): ReactElement => {
  const { isLogin } = useAppSelector(state=>state.auth);

  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={isLogin ? AppRouter : PublicRouter} />
    </Suspense>
  );
}

export default Router;
