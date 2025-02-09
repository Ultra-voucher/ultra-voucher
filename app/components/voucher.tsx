import React, { useState, useEffect } from 'react';

interface Voucher {
  id: number;
  merchantName: string;
  originalPrice: number;
  discountPrice: number;
  sold: number;
}

const VoucherComponent: React.FC = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const voucherData: Voucher[] = [
      {
        id: 1,
        merchantName: "Nany's pavvilon",
        originalPrice: 50000,
        discountPrice: 38000,
        sold: 1338,
      },
      {
        id: 2,
        merchantName: "Nany's pavvilon",
        originalPrice: 100000,
        discountPrice: 76000,
        sold: 3103,
      },
      {
        id: 3,
        merchantName: 'Haagen Dazs',
        originalPrice: 100000,
        discountPrice: 60000,
        sold: 54,
      },
      {
        id: 4,
        merchantName: 'Haagen Dazs',
        originalPrice: 300000,
        discountPrice: 180000,
        sold: 3,
      },
      {
        id: 5,
        merchantName: 'Timezone Topup Saldo',
        originalPrice: 100000,
        discountPrice: 80000,
        sold: 37,
      },
      {
        id: 6,
        merchantName: "Nany's pavvilon",
        originalPrice: 190000,
        discountPrice: 150000,
        sold: 37,
      },
      {
        id: 7,
        merchantName: 'Topup Saldo Funworld',
        originalPrice: 125000,
        discountPrice: 93000,
        sold: 97,
      },
      {
        id: 8,
        merchantName: 'Topup Saldo Funworld',
        originalPrice: 250000,
        discountPrice: 180000,
        sold: 158,
      },
    ];
    const sortedVouchers = voucherData.sort((a, b) => b.sold - a.sold);

    setVouchers(sortedVouchers);
  }, []);

  const topVouchers = vouchers.slice(0, 4);

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold text-center">Most Purchase Voucher</h2>
        <h2
          className="text-xl text-center cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          View All <span className="ml-2 text-xl">{'>'}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(showAll ? vouchers : topVouchers).map((voucher) => (
          <div
            key={voucher.id}
            className="bg-[#A3B3A4] p-4 rounded-lg shadow-md flex"
          >
            <img
              src="/voucher.png"
              alt="Voucher"
              className="w-32 h-32 object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {voucher.merchantName}
              </h3>
              <h3 className="text-lg mb-2">Discount 30%</h3>
              <div className="mb-2">
                <span className="font-semibold text-gray-800">
                  Rp {voucher.originalPrice.toLocaleString()}{' '}
                  <span className="text-red-600">
                    Rp {voucher.discountPrice.toLocaleString()}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherComponent;
