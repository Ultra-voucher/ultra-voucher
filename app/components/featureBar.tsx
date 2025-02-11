import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input';

export default function FeatureBar() {
  return (
    <section className='flex flex-col sticky top-0 z-50'>
    <div className="px-12 w-full bg-[#41A55C] py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" width="50" height="50" />
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
    <div className="px-12 w-full bg-white shadow-sm py-2"> 
      <div className="container flex items-center gap-8">
        <img className="w-20" src="/ultra.png" alt="Logo" />
        <Input 
          placeholder='Search on ultra voucher...'
          className='bg-gray-100 shadow-sm border-none w-[66%] focus-visible:ring-[#41A55C]'
        />
        <div className="flex grow items-center justify-end gap-16 space-x-4">
          <button className="relative p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 fill-[#41A55C]">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              3
            </span>
          </button>
          <button className="p-2">
            <Avatar className="border border-[#41A55C]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </div>     
    </section>

  );
}
