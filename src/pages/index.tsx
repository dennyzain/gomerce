import type { NextPage } from 'next';
import Hero from '@/components/molecules/Hero';
import Layout from '@/components/layout';
import ListCategory from '@/components/molecules/ListCategory';
import OfferCategory from '@/components/molecules/OfferCategory';
import Partners from '@/components/molecules/Partners';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <ListCategory />
      <OfferCategory />
      <Partners />
    </Layout>
  );
};
export default Home;
