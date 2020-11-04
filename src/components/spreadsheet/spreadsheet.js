import React from 'react';
import SpreadsheetMenu from "../spreadsheet-menu";
import SpreadsheetEditLine from "../spreadsheet-edit-line";
import SpreadsheetTable from "../spreadsheet-table";
import './spreadsheet.css';


class Spreadsheet extends React.Component {
    constructor() {
        super();

        this.state = {
            rows: [],
            undoList: [],
            disabledUndoActionBtn: true
        }
    }

    updateCell = (rowIndex, columnName, newValue) => {
        this.setState((state) => {
            const updatedRows = [...state.rows]; //shallow copy of all rows
            const row = {...updatedRows[rowIndex]} //shallow copy of the selected row
            const updatedUndoList = [...state.undoList]; //shallow copy of undo list
            updatedUndoList.push({rowIndex: rowIndex, columnName: columnName, value: row[columnName]});
            row[columnName] = newValue; //changing value in the selected cell
            updatedRows[rowIndex] = row;
            const disabledUndoActionBtn = this.toggleDisabledUndoActionBtn(updatedUndoList);

            return {
                rows: updatedRows,
                undoList: updatedUndoList,
                disabledUndoActionBtn: disabledUndoActionBtn
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

    toggleDisabledUndoActionBtn = (updatedUndoList) => !updatedUndoList.length;

    undoAction = () => {
        this.setState((state) => {
            const updatedUndoList = [...state.undoList]; //shallow copy of the undo list
            const stepBack = updatedUndoList.pop();
            const updatedRows = [...state.rows]; //shallow copy of all rows
            const row = {...updatedRows[stepBack.rowIndex]} //shallow copy of the selected row
            row[stepBack.columnName] = stepBack.value; //rollback value of the cell
            updatedRows[stepBack.rowIndex] = row;
            const disabledUndoActionBtn = this.toggleDisabledUndoActionBtn(updatedUndoList);
            return {
                rows: updatedRows,
                undoList: updatedUndoList,
                disabledUndoActionBtn: disabledUndoActionBtn
            }
        })
    }

    render() {
        const { rows, disabledUndoActionBtn } = this.state;

        return (
            <div className='spreadsheet'>
                <SpreadsheetMenu addNewRow={this.addNewRow} resetTable={this.resetTable} undoAction={this.undoAction} disabledUndoActionBtn={disabledUndoActionBtn} />
                <SpreadsheetEditLine />
                <SpreadsheetTable rows={rows} removeRow={this.removeRow} updateCell={this.updateCell}/>
            </div>
        )
    }
}

export default Spreadsheet;
