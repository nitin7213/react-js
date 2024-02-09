import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

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
