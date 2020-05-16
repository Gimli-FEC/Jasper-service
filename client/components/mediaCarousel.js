import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ContainerDiv = styled.div`
  display: flex;
  width: 792px;
  white-space: nowrap;
  margin: 0 auto;
`;

const ImagesDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  cursor: pointer;
  margin: 7px;
  padding: 3;

  position: relative;
  animation: ${fadeIn} 1s;
  :active {
    border: 2px solid black;
  }
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
  margin: auto 0;
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
    margin: auto 0;
`;


class MediaCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftHovered: false,
      rightHovered: false,
      currentArr: props.mediaList,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mediaList !== this.props.mediaList) {
      this.setState({
        currentArr: this.props.mediaList,
      });
    }
  }

  componentDidMount() {
      this.setState({
        currentArr: this.props.mediaList,
      });
  }

  handleLeftButtonClick(e) {
    var newArr = this.state.currentArr.slice(0);
    newArr.shift();
    newArr.push(this.state.currentArr[0])
    this.setState({
      currentArr: newArr,
    });
  }

  handleRightButtonClick(e) {
    var newArr = this.state.currentArr.slice(0);
    newArr.pop();
    newArr.unshift(this.state.currentArr[this.state.currentArr.length - 1])
    this.setState({
      currentArr: newArr,
    });
  }



  render() {
    const { mediaList, imageClickHandler } = this.props;
    console.log('state', this.state);
    if (mediaList.length < 2) {
      return (<div></div>);
    }
    return (
      <ContainerDiv>

        {
        mediaList.length > 6 ?
          <LeftButton onMouseOver={(e) => this.setState({leftHovered: true,})} onMouseLeave={(e) => this.setState({leftHovered: false,})} onClick={this.handleLeftButtonClick.bind(this)}>

            <svg height="48" width="48" viewbox="0 0 48 48">
              <path stroke={this.state.leftHovered ? "black" : "grey"} d={"M31 12 L17 24.5 L31 36"} fill="none" stroke-width="2" />
            </svg>

          </LeftButton> : <></>
        }

        <ImagesDiv length={this.state.currentArr.length}>
          {this.state.currentArr.slice(0, 6).map(media => {
            return (
              <Image key={media.id} id={media.id} alt='dummy data' onClick={(e) => imageClickHandler(e)}  src={media.thumbnail || media.link} width={96} height={53.75} />
            )})
          }
        </ImagesDiv>

        {
        mediaList.length > 6 ?
          <RightButton onMouseOver={(e) => this.setState({rightHovered: true,})} onMouseLeave={(e) => this.setState({rightHovered: false,})} onClick={this.handleRightButtonClick.bind(this)} >

            <svg height="48" width="48" viewbox="0 0 48 48">
              <path stroke={this.state.rightHovered ? "black" : "grey"} d={"M17 12 L31 24.5 L17 36"} fill="none" stroke-width="2" />
            </svg>

          </RightButton> : <></>
        }

      </ContainerDiv>
    );
  }
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
