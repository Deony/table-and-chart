import React from 'react';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './spreadsheet-table-delete-btn-cell.css';

const SpreadsheetTableDeleteBtnCell = ({ removeRow }) => {
  return (
    <td className="spreadsheet-table-delete-btn-cell">
      <Button startIcon={<HighlightOffIcon />} onClick={removeRow} />
    </td>
  );
};

export default SpreadsheetTableDeleteBtnCell;
