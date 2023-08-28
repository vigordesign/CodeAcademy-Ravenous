import logo from './logo.svg';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
}

const businesses = [business, business, business, business, business, business];

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h2>Ravenous</h2>
      </div>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;