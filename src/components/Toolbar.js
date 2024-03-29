import {
  Button, Glyphicon, ToggleButton, ToggleButtonGroup, ButtonToolbar, Panel, ButtonGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import SearchArrow from './reservations/SearchArrow';

/**
 *
 * @param {Object} props to know what buttons, searchbar and add button
 */
const Toolbar = ({
  buttons, defaultButtonKey, search, add,
}) => (
  <Panel>
    <Panel.Body>
      <ButtonToolbar className="button-toolbar">
        <ToggleButtonGroup role="group" type="radio" name="options" defaultValue={defaultButtonKey}>
          {buttons.map(button => (
            <ToggleButton title={`Visualizza solo i ${button.title.toLowerCase()}`} onClick={button.func} value={button.key} key={button.key}>
              {button.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        {add.presence && (
          <ButtonGroup role="group">
            <Button onClick={add.func} title="Aggiungi un elemento" className="" bsStyle="primary">
              <Glyphicon glyph="glyphicon glyphicon-plus" />
            </Button>
          </ButtonGroup>
        )}

        {/* eslint-disable jsx-a11y/label-has-for */}
        {search.presence && (
          <React.Fragment>
            <label htmlFor="searchinput" className="hidden" aria-hidden="false">
              Ricerca
            </label>
            <Select
              arrowRenderer={SearchArrow}
              aria-label="Ricerca elementi"
              className="searchbar"
              noOptionsMessage={() => 'Nessun risultato'}
              options={search.options}
              onChange={search.func}
              inputId="searchinput"
              isClearable
              placeholder={search.placeholder}
            />
          </React.Fragment>
        )}
      </ButtonToolbar>
    </Panel.Body>
  </Panel>
);

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.any.isRequired,
    func: PropTypes.func.isRequired,
  })).isRequired,
  defaultButtonKey: PropTypes.any.isRequired,
  search: PropTypes.shape({
    presence: PropTypes.bool.isRequired,
    func: PropTypes.func,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })),
  }).isRequired,
  add: PropTypes.shape({
    presence: PropTypes.bool.isRequired,
    func: PropTypes.func,
  }).isRequired,
};

export default Toolbar;
