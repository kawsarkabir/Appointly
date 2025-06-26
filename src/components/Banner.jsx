import { asset } from '@/assets/assets';

// components/Banner.tsx
export default function Banner() {
  return (
    <div className="relative rounded-[24px] overflow-hidden h-[400px] md:h-[500px] w-full">
      {/* Background Image */}
      <img
        src={asset.banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Appointly
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Book your appointment with top lawyers easily and securely.
        </p>
      </div>
    </div>
  );
}
