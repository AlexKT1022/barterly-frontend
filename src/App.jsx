import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";

import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFoundPage from "./pages/NotFoundPage";
import HowItWorks from "./pages/HowItWorks";
import PostsPage from "./pages/Postpage";
import About from "./pages/About";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

import profileLoader from "./loaders/profileLoader";
import postsLoader from "./loaders/postsLoader";
import postLoader from "./loaders/postLoader";
import usersLoader from "./loaders/usersLoader";
import userLoader from "./loaders/userLoader";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "profile", Component: Profile, loader: profileLoader },
      { path: "categories", Component: Categories, loader: postsLoader },
      { path: "product/:id", Component: ProductDetails, loader: postLoader },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "/how-it-works", Component: HowItWorks },
      { path: "/about", Component: About },
      { path: "users", Component: Users, loader: usersLoader },
      { path: "user/:id", Component: UserProfile, loader: userLoader },
      { path: "/posts", Component: PostsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
