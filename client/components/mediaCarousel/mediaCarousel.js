import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './carouselButtons/carouselButton';
import styled, { key } from 'styled-components';

const MediaCarousel = ({ mediaList, imageClickHandler }) => {
  if (mediaList.length < 2) {
    return (<div></div>);
  }

  const [greaterThanSix, setGreaterThanSix] = useState(mediaList.length > 6 ? true : false);

  const ImagesDiv = styled.div`
    overflow: hidden;
    transform-style: preserve-3d;
  `;

  const ContainerDiv = styled.div`
    display: flex;
    width: 795px;
    white-space: nowrap;
    margin: 0 auto;
  `;

  const Image = styled.img`
    margin: 10px;
    transition: transform .5s, opacity .5s, z-index .5s;
  `;

  const handleCarouselButtonClick = (e, left) => {
  }

  const shiftCarousel = (direction, n) => {

  }

  return (
    <ContainerDiv>
      {greaterThanSix ? <CarouselButton handleClick={handleCarouselButtonClick} left={true} /> : <></>}
      <ImagesDiv>
        {mediaList.map(media => {
          return (
          <Image src={media.thumbnail || media.link} key={media.id} id={media.id} alt='dummy data' width={96} height={53.75} onClick={imageClickHandler} />
          )})
        }
      </ImagesDiv>
      {greaterThanSix ? <CarouselButton handleClick={handleCarouselButtonClick} left={false} /> : <></>}
    </ContainerDiv>
  );
};

MediaCarousel.propTypes = {
  mediaList: PropTypes.array,
  linkType: PropTypes.string,
  imageClickHandler: PropTypes.function,
};

MediaCarousel.defaultProps = {
  mediaList: [
    {
      id: 1000,
      link: 'https://www.youtube.com/embed/2BBINlk3vv0',
      thumbnail: 'https://i.ytimg.com/vi/0uFDfQu7D5k/default.jpg',
      game_id: 100,
    },
    {
      id: 1000,
      link: 'https://www.youtube.com/embed/2BBINlk3vv0',
      thumbnail: 'https://i.ytimg.com/vi/0uFDfQu7D5k/default.jpg',
      game_id: 100,
    },
  ],
  imageClickHandler: (e) => console.log(e),
};

export default MediaCarousel;
