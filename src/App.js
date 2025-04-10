// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState(false);

  return (
    <>
    <Navbar title = 'My App' aboutText = 'About' mode ='dark'/>
    <FormComponent heading = 'Enter text below to Analyse'/>
    </>
  );
}

export default App;
