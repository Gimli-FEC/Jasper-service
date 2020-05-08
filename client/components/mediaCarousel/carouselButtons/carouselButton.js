import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ title, handleClick }) => {
  return (
    <button onClick={handleClick}>{title}</button>
  );
};

CarouselButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.function,
};

CarouselButton.defaultProps = {
  title: '<',
  handleClick: (e) => console.log(e),
};

export default CarouselButton;
