import React from 'react';
import './App.css';
import 'style/custom.css'
import "survey-react/modern.css";
import { MigalaRegistro } from 'components/MigalaRegistro'
import { Header } from 'components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <MigalaRegistro />
    </div>
  );
}

export default App;
