import React from 'react'
import DataTable from './DataTable';

const DataTableUse = () => {
  const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <span className={row.active ? 'badge-green' : 'badge-red'}>
          {row.active ? 'Active' : 'Inactive'}
        </span>
      ),
    },
  ];
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true },
  ];
  return (
    <div>
        <DataTable columns={columns} data={users} keyExtractor={(u) => u.id} />
    </div>
  )
}

export default DataTableUse