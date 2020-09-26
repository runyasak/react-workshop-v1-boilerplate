import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductDetailView from './views/ProductDetailView';

import './App.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Router>
        <Header style={{ color: 'white', fontSize: '24px', textAlign: 'center' }}>
          One Million Store
        </Header>
        <Content style={{ maxWidth: '1024px', width: '100%', margin: 'auto' }}>
          <Switch>
            <Route path="/products/:id">
              <ProductDetailView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
};

export default App;
