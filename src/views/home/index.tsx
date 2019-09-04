
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
import * as React from 'react';
import './sass/style.css'

import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom'
import Routerview from '../../router/routerview'
import Head from '@/components/head'
interface Prorout {
  routes: any
}

class Home extends React.Component<Prorout>{
  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  public render() {
    const { routes } = this.props

    return (
      <div className='box'>
    <Head/>
        <Layout style={{ height: 'auto', display: 'scroll', clear: 'both' }}>

          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>试题管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">
                  <NavLink to='/home/addtext'>添加试题</NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                  <NavLink to='/home/textcluster'>试题分类</NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink to='/home/looktext'>查看试题</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="6">
                  <NavLink to='/home/adduser'>添加用户</NavLink>
                </Menu.Item>
                <Menu.Item key="7">
                  <NavLink to='/home/userdisplay'>用户展示 </NavLink>
                </Menu.Item>

              </SubMenu>

              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="team" />
                    <span>考试管理</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  <NavLink to='/home/addexam'> 添加考试 </NavLink>
                </Menu.Item>
                <Menu.Item key="10">
                  <NavLink to='/home/textlist'>试卷管理 </NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="user" />
                    <span>班级管理</span>
                  </span>
                }
              >
                <Menu.Item key="11">
                  <NavLink to='/home/grade'> 班级管理 </NavLink>
                </Menu.Item>
                <Menu.Item key="12">
                  <NavLink to='/home/room'>教室管理 </NavLink>
                </Menu.Item>
                <Menu.Item key="13">
                  <NavLink to='/home/student'> 学生管理 </NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="file" />
                    <span>阅卷管理</span>
                  </span>
                }
              >
                <Menu.Item key="14">
                  <NavLink to='/home/weit'> 待批班级 </NavLink>
                </Menu.Item>

              </SubMenu>

            </Menu>
          </Sider>
          <Layout style={{ height: '100%', display: 'scroll' }}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Routerview routes={routes} />
              </div>
            </Content>

          </Layout>
        </Layout>
      </div>
    );
  }


}
export default Home


