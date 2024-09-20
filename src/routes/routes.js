import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignUpPage/SignupPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SettingsPage from "../pages/ProfilePage/SettingsPage/SettingsPage";
import PostsPage from "../pages/ProfilePage/PostsPage/PostsPage";
import CommentsPage from "../pages/ProfilePage/CommentsPage/CommentsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    children: [
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "comments",
        element: <CommentsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
