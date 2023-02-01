import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
