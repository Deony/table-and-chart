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

   render() {
        const { rows } = this.state;

        return (
           <div className='spreadsheet-table'>
               <table className="table-container">
                    <SpreadsheetTableHeader />

                    {rows.map((row, index) => <SpreadsheetTableRow key={index} index={index+1} row={row} />)}
               </table>
           </div>
       )
   }
}

export default SpreadsheetTable;
