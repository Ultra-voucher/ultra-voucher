import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function FeatureBar() {
  return (
    <div className="w-full bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src="/ultra.png" alt="Logo" />
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-gray-600"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <FaShoppingCart className="text-gray-700 text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              3
            </span>
          </button>
          <button className="p-2">
            <FaUser className="text-gray-700 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
