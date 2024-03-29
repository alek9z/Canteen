// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Toolbar from '../../components/Toolbar';
import { addModalShow, filterMeals, searchUser } from '../../redux/actions/reservations/reservations.actions';
import { FILTER_KEYS } from '../costants';

const mapStateToProps = state => ({
  defaultButtonKey: state.reservations.ui.filter,
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const a = ownProps.list.map(
    res => ({
      label: res.user && res.user.name,
      value: res.user && res.user.id,
    }),
  );
  return {
    buttons: ownProps.view === 'meals' ? [
      {
        title: 'Tutti',
        key: FILTER_KEYS.ALL,
        func: () => dispatch(filterMeals(FILTER_KEYS.ALL)),
      },
      {
        title: 'Primi',
        key: FILTER_KEYS.MAIN,
        func: () => dispatch(filterMeals(FILTER_KEYS.MAIN)),
      },
      {
        title: 'Secondi',
        key: FILTER_KEYS.SECOND,
        func: () => dispatch(filterMeals(FILTER_KEYS.SECOND)),
      },
      {
        title: 'Contorni',
        key: FILTER_KEYS.SIDE,
        func: () => dispatch(filterMeals(FILTER_KEYS.SIDE)),
      },
      {
        title: 'Dessert',
        key: FILTER_KEYS.DESSERT,
        func: () => dispatch(filterMeals(FILTER_KEYS.DESSERT)),
      },
    ] : [],
    search: {
      presence: ownProps.view === 'users' && Array.isArray(ownProps.list),
      func: id => dispatch(searchUser(id || { value: '' })),
      options: (ownProps.view === 'users' && Array.isArray(ownProps.list)) ? a : [],
      placeholder: 'Nome Cognome',
    },
    add: {
    // ownProps serve per avere acesso alla prop 'view' e nascondere la barra
      presence: ownProps.view === 'users',
      func: () => dispatch(addModalShow()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
