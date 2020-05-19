import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = styled.a`
  height: 46.4px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 1px;
  :hover {
    background-color: #d6d6d6;
  }
  :active {
    border-top: 3px solid #de2121;
  }
`;

const TabButton = ({ title, handleClick, featured }) => (
  <A onClick={handleClick} style={{borderTop: featured ? '3px solid #de2121' : '#cccccc'}}>{title}</A>
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
