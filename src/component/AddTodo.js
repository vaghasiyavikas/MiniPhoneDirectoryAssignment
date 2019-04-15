import React from 'react';
import FormLink from '../container/FormLink';
import {routes} from "../routes";
import {Link} from "react-router-dom";
import Button from 'antd/es/button';

class AddTodo extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Link to={routes.home}><Button type="danger" size="large" style={{width:'15%',margin:'1em'}}>BACK</Button></Link>
        </div>
        <FormLink />
      </div>
    );
  }
}

export default AddTodo;
