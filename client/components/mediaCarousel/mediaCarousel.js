import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './carouselButtons/carouselButton';
import styled from 'styled-components';

const MediaCarousel = ({ mediaList, imageClickHandler }) => {
  console.log(mediaList);
  const handleCarouselButtonClick = (e) => {
    console.log(e.target);
  }
  if (mediaList.length < 2) {
    return (<div></div>);
  }

  const [greaterThanSix, setGreaterThanSix] = useState(mediaList.length > 6 ? true : false);

  const Div = styled.div`
    height: 89px;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    display: inline-block;
    algin-items: center;
  `;

  const Image = styled.img`
    padding: 5px;
  `;

  console.log(greaterThanSix);
  return (
    <Div>
      {greaterThanSix ? <CarouselButton handleClick={handleCarouselButtonClick} left={true} /> : <></>}
      {mediaList.slice(0, 6).map(media => {
        return (
        <Image src={media.thumbnail || media.link} key={media.id} id={media.id} alt='dummy data' width={140} height={79} onClick={imageClickHandler} />
        )})
      }
      {greaterThanSix ? <CarouselButton handleClick={handleCarouselButtonClick} left={false} /> : <></>}

      { mediaList.slice(6, mediaList.length).map(media => (<Image src={media.thumbnail || media.link} key={media.id} id={media.id} link={media.link} thumbnail={media.thumbnail || null} gameId={media.game_id} alt='dummy data' width={140} height={79} onClick={imageClickHandler} style={{display: 'none'}} />)) }
    </Div>

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
