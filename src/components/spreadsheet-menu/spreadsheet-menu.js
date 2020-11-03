import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import './spreadsheet-menu.css';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";

const SpreadsheetMenu = ({ addNewRow }) => {
    return (
        <nav className='spreadsheet-menu'>
            <Button startIcon={<UndoIcon />} />

            <Button startIcon={<RedoIcon />} />

            <Button startIcon={<AddIcon />} onClick={addNewRow} >Add new row</Button>

            <Button>Reset</Button>

            <Button>Cancel</Button>

            <Button startIcon={<SaveIcon />}>Save</Button>
        </nav>
    )
}

export default SpreadsheetMenu;
