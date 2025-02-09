import { useEffect, useState } from 'react';
import { getAllMerchants } from '~/request/merchants';
import { merchantsSchema } from '~/schema/merchants';

export default function Brand() {
  // Type the brands state as an array of merchantsSchema
  const [brands, setBrands] = useState<merchantsSchema[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const fetchedBrands = await getAllMerchants();
        setBrands(fetchedBrands);
      } catch (err) {
        setError('Failed to load brands');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold text-center">Top Brand</h2>
        <h2 className="text-xl  text-center">
          View All <span className="ml-2 text-xl">{'>'}</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-[#476749] w-72 shadow-md rounded-lg flex flex-col items-center"
          >
            <img
              src={brand.imageProfile}
              alt={brand.name}
              className="w-full h-full rounded-lg"
            />

            <p className="text-lg text-white font-semibold h-16 flex justify-center items-center">
              Discount up to {brand.discount}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
