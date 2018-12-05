import React, { Component } from "react";
import "./index.scss";
import { Input, Menu, Icon, Avatar, Dropdown } from "antd";
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: "mail",
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }


  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
      // 头部登录注册
const menu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="1">我要去登录</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">我要去注册</Menu.Item>
    </Menu>
  );
    return (
      <div className="header">
        <div className="layout-container clearfix">
          {/* logo 图片 */}
          <div className="logo">
            <div className="logo-link">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/cptBhNjKeyaBDrfnMKwC.svg"
                className="image image-default"
                alt="语雀"
              />
            </div>
          </div>
          {/* 搜索输入框 */}
          <div className="header-search header-nav-left">
            <Search
              placeholder="输入你想要你的"
              onSearch={value => console.log(value)}
              style={{ width: 250 }}
            />
          </div>
          {/*  导航  */}
          <div className="header-nav header-nav-left header-nav-menu">
            <ul>
              <li>
                {" "}
                <a href="/">工作台</a>
              </li>
              <li>
                {" "}
                <a href="/">发现</a>
              </li>
            </ul>
          </div>
          {/*  头像  */}
          <div className="avatar">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Dropdown
              overlay={menu}
              onVisibleChange={this.handleVisibleChange}
              visible={this.state.visible}
            >
              <a className="ant-dropdown-link" href="#">
              <Icon type="caret-down" />                 </a>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
