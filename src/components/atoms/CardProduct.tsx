import Image from 'next/image';
import React from 'react';

interface IProps {
  title: string;
  imgProduct: string;
}

const CardProduct: React.FC<IProps> = ({ title, imgProduct }) => {
  return (
    <div className="border border-black-1 p-3">
      <h4>{title}</h4>
      <Image width={100} height={100} src={imgProduct} alt={title} />
    </div>
  );
};

export default CardProduct;
