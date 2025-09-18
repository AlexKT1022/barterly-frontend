import { createBrowserRouter } from 'react-router';

import RootLayout from './layouts/RootLayout';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFoundPage from './pages/NotFoundPage';
import postsLoader from './loaders/postsLoader';
import postLoader from './loaders/postLoader';
import HowItWorks from './pages/HowItWorks';

import profileLoader from './loaders/profileLoader';

import About from "./pages/About";


const routes = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: 'profile',
        Component: Profile,
        loader: profileLoader,
      },
      {
        path: 'categories',
        Component: Categories,
        loader: postsLoader,
      },
      {
        path: 'product/:id',
        Component: ProductDetails,
        loader: postLoader,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
      {
        path: '/how-it-works',
        Component: HowItWorks,


      },
      {
        path: '/about',
        Component: About,

      },
    ],
  },
];

const App = createBrowserRouter(routes);

export default App;
