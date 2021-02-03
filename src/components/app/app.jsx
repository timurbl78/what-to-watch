import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import MovieCard from '../movie-card/movie-card.jsx';

const App = (props) => {
  return (
    <React.Fragment>
      <MovieCard />
      <WelcomeScreen />
    </React.Fragment>
  );
};

export default App;
