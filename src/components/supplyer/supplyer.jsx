import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Table, Space, Radio, Divider,DatePicker, Button } from 'antd';


const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'OID',
    key: 'OID',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'Date',
  },
  {
    title: 'Product ID',
    dataIndex: 'PID',
  },
  {
    title: 'Quantity',
    dataIndex: 'Quantity',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },

];
const data = [
  {
    key: '1',
    OID: '10000000',
    Date: '03/08/2022',
    PID: '0001',
    Quantity: 23,
  },
  {
    key: '2',
    OID: '10000001',
    Date: '03/08/2022',
    PID: '0002',
    Quantity: 55,
  },
  {
    key: '3',
    OID: '10000002',
    Date: '03/07/2022',
    PID: '0003',
    Quantity: 16,
  },
  {
    key: '4',
    OID: '10000003',
    Date: '03/02/2022',
    PID: '0004',
    Quantity: 75,
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },

};

const Supplyer = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >

      </Radio.Group>

      <Space direction="vertical" size={12}>
    <RangePicker />

    <Button type="primary">Submit</Button>
    <Divider />
    
    <Button type="primary">Add new</Button>
    <br />
  </Space>

      

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Button type="primary">Log out</Button>
    </div>
    
  );
};

export default Supplyer