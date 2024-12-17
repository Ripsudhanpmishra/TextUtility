// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <>
    <Navbar title = 'My App' aboutText = 'About'/>
    <FormComponent heading = 'Enter text below to Analyse'/>
    </>
  );
}

export default App;
