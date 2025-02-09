export default function UpperAppBar() {
  return (
    <div className="w-full bg-[#41A55C] py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" width="60" height="60" />
          <div>
            <h1 className="text-lg font-bold text-white">
              Get more benefit discount up to 85%
            </h1>
            <p className="text-sm text-white">Download Ultra Voucher App</p>
          </div>
        </div>
        <button className="bg-white text-[#41A55C] font-bold rounded-full px-6 py-2">
          Open
        </button>
      </div>
    </div>
  );
}
