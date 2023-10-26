import './App.css';
import { Component } from 'react';
import Nameform from './NameForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: "",
      message: "There will be Hello text"
    }
  }
  apibase = "https://serverlesshellofunction.azurewebsites.net/api/helloto/";
  
   getResourse = (text) => {
      fetch(this.apibase + text)
      .then(response => response.text())
      .then(result => this.setState({message: result}))
      .catch(error => console.error(error));
   }

   onNameInput = (name) => {
     this.getResourse(name);
      this.setState({
        inputName: name,
      });
      
  } 
  render(){
    const {message} = this.state;
    console.log(message); 
    return (
      <div className="App">
        <h1>{message}</h1>
        <Nameform onNameInput={this.onNameInput}/>
      </div>
    );
  }
}

export default App;
