import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import './spreadsheet-menu.css';

const SpreadsheetMenu = ({
  addNewRow,
  resetTable,
  undoAction,
  disabledUndoActionBtn,
}) => {
  return (
    <nav className="spreadsheet-menu">
      <Button
        startIcon={<UndoIcon />}
        onClick={undoAction}
        disabled={disabledUndoActionBtn}
      />

      <Button startIcon={<RedoIcon />} />

      <Button startIcon={<AddIcon />} onClick={addNewRow}>
        Add new row
      </Button>

      <Button onClick={resetTable}>Reset</Button>

      <Button>Cancel</Button>

      <Button startIcon={<SaveIcon />}>Save</Button>
    </nav>
  );
};

SpreadsheetMenu.propTypes = {
  addNewRow: PropTypes.func.isRequired,
  resetTable: PropTypes.func.isRequired,
  undoAction: PropTypes.func.isRequired,
  disabledUndoActionBtn: PropTypes.bool.isRequired,
};

export default SpreadsheetMenu;
