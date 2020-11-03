import React from 'react';
import SpreadsheetTableRow from "../spreadsheet-table-row";
import SpreadsheetTableHeader from "../spreadsheet-table-header";
import './spreadsheet-table.css';


class SpreadsheetTable extends React.Component {
    constructor() {
        super()

        this.data = [
                {
                    name: 'test1',
                    count: 5
                },
                {
                    name: 'test2',
                    count: 10
                },
        ];

        this.state = {
            rows: this.data
        }
    }

    onChangeCell = (newValue, rowIndex, columnName) => {
        this.setState((state) => {
            const updatedRows = [...state.rows]; //shallow copy of all rows
            const row = {...updatedRows[rowIndex]} //shallow copy of the selected row
            row[columnName] = newValue; //changing value in the selected cell
            updatedRows[rowIndex] = row;

            return {
                rows: updatedRows
            }

        })
    }

    render() {
        const { rows } = this.state;

        return (
           <div className='spreadsheet-table'>
               <table className="table-container">
                       <SpreadsheetTableHeader />

                       <tbody>
                           {rows.map((row, index) => <SpreadsheetTableRow key={index} index={index} row={row} onChange={this.onChangeCell} />)}
                       </tbody>
               </table>
           </div>
       )
   }
}

export default SpreadsheetTable;
