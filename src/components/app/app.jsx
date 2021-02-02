import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = ({offersCount}) => {
  return (
    <MainScreen
      offersCount={offersCount}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
