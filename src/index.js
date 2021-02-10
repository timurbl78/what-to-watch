import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  MOVIES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Catch me if you can`]
};

ReactDOM.render(
    <App movies={Settings.MOVIES}/>,
    document.querySelector(`#root`)
);
