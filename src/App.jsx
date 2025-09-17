import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import postsLoader from "./loaders/postsLoader";

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
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
