import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Details = ({ text, id }) => {

  const Div = styled.div`
    width: 1280px;
    height: 737.75;
    margin: 0 auto;
    text-align: center;
  `;

  const arr = text.split('.');

  return (
    <Div>
      <h1>DETAILS</h1>
      {arr.map(sentence => <p>{sentence + '.'}</p>)}
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
