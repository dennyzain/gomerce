import Hero from '@/components/molecules/Hero';
import Layout from '@/components/layout';
import ListCategory from '@/components/molecules/ListCategory';
import type { NextPage } from 'next';
import OfferCategory from '@/components/molecules/OfferCategory';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <ListCategory />
      <OfferCategory />
    </Layout>
  );
};
export default Home;
