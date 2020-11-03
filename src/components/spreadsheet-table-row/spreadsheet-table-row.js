import SpreadsheetTableCell from "../spreadsheet-table-cell";
import './spreadsheet-table-row.css';


const SpreadsheetTableRow = ({index, row: {name, count}}) => (
    <tr className='spreadsheet-table-row'>
        <SpreadsheetTableCell label={index} />
        <SpreadsheetTableCell label={name} />
        <SpreadsheetTableCell label={count} />
    </tr>
)

export default SpreadsheetTableRow;
