import logo from './logo.svg';
import './App.css';
import WhitneyKoslik from './AboutMe/WhitneyKoslik'
import Edgard from './AboutMe/Ed';

function App() {
  return (
    <div>
    <h1>HEWI</h1>
    <h2>Meet the Team!</h2>
    <div className="About-me-list">
      <WhitneyKoslik />
      <Edgard/>
    </div>
    </div>
  );
}

export default App;
