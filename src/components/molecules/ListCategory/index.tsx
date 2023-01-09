import CardProduct from '@/components/atoms/CardProduct';
import React from 'react';

const ListCategory: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="py-3">Pilihan Kategori</h2>
      <div className="grid grid-flow-col auto-cols-max space-x-3 overflow-x-scroll">
        {[1, 2, 3, 4, 5].map((item) => (
          <CardProduct key={item} title="beras" imgProduct="/product1.png" />
        ))}
      </div>
      <div className="pt-4 grid grid-flow-col auto-cols-max space-x-3 overflow-x-scroll">
        {[1, 2, 3, 4, 5].map((item) => (
          <CardProduct key={item} title="beras" imgProduct="/product1.png" />
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
