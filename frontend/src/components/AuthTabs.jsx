import { Link, useLocation } from "react-router-dom";

export default function AuthTabs({ className = "" }) {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("/login");

  return (
    <div className={`mt-4 ${className}`}>
      {/* Beige track */}
      <div
        role="tablist"
        aria-label="Authentication tabs"
        className="
          relative mx-auto select-none rounded-full bg-[#EBDBC4]
          w-[min(92%,640px)] h-[clamp(58px,6.8vw,66px)]
        "
      >
        {/* WHITE sliding pill with breathing space */}
        <div
          aria-hidden="true"
          className={`
            absolute z-10 /* <-- keeps pill above beige */
            top-[6px]
            bg-[#F7F7F7]
            h-[calc(100%-12px)]
            w-[calc(50%-12px)]
            rounded-full bg-white
            shadow-[0_6px_0_rgba(0,0,0,0.15)]
            transition-transform duration-300 ease-out
            ${isLogin ? "left-[6px]" : "left-[calc(50%+6px)]"}
          `}
        />

        {/* Tabs */}
        <div className="relative z-20 grid h-full grid-cols-2 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.5px]">
          <Link
            to="/login"
            role="tab"
            aria-selected={isLogin}
            tabIndex={isLogin ? 0 : -1}
            className="flex items-center justify-center text-[#065F2B] no-underline"
          >
            Log in
          </Link>
          <Link
            to="/sign"
            role="tab"
            aria-selected={!isLogin}
            tabIndex={!isLogin ? 0 : -1}
            className="flex items-center justify-center text-[#065F2B] no-underline transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
