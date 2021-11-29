import logo from './logo.svg';
import './App.css';
import TopBanner from './components/Pages/TopBanner.js/TopBanner';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import MyProjects from './components/Pages/MyProjects.js/MyProjects';
import ContructForm from './components/Pages/ContructForm/ContructForm';
import Footer from './components/Pages/Footer/Footer';


function App() {
  return (
    <div className=" bg-gray-700">
      <TopBanner/>
      <AboutMe />
      <MyProjects />
      <ContructForm />
      <Footer />
    </div>
  );
}

export default App;
