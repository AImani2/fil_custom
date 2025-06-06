import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center pb-40">
      {/* Logo */}
      <div className="flex justify-center items-center w-full -mt-12 relative fade-logo">
  <div className="shine-wrapper relative w-[750px] h-auto">
    <Image
      src="/logo.jpeg"
      alt="FiL Custom Logo"
      width={750}
      height={750}
      className="logo-image object-contain relative z-10"
    />
    {/* Shine overlay clipped to image only */}
    <div className="shine-effect absolute top-0 left-0 w-full h-full pointer-events-none z-20" />
  </div>
</div>


      {/* Divider Line */}
      <div className="w-4/5 h-px bg-[#f8e9a1] opacity-40 -mt-6 mb-3 fade-line"></div>

      {/* Buttons */}
      <section className="mt-2 fade-buttons">
        <div className="flex justify-center gap-8">
          <Link
            href="/contact"
            className="flex items-center justify-center text-[#f8e9a1] border border-[#f8e9a1] p-4 rounded-none hover:bg-[#f8e9a1] hover:text-black transition-all duration-300 ease-in-out text-2xl"
          >
            <FaPhoneAlt />
          </Link>

          <Link
            href="/appointment"
            className="flex items-center justify-center text-[#f8e9a1] border border-[#f8e9a1] p-4 rounded-none hover:bg-[#f8e9a1] hover:text-black transition-all duration-300 ease-in-out text-2xl"
          >
            <FaCalendarAlt />
          </Link>
        </div>
      </section>
    </main>
  );
}
