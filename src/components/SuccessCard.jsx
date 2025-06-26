import { asset } from '@/assets/assets';

export default function SuccessCard() {
  return (
    <section className="mb-16 mt-4 p-4">
      <div className="text-center w-3/4 mx-auto space-y-1.5">
        <h1 className="text-3xl font-bold">We Provide Best Law Services</h1>
        <p className="text-[#0F0F0FCC]">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4 mt-10">
        <div className="bg-[#0F0F0F0D] flex items-center justify-center flex-col p-5 rounded-3xl space-y-2 ">
          <img src={asset.success_man} alt="" className="w-12" />
          <h1 className="font-bold text-3xl">100+</h1>
          <p className="text-[#0F0F0F99]">Total Lawyer</p>
        </div>
        <div className="bg-[#0F0F0F0D] flex items-center justify-center flex-col p-5 rounded-3xl space-y-2">
          <img src={asset.success_patients} alt="" className="w-12" />
          <h1 className="font-bold text-3xl">870+</h1>
          <p className="text-[#0F0F0F99]">Total Lawyer</p>
        </div>
        <div className="bg-[#0F0F0F0D] flex items-center justify-center flex-col p-5 rounded-3xl space-y-2">
          <img src={asset.success_reviews} alt="" className="w-12" />
          <h1 className="font-bold text-3xl">345+</h1>
          <p className="text-[#0F0F0F99]">Total Lawyer</p>
        </div>
        <div className="bg-[#0F0F0F0D] flex items-center justify-center flex-col p-5 rounded-3xl space-y-2">
          <img src={asset.success_staffs} alt="" className="w-12" />
          <h1 className="font-bold text-3xl">215+</h1>
          <p className="text-[#0F0F0F99]">Total Lawyer</p>
        </div>
      </div>
    </section>
  );
}
