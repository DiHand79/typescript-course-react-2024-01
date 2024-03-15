import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage.tsx";
import UserEditPage from "./pages/UserEditPage/UserEditPage.tsx";
import UserCreatePage from "./pages/UserCreatePage/UserCreatePage.tsx";
import UserDeletePage from "./pages/UserDeletePage/UserDeletePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/users/edit/:id",
    element: <UserEditPage />,
  },
  {
    path: "/users/delete/:id",
    element: <UserDeletePage />,
  },
  {
    path: "/users/new",
    element: <UserCreatePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
