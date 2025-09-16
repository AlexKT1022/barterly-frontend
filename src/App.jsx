import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
