import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";
import "./index.scss";
class ArticleHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="doc-head-inner">
          <div className="header-crumb">
          <span className="lark-breadcrumb-logo"><a href="/" className="lark-logo"><img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" alt="语雀" className="lark-logo-simple" /></a><span className="lark-breadcrumb-separator"><span className="larkicon larkicon-arrow-right"></span></span></span>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticleHeader;
