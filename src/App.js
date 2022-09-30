import { Link, Route, Switch } from 'react-router-dom';
import Table from './components/Table/Table';

import './App.css';
import { Chart } from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
