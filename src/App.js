
import './App.css';

import ImageTitle from './components/ImageTitle';
import About from './components/About';
import CustomersSay from './components/CustomersSay';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageTitle />     

      {/* Main Section */}
      <main className="main">
        <About id="about" />
        <Services id="services" />
        <CustomersSay id="customers-say" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;
