import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
<div className="App">
     <Search/>
    </div>
    
    </MuiThemeProvider>
    
  );
}

export default App;
