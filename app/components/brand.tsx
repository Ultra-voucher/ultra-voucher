import { z } from "zod";
import { merchantsSchema } from "~/schema/merchants";
import { Link } from "react-router";

type Merchants = z.infer<typeof merchantsSchema>[]

export default function Brand({ merchants }: { merchants: Merchants }) {
  
  return (
    <div className="px-12 py-8">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold text-center">Top Brand</h2>
        <Link to={'/brands'} className="text-center hover:text-[#41A55C]">
          View All {'>'}
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2">
        {merchants.map((brand, index) => (
          <Link to={`/${brand.name}`}
            key={index}
            className="bg-[#476749] shadow-md rounded-lg flex flex-col items-center"
          >
            <img
              src={brand.imageProfile}
              alt={brand.name}
              className="w-full h-full rounded-lg"
            />

            <p className="text-lg text-white font-semibold h-16 flex justify-center items-center">
              Discount up to {brand.discount}%
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
