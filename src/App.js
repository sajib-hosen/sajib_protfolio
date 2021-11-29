import logo from './logo.svg';
import './App.css';
import TopBanner from './components/Pages/TopBanner.js/TopBanner';
import AboutMe from './components/Pages/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <AboutMe />
    </div>
  );
}

export default App;
