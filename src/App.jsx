/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import { Layout, Home, Login, Signup, PasswordReset } from "./pages";
import {
  Layout,
  Home,
  Login,
  Signup,
  PasswordReset,
  Membership,
  Exercises,
  ExerciseDetails,
  Dashboard,
  Profile,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/exercises",
          element: <Exercises />,
        },
        {
          path: "/exercises/:id",
          element: <ExerciseDetails />,
        },
        {
          path: "/membership",
          element: <Membership />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login/password_reset",
          element: <PasswordReset />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
