import React from 'react';
import Partner1 from '@/icon/partners/partner1.svg';
import Partner2 from '@/icon/partners/partner2.svg';
import Partner3 from '@/icon/partners/partner3.svg';
import Partner4 from '@/icon/partners/partner4.svg';
import Partner5 from '@/icon/partners/partner5.svg';
import Partner6 from '@/icon/partners/partner6.svg';
import Partner7 from '@/icon/partners/partner7.svg';
import Partner8 from '@/icon/partners/partner8.svg';

const Partners:React.FC = () => {
  return (
    <div className="grid gap-3 p-6 justify-items-center place-items-center grid-cols-4 grid-rows-[1.2fr,1fr,1fr]">
      <h2 className="col-start-1 col-span-4 justify-self-center">Partner Kami</h2>
      <Partner2 />
      <Partner8 />
      <Partner6 />
      <Partner7 />
      <Partner1 />
      <Partner5 />
      <Partner4 />
      <Partner3 />
    </div>
  );
};

export default Partners;
