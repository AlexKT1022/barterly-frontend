import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";


const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: 'categories',
        Component: Categories,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
