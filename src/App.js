import React, { Component } from "react";

// context creation
const MyContext = React.createContext();

// create a Provider component
class MyProvider extends Component {
  state = {
    name: "Avi",
    insta: "@avi.codes",
    age: 20
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
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
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>I'm {context.state.name}</p>
              <p>I'm {context.state.age}</p>
              <p>Follow {context.state.insta} on Instagram</p>
              <button onClick={context.growYearOlder}>Age++</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
