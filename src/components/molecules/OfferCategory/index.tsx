import React from 'react';
import CardProduct from '@/components/atoms/CardProduct';
import Thunder from '@/icon/thunder-icon.svg';

const OfferCategory:React.FC = () => {
  return (
    <div className="bg-blue-500 p-6 text-white">
      <h2 className="pb-2">Penawaran Menarik</h2>
      <h2 className="flex items-center">
        <Thunder />
        <span className="pl-2">Flash Sale</span>
      </h2>
      <p className="pb-3">
        Berakhir dalam <span className="bg-red-500 p-1 rounded-md text-white">01</span> :{' '}
        <span className="bg-red-500 p-1 rounded-md text-white">26</span> :{' '}
        <span className="bg-red-500 p-1 rounded-md text-white">57</span>
      </p>
      <div className="grid grid-flow-col pb-3 auto-cols-max space-x-3 overflow-x-scroll">
        {[1, 2, 3, 4, 5].map((item) => (
          <CardProduct key={item} title="beras" imgProduct="/product1.png" />
        ))}
      </div>
    </div>
  );
};

export default OfferCategory;
