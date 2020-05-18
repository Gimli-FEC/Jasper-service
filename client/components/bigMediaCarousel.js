import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoPlayer from './videoPlayer';
import Img from './img';

const Div = styled.div`
  display: flex;
  width: 1220px;
  margin: 0 auto;
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
    };
  }


  componentDidMount() {
    this.setState({
      featuredMedia: this.props.featured,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.featured !== this.props.featured) {
      this.setState({
        featuredMedia: this.props.featured,
      });
    }
  }


  render() {
    const { featured, handleButtonClick, length } = this.props;
    if (this.state.featuredMedia.link === 'none') {
      return (<></>);
    }
    return (
      <Div>
        {
        length > 1 ?
         (
          <LeftButton onMouseOver={(e) => this.setState({leftHovered: true,})} onMouseLeave={(e) => this.setState({leftHovered: false,})} onClick={(e) => handleButtonClick(e, true)} >
              <svg height="48" width="48" viewbox="0 0 48 48" id={this.state.featuredMedia.id}>
                <path stroke={this.state.leftHovered ? "black" : "grey"} d="M31 12 L17 24.5 L31 36" fill="none" stroke-width="2" />
              </svg>
            </LeftButton>
          ) : <></>
        }

        {this.state.featuredMedia.thumbnail ?
          <VideoPlayer link={this.state.featuredMedia.link} id={this.state.featuredMedia.id}/> :
          <Img link={this.state.featuredMedia.link} id={this.state.featuredMedia.id}/>
        }

        {
        length > 1 ?
          (
            <LeftButton onMouseOver={(e) => this.setState({leftHovered: true,})} onMouseLeave={(e) => this.setState({leftHovered: false,})} onClick={(e) => handleButtonClick(e, false)} >
              <svg height="48" width="48" viewbox="0 0 48 48" id={this.state.featuredMedia.id}>
                <path stroke={this.state.leftHovered ? "black" : "grey"} d="M17 12 L31 24.5 L17 36" fill="none" stroke-width="2" />
              </svg>
            </LeftButton>
          ) : <></>
        }
      </Div>
    );
  }
}


export default BigMediaCarousel;
