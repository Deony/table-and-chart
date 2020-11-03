import React, {Component} from 'react';
import Spreadsheet from "../spreadsheet";
import './app.css';


class App extends Component {
    render() {
        return (
            <div className='app'>
                <Spreadsheet />
            </div>
        );
    }
}
export default App;
