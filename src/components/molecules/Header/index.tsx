import Image from 'next/image';
import Input from '../../atoms/Input';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="px-6 py-4 flex space-x-4">
      <Image width={23} height={44} alt="logo-gomerce" src={'/logo.svg'} />
      <Input />
    </div>
  );
};

export default Header;