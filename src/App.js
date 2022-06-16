import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';
import Userlist from "./components/Userlist";
import Role from './components/Role'


function App() {
  return (
      <Provider store={store}>
  {/*      <Userlist/>*/}
        <Role/>
      </Provider>
  );
}

export default App;
