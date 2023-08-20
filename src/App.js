import logo from './logo.svg';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <h2>Ravenous</h2>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;