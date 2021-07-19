import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
const App = () => {
  return (
    <div>
      <h1 id='something-important'>Adopt Me!</h1>
      <Pet name='Luna' animal='Dog' breed='German'></Pet>
      <Pet name='Alex' animal='Bird' breed='German'></Pet>
      <Pet name='Jima' animal='Tiger' breed='German'></Pet>
    </div>
  );
};
render(<App />, document.getElementById('root'));
