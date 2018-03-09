import React, {Component} from 'react';

import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
