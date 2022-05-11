import './App.css';
import Reset from './components/reset';
import Timer from './components/timer';


function App() {
  return (
    <div className="App">
      <Timer className ="timer1" />
      <Reset />
      <Timer className ="timer2" />
    </div>
  );
}

export default App;
