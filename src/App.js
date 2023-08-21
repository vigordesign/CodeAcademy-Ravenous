import logo from './logo.svg';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h2>Ravenous</h2>
      </div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;