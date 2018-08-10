import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Toolbar from '../../components/Toolbar';
import { filterMeals } from '../../redux/actions/menus/menus.actions';
import { FILTER_KEYS } from '../costants';

const mapStateToProps = state => ({
  defaultButtonKey: state.menus.ui.filter,
});


const mapDispatchToProps = dispatch => ({
  buttons: [
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
  ],
  search: {
    presence: false,
  },
  add: {
    presence: false,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
