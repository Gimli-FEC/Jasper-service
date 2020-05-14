import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Details = ({ text, id }) => {

  const Div = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding-bottom: 30px;
  `;

  const H1 = styled.h1`
    padding-top: 50px;
    font-weight: 900;
    line-height: 1.2;
    color: black;
    margin-bottom: 50px;
    font-size: 36px;
    text-align: center;
  `

  const formatDetails = (string) => {
    let arr = string.split('.');
    return (
      <>
        <p>{arr[0] +  '.' + arr[1] + '.' + arr[2] + '.' + arr[3] + '.' + arr[4] + '.' + arr[5] + '.'}</p>
        <br/>
        <br/>
        <br/>
        <b>Feautures:</b>
        <ul style={{alignItems: 'initial',}}>
          <li>{arr[6] + '.'}</li>
          <li>{arr[7] + '.'}</li>
          <li>{arr[8] + '.'}</li>
        </ul>
        <br/>
        <br/>
        <br/>
        <br/>
        <b>Other Details:</b>
        {arr.length > 8 ?
          arr.slice(8).map(string => <p>{string}</p>)
          : <></>
        }
      </>
    )
  }
  return (
    <Div>
      <H1>DETAILS</H1>
      {formatDetails(text)}
    </Div>
  );
}

Details.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
};

Details.defaultProps = {
  text: 'Praesentium dicta et ut quisquam. Dolor mollitia omnis accusamus minus distinctio accusamus. Velit consequatur quos. Sed ab magnam amet. Dolorem omnis illo. Praesentium dolore dolores molestiae eos architecto rerum consequatur maiores qui. Dicta similique ab dignissimos veritatis eos distinctio iusto itaque. Aliquid natus hic. Fugiat nisi nam eligendi molestiae quasi cumque. Soluta esse in non aut quia.',
  id: 1,
};

export default Details;
