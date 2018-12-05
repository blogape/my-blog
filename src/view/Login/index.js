import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
// import { loginByUsername } from '../../services/api.js';
import axios from 'axios';
// import { setToken, getToken } from "../../utils/token.js";
import "./index.scss";
const FormItem = Form.Item;
class Login extends Component {
  // set loading
  state = {
    loading: false
}
startLogin = () => {
  this.setState({ loading: true });
}
endLogin = () => {
  this.setState({ loading: false });
}
  // antd's click on the event login api call
  constructor(props) {
    super(props);
    this.handleSubmit = e => {
        axios.post('http://127.0.0.1:3000/login',{
            name:'xiaoming',
            password:'123456'
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })





      e.preventDefault();
      const { history } = this.props;
      // return err values
      this.props.form.validateFields(async(err, values) => {
        if (!err) {
          // user let 
          const userName=values.userName;
          const password=values.password;
          
        }
      });
    };
  }
  componentWillMount() {
  

  }
  componentDidMount() {
    setTimeout(() => {
      let loading = document.getElementById("StartLoading");
      loading && document.body.removeChild(loading);
    }, 200);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>后台管理系统</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "请输入您的用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入你的密码！" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                loading={this.state.loading}
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);