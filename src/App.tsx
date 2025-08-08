import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;