"use client";

import { useRouter } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4 relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => router.push("/")}
          className="group flex items-center text-[#f8e9a1] hover:text-white transition-all duration-200"
        >
          <FaArrowLeft className="mr-2 text-[#f8e9a1] group-hover:-translate-x-1 transition-transform duration-200 text-lg" />
          <span className="text-sm font-light tracking-wide">Back</span>
        </button>
      </div>

      <h1 className="text-3xl mb-10 text-[#f8e9a1] font-light text-center">
        Contact Us
      </h1>

      <div className="flex flex-col gap-6 text-lg w-full max-w-md">
        {/* Phone */}
        <a
          href="tel:+19735944748"
          className="flex items-center gap-3 text-[#f8e9a1] hover:text-white transition-colors"
        >
          <FaPhoneAlt /> (973) 851-2548
        </a>

        {/* Email */}
        <a
          href="mailto:yitzimani@gmail.com"
          className="flex items-center gap-3 text-[#f8e9a1] hover:text-white transition-colors"
        >
          <FaEnvelope /> yitzimani@gmail.com
        </a>

        {/* Address */}
        <div className="flex items-start gap-3 text-[#f8e9a1]">
          <FaMapMarkerAlt className="mt-1" />
          <div>
            32 Lorrie Lane<br />
            Clifton, NJ 07012
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-6 border border-[#f8e9a1]">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.195863759276!2d-74.14641782433254!3d40.86901317137033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3020b6630be5f%3A0x2c953b2f4f9a1e30!2s32%20Lorrie%20Ln%2C%20Clifton%2C%20NJ%2007012!5e0!3m2!1sen!2sus!4v1717876677402!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
