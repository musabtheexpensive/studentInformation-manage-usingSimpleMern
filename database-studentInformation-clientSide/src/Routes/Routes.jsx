import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import AllStudent from "../pages/AllStudent";
import StudentForm from "../pages/StudentForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <StudentForm></StudentForm>,
      },
      {
        path: "/allStudent",
        element: <AllStudent></AllStudent>,
        loader: () => fetch("http://localhost:5001/students"),
      },
    ],
  },
]);
