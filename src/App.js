//import logo from './logo.svg';
/*import './App.css';
import React, { Component } from 'react';
import SimpleForm from "./components/chatbot/SimpleForm";



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SimpleForm/>
        
      </div>
    );
  }
       
}

export default App;*/
import React, { Component } from 'react';
import LexChat from "react-lex-plus";
import AWS from 'aws-sdk/dist/aws-sdk-react-native';
//AWS.config.loadFromPath('./config.json');
class App extends Component {
  
  
  render() {
    var myConfig = new AWS.Config();
    myConfig.update({region: 'us-east-1',accessKeyId: 'ASIAXL3JQKIN7JVFVR3J',secretAccessKey: 'GICrC4r0pvre39ilGFg83Z/EoYWtGcQfGPUrjoiz'});

    return (
      
      
    <LexChat

      //accessKeyId= "ASIAXL3JQKIN7JVFVR3J"
     // secretAccessKey= "GICrC4r0pvre39ilGFg83Z/EoYWtGcQfGPUrjoiz"
      botName="SSHelperBot"
      IdentityPoolId="us-east-1:9421ff0a-2f1c-4d2c-9845-779a4c322b05"
      placeholder="Placeholder text"
      backgroundColor="#90EE90"
      height="430px"
      region="us-east-1"
      headerText="Chat with our awesome bot"
      headerStyle={{ backgroundColor: "#0000FF", fontSize: "30px" }}
      greeting={
        "Hello, how can I help? You can say things like 'help' to get more info"
        
      }
    />
    );
  }
}
export default App;