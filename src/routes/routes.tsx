/* eslint-disable import/no-unused-modules */
import React from "react";
import {
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineLock,
  AiOutlineFile
} from "react-icons/ai";

const DashboardPage = React.lazy(()=> import('@/pages/Dashboard'));
const UserPage = React.lazy(()=> import('@/pages/User'));
const ChangePasswordPage = React.lazy(()=> import('@/pages/ChangePassword'));
const PostPage = React.lazy(()=> import('@/pages/Post'));

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
    title: "Home",
    element: <DashboardPage />,
    access: "view_dashboard",
    path: "/",
    icon: <AiOutlineHome/>
  },
  {
    title: "User",
    element: <UserPage />,
    access: "view_user",
    path: "/user",
    icon: <AiOutlineProfile/>
  },
  {
    title: "Change Password",
    element: <ChangePasswordPage />,
    access: "view_change_password",
    path: "/user/change-password",
    icon: <AiOutlineLock/>
  },
  {
    title: "Post",
    element: <PostPage />,
    access: "view_post",
    path: "/post",
    icon: <AiOutlineFile/>
  },
];

export { PrivateRoute, PublicRoute }
