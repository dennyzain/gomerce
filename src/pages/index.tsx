import Image from 'next/legacy/image';
import Layout from '../components/layout';
import ListCategory from '../components/molecules/ListCategory';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        className="px-6 h-40 bg-cover bg-no-repeat flex items-center "
        style={{
          background: 'rgba(0, 0, 0, .45) url(/bg-hero.png)',
          backgroundBlendMode: 'darken',
        }}
      >
        <h3 className="text-white text-lg font-extrabold">
          Solusi Penuhi Kebutuhan Usaha Stok Makanan & Minuman.
          <br />
          <span className="text-[10px]">
            Dapatkan sensasi belanja aman dan terlengkap di Gomerce!
          </span>
        </h3>
      </div>
      <ListCategory />
    </Layout>
  );
};
export default Home;
