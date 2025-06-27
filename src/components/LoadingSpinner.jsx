export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 gap-2 flex-row">
      <div className="w-4 h-4 rounded-full bg-[#0EA106] animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#0EA106] animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#0EA106] animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
}
