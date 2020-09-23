import React from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {
  const spaces = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
  return (
    <div className="App">
      <h1>X and O</h1>
      <p>X and O is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
      <Grid spaces={spaces} />
    </div>
  );
}

export default App;
