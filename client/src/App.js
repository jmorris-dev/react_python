import React from "react";
import './App.css';
import InfoCard from './components/InfoCard';
import Form from './components/Form';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <InfoCard />
      </header>
    </div>
  );
}

export default App;