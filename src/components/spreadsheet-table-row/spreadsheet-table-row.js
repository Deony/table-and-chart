import SpreadsheetTableCell from "../spreadsheet-table-cell";
import SpreadsheetTableDeleteBtnCell from "../spreadsheet-table-delete-btn-cell";
import {tableRowLabel} from "../../constants";
import './spreadsheet-table-row.css';


const SpreadsheetTableRow = ({ index, row: {name, count}, onChange, removeRow }) => (
    <tr className='spreadsheet-table-row'>
        <SpreadsheetTableCell label={index + 1} readOnly={true} />
        <SpreadsheetTableCell label={name} onChange={(value) => onChange(value, index, tableRowLabel.name.name)} />
        {/*todo: pass only numbers*/}
        <SpreadsheetTableCell label={count} onChange={(value) => onChange(value, index, tableRowLabel.count.name)} />
        <SpreadsheetTableDeleteBtnCell removeRow={() => removeRow(index)} />
    </tr>
)

export default SpreadsheetTableRow;
