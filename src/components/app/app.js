import React, { PureComponent } from 'react';
import Spreadsheet from '../spreadsheet';
import './app.css';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Spreadsheet />
      </div>
    );
  }
}
export default App;
