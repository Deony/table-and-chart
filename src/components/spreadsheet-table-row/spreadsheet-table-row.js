import React from 'react';
import SpreadsheetTableCell from '../spreadsheet-table-cell';
import SpreadsheetTableDeleteBtnCell from '../spreadsheet-table-delete-btn-cell';
import { tableRowLabel } from '../../constants';
import './spreadsheet-table-row.css';

const SpreadsheetTableRow = ({
  index,
  row: { name, count },
  removeRow,
  updateCell,
}) => {
  const handleSavePreviousNameCell = (currentValue, isNumber) => {
    updateCell(index, tableRowLabel.name.name, currentValue, isNumber);
  };

  const handleSavePreviousCountCell = (currentValue, isNumber) => {
    updateCell(index, tableRowLabel.count.name, currentValue, isNumber);
  };

  return (
    <tr className="spreadsheet-table-row">
      <SpreadsheetTableCell label={index + 1} readOnly />

      <SpreadsheetTableCell
        label={name}
        updateCell={handleSavePreviousNameCell}
        isNumber={false}
      />

      <SpreadsheetTableCell
        label={count}
        updateCell={handleSavePreviousCountCell}
        isNumber
      />

      <SpreadsheetTableDeleteBtnCell removeRow={() => removeRow(index)} />
    </tr>
  );
};

export default SpreadsheetTableRow;
