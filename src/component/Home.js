import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Table, Button} from 'antd';
const Home = (props) => {
    const { todos: { data },deleteTodo } = props;
    
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <span>
          {record && record.data ? record.data.name:''}
        </span>
      )
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (text, record)=> (
        <span>
          {record && record.data ? record.data.phone:''}
        </span>
      )
    }, {
      title: 'Action',
      key: 'action',
      dataIndex:'id',
      render: (text, record) => (
        <span>
          <Button type="danger" size='large' onClick={()=>deleteTodo(record.id)}>DELETE</Button>
        </span>
      ),
    }];
    return (
      <div>
          <Link to={routes.addTodo}><Button type="danger" size="large" style={{margin:'1em'}}>ADD</Button></Link>
          {data ? <Table columns={columns} dataSource={data}/> :''}
      </div>
    );
  }

export default Home;
