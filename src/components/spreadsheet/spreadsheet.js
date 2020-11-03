import React from 'react';
import SpreadsheetMenu from "../spreadsheet-menu";
import SpreadsheetEditLine from "../spreadsheet-edit-line";
import SpreadsheetTable from "../spreadsheet-table";
import './spreadsheet.css';


class Spreadsheet extends React.Component {
    constructor() {
        super();

        this.state = {
            rows: []
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

    removeRow = (rowIndex) => {
        this.setState((state) => {
            const updatedRows = [...state.rows]; //shallow copy of all rows
            updatedRows.splice(rowIndex, 1);

            return {
                rows: updatedRows
            }
        })
    }

    resetTable = () => {
        const { rows } = this.state;
        if (rows.length) {
            this.setState({
                rows: []
            })
        }
    }


    render() {
        const { rows } = this.state;

        return (
            <div className='spreadsheet'>
                <SpreadsheetMenu addNewRow={this.addNewRow} resetTable={this.resetTable} />
                <SpreadsheetEditLine />
                <SpreadsheetTable rows={rows} onChangeCell={this.onChangeCell} removeRow={this.removeRow} />
            </div>
        )
    }
}

export default Spreadsheet;
