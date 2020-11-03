import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import './spreadsheet-menu.css';

const SpreadsheetMenu = () => {
    return (
        <nav className='spreadsheet-menu'>
            <ul>
                <li className="spreadsheet-menu__item">
                    <button className='btn'><UndoIcon /></button>
                </li>
                <li className="spreadsheet-menu__item">
                    <button className='btn'><RedoIcon /></button>
                </li>
            </ul>
        </nav>
    )
}

export default SpreadsheetMenu;
