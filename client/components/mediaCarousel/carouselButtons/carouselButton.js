import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselButton = ({ title, handleClick, left }) => {

  const [hovered, changeHoverState] = useState(false);

  const Button = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    height: 48px;
    width: 48px;
    min-height: 0;
    font-weight: 400;
    font-size: 2rem;
    margin: 0;
  `;

  return (
    <Button onMouseOver={(e) => changeHoverState(true)} onMouseLeave={(e) => changeHoverState(false)} onClick={handleClick}>
      <svg height="48" width="48" viewbox="0 0 48 48">
        <path stroke={hovered ? "black" : "grey"} d={ left ? "M31 12 L17 24.5 L31 36" : "M17 12 L31 24.5 L17 36"} fill="none" stroke-width="2" />
      </svg>
    </Button>
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
