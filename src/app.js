import React from 'react';

//Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

//Call Components
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};
export default App;
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
