const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h3', {}, breed),
  ]);
};
const xx = 5;
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
ReactDOM.render(React.createElement(App), document.getElementById('root'));
