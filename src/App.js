import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'luna',
      animal: 'dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Tommy',
      animal: 'dog',
      breed: 'German Sheperad',
    }),
    React.createElement(Pet, {
      name: 'Dsee',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ]);
};
render(React.createElement(App), document.getElementById('root'));
