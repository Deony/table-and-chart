import React from 'react';
import SpreadsheetTableRow from "../spreadsheet-table-row";
import SpreadsheetTableHeader from "../spreadsheet-table-header";
import './spreadsheet-table.css';


const SpreadsheetTable = ({ rows, onChangeCell, removeRow }) => (
    <div className='spreadsheet-table'>
        <table className="table-container">
            <SpreadsheetTableHeader />

            <tbody>
                {rows.map((row, index) => <SpreadsheetTableRow key={index} index={index} row={row} onChange={onChangeCell} removeRow={removeRow} />)}
            </tbody>
        </table>
    </div>
)

export default SpreadsheetTable;
