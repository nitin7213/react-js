import React from 'react';

//Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import CoursePage from './components/CoursePage';
import NotFound from './components/NotFound';
import CourseSidebar from './components/CourseSIdebar';

//Call Components
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet context={{ hello: 'welcome' }} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, //Common Elements
    errorElement: <Error />,
    //Nested Routes
    children: [
      {
        index: true,
        element: <Container />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'course/',
        children: [
          {
            index: true,
            element: <CourseSidebar />,
          },
          {
            path: ':cid',
            element: <CoursePage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
