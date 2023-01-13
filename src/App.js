import { Link, Route, Switch } from 'react-router-dom';
import Table from './components/Table/Table';
import Button from '@mui/material/Button';

import './App.css';
import { Chart } from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained" style={{ margin: '20px' }}>
          <Link to="/table">Table</Link>
        </Button>
        <Button variant="contained" style={{ margin: '20px' }}>
          <Link to="/charts">Chart</Link>
        </Button>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>MUI Data Table</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart JS</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
