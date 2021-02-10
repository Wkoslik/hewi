import './App.css';
import WhitneyKoslik from './AboutMe/WhitneyKoslik'
import Ian from './Ian';


function App() {
  return (
    <div>
      <h1>HEWI</h1>
      <h2>Meet the Team!</h2>
      <div className="About-me-list">
        <WhitneyKoslik />
        <Ian />
      </div>
    </div>
  );
}

export default App;
