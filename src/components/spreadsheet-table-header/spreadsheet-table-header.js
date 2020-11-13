import React from 'react';
import { tableRowLabel } from '../../constants';
import SpreadsheetTableCell from '../spreadsheet-table-cell';
import './spreadsheet-table-header.css';

const SpreadsheetTableHeader = () => (
  <thead className="spreadsheet-table-header">
    <tr>
      {Object.values(tableRowLabel).map((el) => (
        <SpreadsheetTableCell key={el.key} label={el.label} readOnly />
      ))}
    </tr>
  </thead>
);

export default SpreadsheetTableHeader;
