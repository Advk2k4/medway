import { Link, useLocation } from "react-router-dom";

/**
 * Pill-style toggle that highlights the active route (/login or /sign)
 * Works responsively without fixed widths.
 */
export default function AuthTabs() {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("/login");

  return (
    <div className="w-full max-w-md">
      <div className="relative flex items-center rounded-full bg-[#EBDBC4] p-1">
        {/* Sliding pill (no hardcoded width; relies on flex 1/2) */}
        <div
          className={`absolute inset-y-1 left-1 right-1 rounded-full bg-[#F7F7F7] transition-transform duration-200 ease-out
                      ${isLogin ? "translate-x-0" : "translate-x-full"} 
                      md:translate-x-0 md:${isLogin ? "translate-x-0" : "[transform:translateX(calc(50%))]"}`}
          style={{ width: "calc(50% - 0.25rem)" }}
          aria-hidden
        />
        <Link
          to="/login"
          className={`z-10 flex-1 py-2 text-center text-xl font-extrabold 
                      ${isLogin ? "text-[#065F2B]" : "text-[#065F2B]/70"}`}
        >
          Log in
        </Link>
        <Link
          to="/sign"
          className={`z-10 flex-1 py-2 text-center text-xl font-extrabold 
                      ${!isLogin ? "text-[#065F2B]" : "text-[#065F2B]/70"}`}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
