import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render the list of reservations or the numbero of reservations, depending on bool param
 * @param {bool} viewList
 * @param {Array} reslist
 */
const renderView = (viewList, reslist) => {
  if (viewList) {
    return (
      <ol>
        {
          reslist.map(item => (
            <li key={item}>
              {item}
            </li>
          ))
        }
      </ol>
    );
  }
  return (
    <p>
      Prenotazioni:
      {' '}
      {reslist.length}
    </p>
  );
};

/**
 * Component to render reservations for one meal
 * @param {Object} props
 */
const Reservation = ({
  name, reslist, viewList,
}) => (
  <div>
    <span>
      {name}
    </span>
    { renderView(viewList, reslist) /* mostra la cosa giusta a seconda del parametro 'viewList' */ }
  </div>
);

Reservation.propTypes = {
  name: PropTypes.string.isRequired,
  reslist: PropTypes.arrayOf(PropTypes.string),
  viewList: PropTypes.bool,
};

Reservation.defaultProps = {
  reslist: [],
  viewList: false,
};

export default Reservation;
