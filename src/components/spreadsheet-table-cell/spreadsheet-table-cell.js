import {useEffect, useRef} from 'react';
import './spreadsheet-table-cell.css';


const SpreadsheetTableCell = ({ label, readOnly, isNumber, updateCell }) => {
    const input = useRef();

    useEffect(() => {
        input.current.value = label;
    })

    const onUpdate = () => {
        const currentValue = input.current.value;
        if (label !== currentValue) {
            updateCell(currentValue, isNumber)
        }
    }

    return (
        <td className='spreadsheet-table-cell'>
            <input
                type={isNumber ? 'number' : 'text'}
                defaultValue={label}
                ref={input}
                onBlur={onUpdate}
                readOnly = {readOnly ? 'readOnly' : ''}
            />
        </td>
    )
}

SpreadsheetTableCell.defaultProps = {
    isNumber: false
}

export default SpreadsheetTableCell;
