import SpreadsheetTableCell from "../spreadsheet-table-cell";
import {tableRowLabel} from "../../constants";
import './spreadsheet-table-row.css';


const SpreadsheetTableRow = ({index, row: {name, count}, onChange}) => (
    <tr className='spreadsheet-table-row'>
        <SpreadsheetTableCell label={index + 1} />
        <SpreadsheetTableCell label={name} onChange={(value) => onChange(value, index, tableRowLabel.name.name)} />
        <SpreadsheetTableCell label={count} onChange={(value) => onChange(value, index, tableRowLabel.count.name)} />
    </tr>
)

export default SpreadsheetTableRow;
