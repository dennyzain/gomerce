import React from 'react';
import Home from '@/icon/navbar/home.svg';
import Cart from '@/icon/navbar/cart.svg';
import Profile from '@/icon/navbar/profile.svg';
import Category from '@/icon/navbar/category.svg';

const Navbar: React.FC = () => {
  return (
    <div className="bottom-0 w-full flex justify-between p-6 bg-white sticky">
      <div>
        <div className="text-center">
          <Home className="text-green-300" />
        </div>
        <p>Beranda</p>
      </div>
      <div>
        <Cart className="text-green-300" />
        <p>Keranjang</p>
      </div>
      <div>
        <Profile />
        <p>Akun</p>
      </div>
      <div>
        <Category />
        <p>Kategori</p>
      </div>
    </div>
  );
};

export default Navbar;
