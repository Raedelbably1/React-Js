import Header from './Header';
import Toods from './Toods';
import React, {Component} from 'react';
import Dataitem from './Dataitem';
class App extends Component{
  constructor(){
    super()
  }
  render(){
     return (
    <div className="container">
      <Header/>
      <Toods/>
      <Dataitem />
    </div>
  );
} 
  }


export default App;
