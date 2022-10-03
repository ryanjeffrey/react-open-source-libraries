import MUIDataTable from 'mui-datatables';
import data from '../../MOCK_DATA.json';

import './Table.css';

const columns = [
  {
    name: 'id',
    label: 'id',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'favorite_animal',
    label: 'Favorite Animal',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const options = {
  filterType: 'checkbox',
};

export default function Table() {
  return (
    <div className="table">
      <MUIDataTable title={'Favorite Animals'} data={data} columns={columns} options={options} />
    </div>
  );
}
