import React,{Component} from 'react';
import { Carousel } from 'antd';
import logo from '../static/1.jpg'

export default class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    };
    render(){
        return (
        <Carousel autoplay>
          <div><img src={logo} width="100%" height="300px" alt="图片正在加载中" /></div>
          <div><img src={logo} width="100%" height="300px" alt="图片正在加载中" /></div>
          <div><img src={logo} width="100%" height="300px" alt="图片正在加载中" /></div>
          <div><img src={logo} width="100%" height="300px" alt="图片正在加载中" /></div>
        </Carousel>
        )
    }
}   