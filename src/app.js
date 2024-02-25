import React from 'react';
import ReactDOM from 'react-dom/client';

//Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import CoursePage from './components/CoursePage';

//Call Components
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Container />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/course/:cid',
        element: <CoursePage />,
      },
      // {
      //   path: '*',
      //   element: <Error />,
      // },
    ],
    errorElement: <Error />,
  },
]);

export default router;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

/*
 * AppLayout
 * --Header
 * ----Logo
 * ----Nav Items
 * --Container
 * ----Search
 * ----Card
 * --Footer
 * ----Footer Items
 * ----Copyright
 */
