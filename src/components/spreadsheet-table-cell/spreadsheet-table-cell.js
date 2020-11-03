import './spreadsheet-table-cell.css';

const SpreadsheetTableCell = ({ label, onChange }) => {
    return (
        <td className='spreadsheet-table-cell'>
            <input type="text" value={label} onChange={(e) => { onChange(e.target.value); }} />
        </td>
    )
}

export default SpreadsheetTableCell;
