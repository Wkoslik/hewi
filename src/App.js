import logo from './logo.svg';
import './App.css';
import Hui from './Hui';
import WhitneyKoslik from './AboutMe/WhitneyKoslik'

function App() {
  return (
    <div>
    <h1>HEWI</h1>
    <h2>Meet the Team!</h2>
    <div className="About-me-list">
      <Hui />
      <WhitneyKoslik />
    </div>
    </div>
  );
}

export default App;
