import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const MediaCarousel = ({ mediaList, imageClickHandler }) => {
  if (mediaList.length < 2) {
    return (<div></div>);
  }

  const [greaterThanSix, setGreaterThanSix] = useState(mediaList.length > 6 ? true : false);

  const [leftHovered, changeLeftHoverState] = useState(false);
  const [rightHovered, changeRightHoverState] = useState(false);

  const ContainerDiv = styled.div`
    display: flex;
    width: 795px;
    white-space: nowrap;
    margin: 0 auto;
  `;

  const ImagesDiv = styled.div`
    overflow: hidden;
    transform-style: preserve-3d;
  `;

  const SwipeLeft = keyframes`
    0% { left: 0px; }
    100% { left: -113px; }
  `;

  const Image = styled.img`
    margin: 10px;
    position: relative;
    animation-name: ${SwipeLeft};
    animation-duration: 1s;
    animation-fill-mode:forwards;
  `;

  const LeftButton = styled.button`
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
    padding: 0;
  `;

  const RightButton = styled.button`
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
  padding: 0;
`;


  return (
    <ContainerDiv>
      {greaterThanSix ?
        <LeftButton onMouseOver={(e) => changeLeftHoverState(true)} onMouseLeave={(e) => changeLeftHoverState(false)} >
          <svg height="48" width="48" viewbox="0 0 48 48">
            <path stroke={leftHovered ? "black" : "grey"} d={"M31 12 L17 24.5 L31 36"} fill="none" stroke-width="2" />
          </svg>
        </LeftButton> : <></>}
      <ImagesDiv>
        {mediaList.map(media => {
          return (
          <Image src={media.thumbnail || media.link} key={media.id} id={media.id} alt='dummy data' width={96} height={53.75} onClick={imageClickHandler} />
          )})
        }
      </ImagesDiv>
      {greaterThanSix ?
        <RightButton onMouseOver={(e) => changeRightHoverState(true)} onMouseLeave={(e) => changeRightHoverState(false)} >
          <svg height="48" width="48" viewbox="0 0 48 48">
            <path stroke={rightHovered ? "black" : "grey"} d={"M17 12 L31 24.5 L17 36"} fill="none" stroke-width="2" />
          </svg>
        </RightButton> : <></>}
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
