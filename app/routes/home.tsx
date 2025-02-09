import type { Route } from './+types/home';
import UpperAppBar from '~/components/appBar';
import FeatureBar from '~/components/featureBar';
import Brand from '~/components/brand';
import Footer from '~/components/footer';
import VoucherComponent from '~/components/voucher';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <UpperAppBar />
      <FeatureBar />
      <Brand />
      <VoucherComponent />
      <Footer />
    </>
  );
}
