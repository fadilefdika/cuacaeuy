import './App.css';
import Info from './components/info/info';
import Main from './components/main/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="body">
      <Navbar />
      <div className="weather">
        <div className="item-satu">
          <Main />
        </div>
        <div className="item-dua">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
