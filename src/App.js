import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import GuessTheNumber from './Components/GuessTheNumber/GuessTheNumber';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <>
  
      <GuessTheNumber/>

    <Mainpage/>

      
    </>
  )
}

export default App;
