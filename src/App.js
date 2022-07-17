import './App.css';
import Dastavqa from './components/dastavqa/Dastavqa';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Dastavqa />
      <Footer />
    </div>
  );
}

export default App;
