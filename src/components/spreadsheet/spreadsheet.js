import React from 'react';
import SpreadsheetMenu from "../spreadsheet-menu";
import SpreadsheetEditLine from "../spreadsheet-edit-line";
import SpreadsheetTable from "../spreadsheet-table";
import './spreadsheet.css';


class Spreadsheet extends React.Component {
    render() {
        return (
            <div className='spreadsheet'>
                <SpreadsheetMenu />
                <SpreadsheetEditLine />
                <SpreadsheetTable />
            </div>
        )
    }
}

export default Spreadsheet;
