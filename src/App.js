import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='app'>
      <div className='wrapper'>
      <Header />
      <Hero />
      <Footer />
      </div>
    </div>
  );
}

export default App;
