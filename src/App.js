import React, { useState } from 'react';
import Bigcountermoments from './Bigcountermoments.js';
import Bigstupidmoments from './Bigstupidmoments.js';

export const contextTheme = React.createContext()

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <>
      <contextTheme.Provider value={{ backgroundColor: theme }}>
        <Bigcountermoments initialCount={0} />
        <Bigstupidmoments initialCount={0} />
        <button onClick = {() => setTheme(prevTheme => { return prevTheme === 'red' ? 'blue' : 'red'})}>Toggle Theme</button>
      </contextTheme.Provider>
    </>
  );
}

export default App;
