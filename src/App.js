import Features from 'ui/Features/index';
import Footer from 'ui/Footer/index';
import HowIt from 'ui/HowIt/index';
import InTouch from 'ui/InTouch/index';
import Slogan from 'ui/Slogan/index';
import WhatTo from 'ui/WhatTo/index';
import './css/styles.css';
import Header from './ui/Header';

function App() {
  return (
    <div>
      <Header />
      <Slogan />
      <HowIt />
      <Features />
      <InTouch />
      <WhatTo />
      <Footer />
    </div>
  );
}

export default App;
