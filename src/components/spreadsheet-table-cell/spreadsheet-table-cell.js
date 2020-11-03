import './spreadsheet-table-cell.css';

const SpreadsheetTableCell = ({ label }) => {

    return (
        <td className='spreadsheet-table-cell'>
            <input type="text" value={label}/>
        </td>
    )
}

export default SpreadsheetTableCell;
