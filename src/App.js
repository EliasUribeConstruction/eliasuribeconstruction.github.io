
import './App.css';

import ImageTitle from './components/ImageTitle';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import PastWork from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageTitle />     

      {/* Main Section */}
      <main className="main">
        <About id="about" />
        <Services id="services" />
        <Portfolio id="portfolio" />
        <Footer id="footer" />
      </main>
    </div>
  );
}

export default App;
