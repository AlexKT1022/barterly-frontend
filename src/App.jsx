import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

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
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
