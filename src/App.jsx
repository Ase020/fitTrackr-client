/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { UserContext } from "./context/user";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
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
  Workout,
  AddExercise,
  Myprofile,
} from "./pages";

const App = () => {
  const [user, setUser, isLoggedin, setIsLoggedin] = useContext(UserContext);

  const handleLogin = (user) => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    setIsLoggedin(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout user={user} onLogout={handleLogout} isLoggedin={isLoggedin} />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: "/signup",
          element: <Signup onLogin={handleLogin} />,
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
          path: "/myprofile",
          element: <Myprofile />,
        },
        {
          path: "/add-exercise",
          element: <AddExercise />,
        },
        {
          path: "/workouts",
          element: <Workout />,
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
