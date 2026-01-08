import { Link, useLocation } from "react-router-dom";

export default function AuthTabs({
  className = "",
  leftLabel = "Log in",
  rightLabel = "Sign up",
  leftTo = "/login",
  rightTo = "/sign",
  ariaLabel = "Tabs",
}) {
  const { pathname } = useLocation();

  // Determine which side is active based on current path
  const isLeftActive =
    pathname === leftTo || pathname.startsWith(leftTo + "/");

  return (
    <div className={`mt-4 ${className}`}>
      {/* Beige track */}
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="
          relative mx-auto select-none rounded-full bg-[#EBDBC4]
          w-full h-[clamp(58px,6.8vw,66px)]
        "
      >
        {/* WHITE sliding pill */}
        <div
          aria-hidden="true"
          className={`
            absolute z-10
            top-[6px]
            h-[calc(100%-12px)]
            w-[calc(50%-12px)]
            rounded-full bg-[#F7F7F7]
            shadow-[0_6px_0_rgba(0,0,0,0.15)]
            transition-all duration-300 ease-out
            ${isLeftActive ? "left-[6px]" : "left-[calc(50%+6px)]"}
          `}
        />

        {/* Tabs */}
        <div className="relative z-20 grid h-full grid-cols-2 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.5px]">
          <Link
            to={leftTo}
            role="tab"
            aria-selected={isLeftActive}
            tabIndex={isLeftActive ? 0 : -1}
            className="flex items-center justify-center text-[#065F2B] no-underline"
          >
            {leftLabel}
          </Link>

          <Link
            to={rightTo}
            role="tab"
            aria-selected={!isLeftActive}
            tabIndex={!isLeftActive ? 0 : -1}
            className="flex items-center justify-center text-[#065F2B] no-underline"
          >
            {rightLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}