// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Name from './components/Name';
import Ankur from './components/Ankur';
import { red } from '@mui/material/colors';
import Button from './components/Button';
import Counter from './components/Counter';

<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;1,300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div className="App">
      <div></div>
      {/* props */}
      <Name myname={"2 + 2"} getfood="rice" />
      <Name myname="Ankur" getfood="biryani" />
      <br>
      </br>
      {/* <Button appearance="primary" variant="contained">Button</Button> */}
      <Button changeColor="green" />
      <br></br>
      <Counter />
    </div >
  );
}
export default App;
