import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import data from '../../MOCK_DATA.json';

import './Table.css';

const columns = [
  {
    dataField: 'id',
    text: 'id',
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === 'asc') {
        return b - a;
      }
      return a - b; // desc
    },
  },
  {
    dataField: 'name',
    text: 'Name',
  },
  {
    dataField: 'favorite_animal',
    text: 'Favorite Animal',
  },
];

export default function Table() {
  return (
    <div className="table">
      <BootstrapTable keyField="id" data={data} columns={columns} striped hover />
    </div>
  );
}
