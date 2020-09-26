import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

// eslint-disable-next-line react/prop-types
const CommonProductCard = ({ image, postTitle, postContent }) => {
  return (
    <Card
      className="mt-24px"
      hoverable
      cover={<img alt="example" src={image} />}
    >
      <Meta title={postTitle} description={postContent} />
    </Card>
  );
};

export default CommonProductCard;
