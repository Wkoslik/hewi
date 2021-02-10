import './App.css';
import Hui from './AboutMe/Hui';
import Edgard from './AboutMe/Ed';
import WhitneyKoslik from './AboutMe/WhitneyKoslik'
import Ian from './AboutMe/Ian';

function App() {
  return (
    <div>

      <h1>HEWI</h1>
      <h2>Meet the Team!</h2>
      <div className="About-me-list">
        <Hui />
        <Edgard />
        <WhitneyKoslik />
        <Ian />
      </div>
    </div>
  );
}

export default App;
