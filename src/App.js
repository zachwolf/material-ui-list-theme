import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles'
import List from './List'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <List />
      </MuiThemeProvider>
    );
  }
}

export default App;
