import React, { useEffect, useRef } from 'react';
import './spreadsheet-table-cell.css';
import PropTypes from 'prop-types';

const SpreadsheetTableCell = ({ label, readOnly, isNumber, updateCell }) => {
  const input = useRef();

  useEffect(() => {
    input.current.value = label;
  });

  const onUpdate = () => {
    const currentValue = input.current.value;
    if (label !== currentValue) {
      updateCell(currentValue, isNumber);
    }
  };

  return (
    <td className="spreadsheet-table-cell">
      <input
        type={isNumber ? 'number' : 'text'}
        defaultValue={label}
        ref={input}
        onBlur={onUpdate}
        readOnly={readOnly ? 'readOnly' : ''}
      />
    </td>
  );
};

SpreadsheetTableCell.defaultProps = {
  readOnly: false,
  isNumber: false,
  updateCell: () => {},
};

SpreadsheetTableCell.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  readOnly: PropTypes.bool,
  isNumber: PropTypes.bool,
  updateCell: PropTypes.func,
};

export default SpreadsheetTableCell;
