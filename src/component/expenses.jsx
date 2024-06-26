import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const App = () => (
    <div className='expenses'>
    <h1>Expenses</h1>
  <Table>
   
      <Column title="Expense Name" dataIndex="Expense Name" key="Expense Name" />
      <Column title="Date" dataIndex="Date" key="Date" />
      <Column title="Amount" dataIndex="Amount" key="Amount" />
      <Column
      title="Description"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )}
    />
    <Column title="Edit" dataIndex="Edit" key="Edit" />
    <Column title="Delete" dataIndex="Delete" key="Delete" />
   
 
  </Table>
  </div>
);
export default App;