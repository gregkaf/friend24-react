import Features from 'ui/Features/index';
import HowIt from 'ui/HowIt/index';
import Slogan from 'ui/Slogan/index';
import './css/styles.css';
import Header from './ui/Header';

function App() {
  return (
    <div>
      <Header />
      <Slogan />
      <HowIt />
      <Features />
    </div>
  );
}

export default App;
