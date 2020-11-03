import React from 'react';
import SpreadsheetMenu from "../spreadsheet-menu";
import SpreadsheetEditLine from "../spreadsheet-edit-line";
import SpreadsheetTable from "../spreadsheet-table";
import './spreadsheet.css';


class Spreadsheet extends React.Component {
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

    addNewRow = () => {
        this.setState((state) => ({
            rows: [...state.rows, {name: '', count: 0}]
        }))
    }

    render() {
        const { rows } = this.state;

        return (
            <div className='spreadsheet'>
                <SpreadsheetMenu addNewRow={this.addNewRow} />
                <SpreadsheetEditLine />
                <SpreadsheetTable onChangeCell={this.onChangeCell} rows={rows} addNewRow={this.addNewRow} />
            </div>
        )
    }
}

export default Spreadsheet;
