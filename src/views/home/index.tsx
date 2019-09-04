import * as React from 'react'

import { Icon,Menu,  Switch } from 'antd';

const { SubMenu } = Menu;

class Home extends React.Component {
  public state = {
    current: '1',
    theme: 'dark'
   
  };

  public changeTheme = (value: any) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  public handleClick = (e: { key: any; }) => {

    this.setState({
      current: e.key,
    });
  };

  public render() {
    return (
      <div>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
        //   theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>试题管理</span>
              </span>
            }
          >
            <Menu.Item key="1">添加试题</Menu.Item>
            <Menu.Item key="2">试题分类</Menu.Item>
            <Menu.Item key="3">查看试题</Menu.Item>

          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="5">添加用户</Menu.Item>
            <Menu.Item key="6">用户展示</Menu.Item>
            
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>考试管理</span>
              </span>
            }
          >
            <Menu.Item key="9">添加考试</Menu.Item>
            <Menu.Item key="10">试卷管理</Menu.Item>
          
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Home
