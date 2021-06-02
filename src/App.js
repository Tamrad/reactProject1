import React from 'react';
import Bigcountermoments from './bigcountermoments.js';
import Bigstupidmoments from './bigstupidmoments.js';

function App() {
  return (
    <>
      <Bigcountermoments initialCount={0} />
      <Bigstupidmoments initialCount={0} />
    </>
  );
}

export default App;
