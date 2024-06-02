import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './components/Navigations';
import Maincontent from './components/Maincontent';
import Profile from './components/Profile';
import Footer from './components/Contact';

function App() {
  return (
    <div>
      <Navigations />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
