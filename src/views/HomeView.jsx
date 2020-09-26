import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import CommonProductCard from '../components/CommonProductCard';

const { Search } = Input;

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = axios.get('https://react-workshop-v1.herokuapp.com/products');
    getProducts.then((value) => {
      setProducts(value.data);
    });
  }, []);

  const onSearchProducts = (value) => {
    axios
      .get('https://react-workshop-v1.herokuapp.com/products', { params: { q: value } })
      .then((result) => {
        setProducts(result.data);
      });
  };

  const renderedProducts = products.map((product) => {
    const image = product.images.split('|')[0];

    return <Col key={product.id} className="gutter-row" span={8}>
      <Link to={`/products/${product.id}`}>
        <CommonProductCard
          image={image}
          postTitle={product.postTitle}
          postContent={product.postContent} />
      </Link>
    </Col>;
  });

  return (
    <div className="home-view">
      <Search
        className="mt-24px"
        enterButton="Search"
        onSearch={(value) => onSearchProducts(value)}
      />

      <Row gutter={16}>
        { renderedProducts }
      </Row>
    </div>
  );
};

export default HomeView;
