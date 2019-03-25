import React, { Component } from 'react';
import './static/App.css';
import 'antd/dist/antd.css';
import Menu from './components/Menu'
import Rout from './views/Router'
import {BrowserRouter as Router} from 'react-router-dom'
import Top from './components/Top';
import configureStore from './redux/store'
import {Provider} from 'react-redux'
const store = configureStore();

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          
      };
  };
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Menu />
          <div style={{float:'left',width:"85%",boxShadow:'0 0 3px lightgrey',height:'100%',padding:'0 10px'}}>
            <Top />
            <Rout />
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
