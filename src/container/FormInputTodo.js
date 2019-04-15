import React from 'react';
import {
  Form, Input
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Button from 'antd/es/button';
import { routes } from '../routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export class FormInputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.loading!==prevProps.loading){
      console.log(this.props)
      history.goBack();
    }
  }

    handleSubmit=(event) => {
      event.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.onClick(values)
          console.log(values)
        }
      });

    }

    handleChange =(dataVal, event) => {
      const { data } = this.state;
      data[dataVal] = event.target.value;
      this.setState({ data });
    }


    render() {
      const { getFieldDecorator } = this.props.form;
      const { data } = this.state;
      if (data.name === undefined) {
        data.name = '';
      }


      return (
        <div>
            <Form style={{ margin:'auto' ,width:'50%' }}>
              <Form.Item
                label="Name"
                hasFeedback
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: 'Please input your Name!',
                  }],
                })(
                  <Input
                    type="text"
                    placeholder="Please input your name"
                    
                  />,
                )}
              </Form.Item>
              <Form.Item
                label="Phone Number"
                hasFeedback
              >
                {getFieldDecorator('phone', {
                  rules: [{
                    required: true, message: 'Please input your Phone Number!',
                  }],
                })(
                  <Input
                    min="0"
                    max="9999999999"
                    style={{ width: '100%' }}
                    type="number"
                    placeholder="Please input your Number"
                
                  />,
                )}
              </Form.Item>
              <Form.Item>
              <Link to={routes.home}><Button type="danger" htmlType="submit" size="large" style={{ width: '25%',marginLeft:'9em' }} onClick={this.handleSubmit}>ADD</Button></Link>
              </Form.Item>
            </Form>

            <div>
            </div>

            <div>
                    {}
                        <div style={{margin:'2em',color:'blue'}}>
                        <b>Subscriber Tobe Added</b><br/>
                            Name : {data && data.name ? data.name :''}
                            <br />

                            Phone : {data && data.phone ? data.phone :''}
                        </div>
                    }
            </div>
        </div>
      );
    }
}

export const WrappedRegistrationForm = Form.create({ name: 'register' })(FormInputTodo);

// ReactDOM.render(<WrappedRegistrationForm />, document.getElementById('root'));
