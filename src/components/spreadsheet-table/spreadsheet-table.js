import React from 'react';
import PropTypes from 'prop-types';
import SpreadsheetTableRow from '../spreadsheet-table-row';
import SpreadsheetTableHeader from '../spreadsheet-table-header';
import './spreadsheet-table.css';

const SpreadsheetTable = ({ rows, removeRow, updateCell }) => {
  return (
    <div className="spreadsheet-table">
      <table className="table-container">
        <SpreadsheetTableHeader />

        <tbody>
          {rows.map((row, index) => (
            <SpreadsheetTableRow
              key={row.key}
              index={index}
              row={row}
              removeRow={removeRow}
              updateCell={updateCell}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

SpreadsheetTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeRow: PropTypes.func.isRequired,
  updateCell: PropTypes.func.isRequired,
};

export default SpreadsheetTable;
