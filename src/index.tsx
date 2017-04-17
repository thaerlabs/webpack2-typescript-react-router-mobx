import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React = require('react');
import ReactDOM = require('react-dom');
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const data = observable({
  count: 1,
});

setInterval(() => {
  data.count++;
}, 1000);

const Home = () => (
  <h1>Home</h1>
);

@observer
class About extends React.Component<any, any> {
  public render() {
    return <h1>About {data.count}</h1>;
  }
}

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
