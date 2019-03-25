import React,{Component} from 'react';
import { Menu } from 'antd';
import {BrowserRouter as Link} from 'react-router-dom'

export default class Sider extends Component{
  constructor(props){
      super(props);
      this.state={
          current:'1'
      };
      this.handleClick=this.handleClick.bind(this)
  };
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: "15%",float:'left' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline">
        <Menu.Item key="1"><Link to="/top">头条</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/shehui">社会</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/guonei">国内</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/guoji">国际</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/yule">娱乐</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/tiyu">体育</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/junshi">军事</Link></Menu.Item>
        <Menu.Item key="8"><Link to="/keji">科技</Link></Menu.Item>
        <Menu.Item key="9"><Link to="/caijing">财经</Link></Menu.Item>
        <Menu.Item key="10"><Link to="/shishang">时尚</Link></Menu.Item>
      </Menu>
    );
  }
};