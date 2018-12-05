import React, { Component } from "react";
import { Form, Icon, Input, Button, Row,message, Col,AutoComplete } from "antd";
import "./index.scss";
import axios from 'axios';
class Registered extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  constructor(props){
    super(props);
    this.handleEmail=this.handleEmail.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.state={
      emailInput:'',
      dataSource: [],
    }
  }

  handleEmail(){
    // 获取邮箱的值
    let inputValue=this.state.emailInput
    let emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if(inputValue==''||!emailreg.test(inputValue)){
      message.error('您输入的邮箱错误！');
    }else{
  axios.post('http://127.0.0.1:3000/email',{
      email:inputValue,
  })
  .then((res) => {
      console.log(res);
  })
  .catch((err) => {
      console.log(err);
  })
    }

  
  }
  // 邮箱输入框验证
  handleChangeEmail = (value) => {
    this.setState({
      dataSource:!value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
        `${value}@126.com`,
        `${value}@sina.com`,
      ],
    })
    this.state.emailInput=value;
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
   
    return (
      <div className="registered">
        <div className="layout-container">
          <div className="lark-form">
            <div className="lark-form-main">
              <div className="lark-form-logo">
                <a href="/">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg"
                    alt="语雀"
                  />
                </a>
              </div>
              <div className="lark-form-content form-pro">
                <div className="account-slogon">
                  <h2 class="account-slogon-main">欢迎加入博客猿</h2>
                  <p class="account-slogon-subhead">
                    <span>写博客就用博客猿</span>
                  </p>
                </div>
                <div className="account-register">
                  <Form onSubmit={this.handleSubmit} className="login-form">
                   {/* <FormItem>
                      {getFieldDecorator("userName", {
                        rules: [{ required: true, message: "请输入您的账号!" }]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="用户名"
                        />
                      )}
                    </FormItem>
                        */}
                    <FormItem>
                      {getFieldDecorator("userEmail", {
                        rules: [
                          { required: true, message: "请输入您的邮箱地址!" }
                        ]
                      })(
                        <AutoComplete
                          prefix={
                            <Icon
                              type="mail"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          dataSource={this.state.dataSource}
                          onChange={this.handleChangeEmail}
                          placeholder="请输入您的邮箱"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      <Row>
                        <Col span={14}>
                          <Input placeholder='请输入验证码' />
                        </Col>
                        <Col span={7} offset={1}>
                          <Button type="primary" onClick={this.handleEmail}>获取邮箱验证码</Button>
                        </Col>
                      </Row>
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("password", {
                        rules: [{ required: true, message: "请输入您的密码!" }]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          type="password"
                          placeholder="请输入密码"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      <a className="login-form-forgot" href="">
                        忘记密码
                      </a>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        注册
                      </Button>
                      <a href="">去登录!</a>
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Registered);
