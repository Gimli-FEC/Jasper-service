import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ link, id }) => (
  <img src={link} key={id} alt='dummy data'  width='1120' height='630'/>
);

Img.propTypes = {
  link: PropTypes.string,
  id: PropTypes.number,
};

Img.defaultProps = {
  link: 'https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg',
  id: 1,
};

export default Img;
