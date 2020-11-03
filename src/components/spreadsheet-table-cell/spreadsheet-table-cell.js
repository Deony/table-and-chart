import './spreadsheet-table-cell.css';

const SpreadsheetTableCell = ({ label, onChange, readOnly }) => {
    return (
        <td className='spreadsheet-table-cell'>
            <input type="text" value={label} onChange={(e) => { onChange(e.target.value); }} readOnly = {readOnly ? 'readOnly' : ''} />
        </td>
    )
}

export default SpreadsheetTableCell;
