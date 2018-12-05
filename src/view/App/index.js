import React, { Component } from "react";
import { Button } from "antd";
import Header from "../../components/Header/";
import HomeContent from '../../components/HomeContent/';
import "./index.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       {/*  内容  */}
      <HomeContent />
      </div>
    );
  }
}

export default App;
