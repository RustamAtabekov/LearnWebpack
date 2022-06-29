import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>Title of document</header>
        <p class="box">Main information</p>
        <div class="good-day">Have a good day</div>
        <footer>This is footer</footer>
      </React.Fragment>
    );
  }
}

export default App;
