import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
        loader: postsLoader,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "categories",
        Component: Categories,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
      {
        path: "login",
        Component: Login,
      },
      { path: "register", Component: Register },
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
