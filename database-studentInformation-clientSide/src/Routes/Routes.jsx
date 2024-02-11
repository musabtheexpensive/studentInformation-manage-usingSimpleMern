import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import StudentForm from "../pages/studentForm";
import AllStudent from "../pages/AllStudent";
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
