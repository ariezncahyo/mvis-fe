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
const DashboardPage = React.lazy(()=> import('@/pages/Dashboard'));

const PublicRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/forgot-password" element={<LoginPage/>} />
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
