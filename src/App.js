import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './pages/Index';
import Regist from './pages/Regist';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Place from './pages/Place';
import Other from './pages/Other';
import Creation from './pages/Creation';

import {
  BrowserRouter as Router, //表示用路径模式的路由，哈希模式：hashRouter，路由的最外层
  Route, //路由切换的坑
  Link,   //模板切换的组件
  NavLink, //升级版link
  Switch, //只匹配一个组件
  Redirect //当没有一个匹配的时候，希望默认跳到哪去，使用<Redirect to/>组件exact表示只有是path的路径才匹配 ，还需要结合<Switch />默认只匹配一个。
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/regist" component={Regist}></Route>{/*表示当路由为login时就加载Login组件到当前这个位置*/}
            <Route path="/index" component={Index}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/place" component={Place}></Route>
            <Route path="/other" component={Other}></Route>
            <Route path="/creation" component={Creation}></Route>
            <Redirect path="/" to="/index" exact/>
            <Route render={()=> <div>404!</div>}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
