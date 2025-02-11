import type { Route } from './+types/home';

import { getAllMerchants } from '~/request/merchants';
import { getAllVouchers } from '~/request/vouchers';

import FeatureBar from '~/components/featureBar';
import Brand from '~/components/brand';
import Footer from '~/components/footer';
import VoucherComponent from '~/components/voucher';
import { CarouselHome } from '~/components/carousel';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ultra Voucher' },
    { name: 'description', content: 'Welcome to Ultra Voucher' },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const [merchants, vouchers ]  = await Promise.all(
    [
      getAllMerchants(),
      getAllVouchers(),
    ]
  )
  return { merchants, vouchers }
}

export default function Home({
  loaderData
}: Route.ComponentProps) {

  const { merchants, vouchers } = loaderData;
  
  return (
    <>
      <FeatureBar/>
      <CarouselHome />
      <Brand merchants={merchants}/>
      <VoucherComponent vouchers={vouchers}/>
      <Footer />
    </>
  );
}
