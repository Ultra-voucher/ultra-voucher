const Footer = () => {
  return (
    <footer className="bg-[#41A55C] font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-6xl font-bold tracking-tight text-white ">
              Ultra Voucher
            </h1>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Most Popular Category
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Customer Service
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
              <p className="text-white hover:text-gray-600">
                Retail & E-Commerce
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
