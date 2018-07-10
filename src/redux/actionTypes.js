// GENERALI:
export const NOTYPE = 'NOTYPE';
export const noType = () => ({
  type: NOTYPE,
});
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const FILTER_MEALS = 'FILTER_MEALS';

// RESERVATIONS
export const FETCH_RESERVATIONS_STARTED = 'FETCH_RESERVATIONS_STARTED';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const RESERVATION_REQUEST_FAILURE = 'RESERVATION_REQUEST_FAILURE';
export const REMOVE_RESERVATION_SUCCESS = 'REMOVE_RESERVATION_SUCCESS';

// MENU DEL GIORNO
export const TOGGLE_MEAL = 'TOGGLE_MEAL';
export const FETCH_MENU_STARTED = 'FETCH_MENU_STARTED';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';
export const POST_MENU_FAILURE = 'POST_MENU_FAILURE';
export const POST_MENU_SUCCESS = 'POST_MENU_SUCCESS';
export const POST_MENU_STARTED = 'POST_MENU_STARTED';

// LOGIN
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// DISHES
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const REMOVE_DISH_SUCCESS = 'REMOVE_DISH_SUCCESS';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const DISH_REQUEST_FAILURE = 'DISH_REQUEST_FAILURE';
// DISH ADD FORM
export const SHOW_ADD_FORM = 'SHOW_ADD_FORM';
export const HIDE_ADD_FORM = 'HIDE_ADD_FORM';
export const SHOW_ERROR_FORM = 'SHOW_ERROR_FORM';
export const HIDE_ERROR_FORM = 'HIDE_ERROR_FORM';
