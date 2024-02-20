import React from 'react';
import ReactDOM from 'react-dom/client';

//Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

//Call Components
const AppLayout = () => {
  return (
    <div className='App'>
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
