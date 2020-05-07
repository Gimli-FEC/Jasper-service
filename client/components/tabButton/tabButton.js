import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ title, handleClick }) => (
    <button onClick={handleClick}>{title}</button>
);

TabButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.function,
};

TabButton.defaultProps = {
  title: 'defaultButton',
  handleClick: (e) => console.log('defaultProp', e),
};

export default TabButton;
