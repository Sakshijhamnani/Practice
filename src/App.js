// import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Button from './components/Button';

function App() {
  return (
    <>
    <h1>I am heading one...from first component</h1>
    <h2>I am heading two ...from second component</h2>
    <h3>I am heading three ...from third component</h3>
    <button>Click Me !!</button>
    <First/>
    <Second/>
    <Third/>
    <Button/>
    </>
  );
}

export default App;
