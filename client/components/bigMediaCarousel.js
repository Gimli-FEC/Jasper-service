import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import VideoPlayer from './videoPlayer';
import Img from './img';


const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Div = styled.div`
  display: flex;
  width: 1216px;
  margin: 0 auto;
`;

const ImagesDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
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


class BigMediaCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftHovered: false,
      rightHovered: false,
      featuredMedia: {link: 'none',},
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.featured !== this.props.featured) {
      this.setState({
        featuredMedia: this.props.featured,
      });
    }
  }

  componentDidMount() {
    this.setState({
      featuredMedia: this.props.featured,
    });
  }

  render() {
    const { featured, handleButtonClick } = this.props;
    console.log("featured", this.state.featuredMedia)
    if (this.state.featuredMedia.link === 'none') {
      return (<></>)
    }
    return (
      <Div>
          <LeftButton onMouseOver={(e) => this.setState({leftHovered: true,})} onMouseLeave={(e) => this.setState({leftHovered: false,})} onClick={handleButtonClick}>
            <svg height="48" width="48" viewbox="0 0 48 48">
              <path stroke={this.state.leftHovered ? "black" : "grey"} d={"M31 12 L17 24.5 L31 36"} fill="none" stroke-width="2" />
            </svg>
          </LeftButton>

          {this.state.featuredMedia.thumbnail ?
            <VideoPlayer link={this.state.featuredMedia.link} id={this.state.featuredMedia.id}/> :
            <Img link={this.state.featuredMedia.link} id={this.state.featuredMedia.id}/>
          }

        <RightButton onMouseOver={(e) => this.setState({rightHovered: true,})} onMouseLeave={(e) => this.setState({rightHovered: false,})} onClick={handleButtonClick} >
          <svg height="48" width="48" viewbox="0 0 48 48">
            <path stroke={this.state.rightHovered ? "black" : "grey"} d={"M17 12 L31 24.5 L17 36"} fill="none" stroke-width="2" />
          </svg>
        </RightButton>

      </Div>
    );
  }
};


export default BigMediaCarousel;
