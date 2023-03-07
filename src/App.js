// import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Input from './components/input';
import Button from './components/button';


function App() {
  return (
    <>
    <form>
   <h1>Register here..</h1>
   <label>
    <input  className="input" name="myInput" value="mobile.."/>
 </label><br></br>
 
 <label>
    <input className="input" name="myInput" value="password.."  />
 </label><br />
 <button>Submit</button>
 
 </form>
 <form>
 <Heading text="Register Here.."/>
 <Input/>
 <Button text="Submit"/>
 </form>

 </>
  );
}

export default App;
