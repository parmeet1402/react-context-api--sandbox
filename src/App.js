import React, { Component } from "react";

// context creation
const MyContext = React.createContext();

// create a Provider component
class MyProvider extends Component {
  state = {
    name: "Avi",
    age: 20
  };
  render() {
    return (
      <MyContext.Provider value="abc">{this.props.children}</MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="Family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <p>I'm {this.props.name}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the react app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
