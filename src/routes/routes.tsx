/* eslint-disable import/no-unused-modules */
import React from "react";
import {
  IoHomeOutline,
  IoAnalyticsOutline
} from "react-icons/io5";

const DashboardPage = React.lazy(()=> import('@/pages/Dashboard'));

// Public Route
const PublicRoute = [
  {
    title: "Login",
    element: '',
    path: "/login",
  },
  {
    title: "Forgot Password ",
    element: '',
    path: "/forgot-password",
  }
];

// Internal Route
const PrivateRoute = [
  {
    title: "Dashboard",
    element: <DashboardPage />,
    access: "view_dashboard",
    path: "/",
    icon: <IoHomeOutline/>
  },
];

export { PrivateRoute, PublicRoute }
