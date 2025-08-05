import { loading } from "../assets";

const Generating = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-4 h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base text-white backdrop-blur-sm ${className}`}
      role="status"
      aria-live="polite"
    >
      <img src={loading} alt="Loading..." className="w-5 h-5 animate-spin" />
      <span className="hidden sm:inline">Подбираем лучшее для вас...</span>
      <span className="inline sm:hidden">Ищем лучшее...</span>
    </div>
  );
};

export default Generating;
