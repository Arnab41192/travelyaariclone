import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SearchSection from './components/SearchSection';
import Locations from './components/Locations';
import PopularPlaces from './components/PopularPlaces';
import FollowTravelYaari from './components/FollowTravelYaari';
import PhotoGallery from './components/PhotoGallery';
import { ContactSection } from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Navbar/>
      <Slider/>
      <SearchSection/>
      <Locations/>
      <PopularPlaces/>
      <FollowTravelYaari/>
      <PhotoGallery/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
