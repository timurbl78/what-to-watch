import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import MovieCard from '../movie-card/movie-card.jsx';

const App = (props) => {
  const {movies} = props;

  return (
    <React.Fragment>
      <MovieCard />
      <WelcomeScreen movies={movies}/>
    </React.Fragment>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
