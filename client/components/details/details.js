import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ text, id }) => (
  <p key={id}>{text}</p>
);

Details.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
};

Details.defaultProps = {
  text: 'Praesentium dicta et ut quisquam. Dolor mollitia omnis accusamus minus distinctio accusamus. Velit consequatur quos. Sed ab magnam amet. Dolorem omnis illo. Praesentium dolore dolores molestiae eos architecto rerum consequatur maiores qui. Dicta similique ab dignissimos veritatis eos distinctio iusto itaque. Aliquid natus hic. Fugiat nisi nam eligendi molestiae quasi cumque. Soluta esse in non aut quia.',
  id: 1,
};

export default Details;
