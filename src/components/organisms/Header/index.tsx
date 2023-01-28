import React from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/Input';

const Header: React.FC = () => {
  return (
    <div className="px-6 py-4 flex justify-around space-x-4">
      <Image width={23} height={44} alt="logo-gomerce" src={'/icon/logo.svg'} />
      <Input />
    </div>
  );
};

export default Header;
