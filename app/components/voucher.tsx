import { z } from "zod";
import { vouchersSchema } from "~/schema/vouchers";
import { Link } from "react-router";

type Vouchers = z.infer<typeof vouchersSchema>[]

export default function VoucherComponent ({ vouchers }: { vouchers: Vouchers }) {

  return (
    <div className="px-12 py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold text-center">Most Purchase Voucher</h2>
        <Link 
          to={"/vouchers"}
          className="text-center hover:text-[#41A55C]"
        >
          View All {'>'}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        { vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-[#A3B3A4] p-4 rounded-lg shadow-md flex"
          >
            <img
              src="/voucher.png"
              alt="Voucher"
              className="w-22 h-22 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {voucher.merchantName}
              </h3>
              <h3 className="text-sm mb-2">Discount 30%</h3>
              <div className="mb-2">
                <span className="font-semibold text-sm text-gray-800">
                  Rp {voucher.originalPrice.toLocaleString()}{' '}
                  <span className="text-red-600 line-through">
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
