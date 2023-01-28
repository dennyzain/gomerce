import React from 'react';
import Facebook from '@/icon/socmed/facebook.svg';
import Insta from '@/icon/socmed/insta.svg';
import Linkedin from '@/icon/socmed/linkedin.svg';
import Logo from '@/icon/logotext.svg';
import Twitter from '@/icon/socmed/twitter.svg';

const Footer = () => {
  return (
    <div className="px-6 pt-6 grid grid-cols-2 gap-3 bg-[#F2F3F8]">
      <Logo className="col-start-1 col-span-2" />
      <div>
        <h3 className="font-bold">Informasi</h3>
        <p>Tentang Kami</p>
        <p>Penawaran Menarik</p>
        <p>Berita</p>
        <p>Syarat & Ketentuan</p>
      </div>
      <div>
        <h3 className="font-bold">Bantuan</h3>
        <p>Pendaftaran Akun</p>
        <p>Request For Quotation (RFQ)</p>
        <p>Cara Memesan</p>
        <p>Status Pemesanan</p>
        <p>Gomerce Care</p>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold">Ikuti Kami</h3>
        <div className="flex space-x-2">
          <Facebook />
          <Twitter />
          <Insta />
          <Linkedin />
        </div>
      </div>
      <span className="col-start-1 text-center text-xs col-span-2">
        &copy;2023
        <br /> Developed by Denny Abbas Zain <br /> Designed by Vely Dwiana
      </span>
    </div>
  );
};

export default Footer;
