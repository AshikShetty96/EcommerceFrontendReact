import React, { useState } from 'react';
import './Popular.css';
import all_product from '../Assets/all_product';
import data from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  const uniqueProducts = [...new Map([...all_product, ...data].map(item => [item.id, item])).values()];
  const [products] = useState(uniqueProducts);

  return (
    <div className='popular'>
      <div className="popular-item">
        {products.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
