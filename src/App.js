import './App.css';
import React from 'react'
import { Header } from './components/Header/Header';


export default class App extends React.Component {
  render(){
    return(
      <div className="App">
      <header className="App-Header">
        <Header/>
      </header>
    </div>
    )
  }
}

