import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import "./index.scss";
import Item from "antd/lib/list/Item";

class homeContent extends Component {
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "http://ant.design",
        title: `ant design part ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
      });
    }

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <div className="main-wrapper">
        <div className="explore-wrapper">
          <div className="main-container">
            <div className="explore-repos">
              {/* 左侧  */}
              <div className="left">
                <div className="block-explore-title">
                  <h3>头条文章</h3>
                </div>
                <div className="content">
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 3
                    }}
                    dataSource={listData}
                    footer={
                      <div>
                        <b>ant design</b> footer part
                      </div>
                    }
                    renderItem={item => (
                      <List.Item
                        key={item.title}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          />
                        }
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={<a href={item.href}>{item.title}</a>}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                  ,
                </div>
              </div>
              {/*  右侧  */}
              <div className="right">
                <div className="content">
                  <div className="block-explore-title">
                    <h3>热门知识库</h3>
                  </div>
                  {/*  热门列表  */}
                  <div className="hotlist">
                    <div className="item">
                        <div className='hot-list-item'>
                        <div className="ranking">01</div>
                        <div className="text"><a className="repo-title" href="/ruanyf/share" target="_blank">阮一峰 / 每周分享</a><p className="description"></p><p className="info-extra"><span className="info-extra-block"><span className="count">2986 </span>订阅</span><span className="split"> · </span><span className="info-extra-block"><span className="count">720 </span>喜欢</span></p></div>
                        </div>
                    </div>

                    <div className="item">
                    <div className='hot-list-item'>
                    <div className="ranking">02</div>
                    <div className="text"><a className="repo-title" href="/ruanyf/share" target="_blank">阮一峰 / 每周分享</a><p className="description"></p><p className="info-extra"><span className="info-extra-block"><span className="count">2986 </span>订阅</span><span className="split"> · </span><span className="info-extra-block"><span className="count">720 </span>喜欢</span></p></div>
                    </div>
                </div>

                <div className="item">
                <div className='hot-list-item'>
                <div className="ranking">03</div>
                <div className="text"><a className="repo-title" href="/ruanyf/share" target="_blank">阮一峰 / 每周分享</a><p className="description"></p><p className="info-extra"><span className="info-extra-block"><span className="count">2986 </span>订阅</span><span className="split"> · </span><span className="info-extra-block"><span className="count">720 </span>喜欢</span></p></div>
                </div>
            </div>

            <div className="item">
            <div className='hot-list-item'>
            <div className="ranking">04</div>
            <div className="text"><a className="repo-title" href="/ruanyf/share" target="_blank">阮一峰 / 每周分享</a><p className="description"></p><p className="info-extra"><span className="info-extra-block"><span className="count">2986 </span>订阅</span><span className="split"> · </span><span className="info-extra-block"><span className="count">720 </span>喜欢</span></p></div>
            </div>
        </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homeContent;
