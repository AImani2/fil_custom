"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AppointmentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: null as Date | null,
    time: null as Date | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getAvailableTimes = (date: Date | null): Date[] => {
    if (!date) return [];
    const day = date.getDay();

    const createTime = (hour: number, minute: number) => {
      const d = new Date(date);
      d.setHours(hour, minute, 0, 0);
      return d;
    };

    switch (day) {
      case 5:
        return [13, 14, 15, 16].map((h) => createTime(h, 0));
      case 6:
      case 0:
        return [createTime(22, 0)];
      case 1:
      case 2:
      case 3:
      case 4:
        return [createTime(22, 0), createTime(22, 30)];
      default:
        return [];
    }
  };

  // Construct datetime string
  const dateTimeString =
    form.date && form.time
      ? new Date(
          form.date.getFullYear(),
          form.date.getMonth(),
          form.date.getDate(),
          form.time.getHours(),
          form.time.getMinutes()
        ).toString()
      : "";

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-4 relative">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => router.push("/")}
          className="group flex items-center text-[#f8e9a1] hover:text-white transition-all duration-200"
        >
          <FaArrowLeft className="mr-2 text-[#f8e9a1] group-hover:-translate-x-1 transition-transform duration-200 text-lg" />
          <span className="text-sm font-light tracking-wide">Back</span>
        </button>
      </div>

      <form
        action="https://formspree.io/f/myzjkwqr"
        method="POST"
        className="w-full max-w-md bg-[#1a1a1a] p-8 shadow-md border border-[#f8e9a1] rounded-none"
      >
        <h1 className="text-2xl mb-6 text-[#f8e9a1] font-light text-center">
          Book a Custom Suit Appointment
        </h1>

        {/* Hidden datetime field */}
        <input type="hidden" name="dateTime" value={dateTimeString} />

        {/* Name */}
        <label className="block mb-4">
          <span className="text-[#f8e9a1] text-sm block mb-1">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-black border border-[#f8e9a1] text-white focus:outline-none rounded-none"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-[#f8e9a1] text-sm block mb-1">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-black border border-[#f8e9a1] text-white focus:outline-none rounded-none"
          />
        </label>

        {/* Phone */}
        <label className="block mb-4">
          <span className="text-[#f8e9a1] text-sm block mb-1">Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-black border border-[#f8e9a1] text-white focus:outline-none rounded-none"
          />
        </label>

        {/* Date */}
        <label className="block mb-4">
          <span className="text-[#f8e9a1] text-sm block mb-1">Preferred Date</span>
          <DatePicker
            selected={form.date}
            onChange={(date) => setForm((prev) => ({ ...prev, date, time: null }))}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            className="w-full px-3 py-2 bg-black border border-[#f8e9a1] text-white focus:outline-none rounded-none"
            calendarClassName="!bg-black !text-white !border-[#f8e9a1]"
            popperClassName="z-50"
            dayClassName={(date) =>
              date < new Date()
                ? "!text-gray-500"
                : "!text-white hover:!bg-[#f8e9a1] hover:!text-black"
            }
          />
        </label>

        {/* Time */}
        {form.date && (
          <label className="block mb-6">
            <span className="text-[#f8e9a1] text-sm block mb-1">Preferred Time</span>
            <DatePicker
              selected={form.time}
              onChange={(time) => setForm((prev) => ({ ...prev, time }))}
              showTimeSelect
              showTimeSelectOnly
              includeTimes={getAvailableTimes(form.date)}
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select a time"
              className="w-full px-3 py-2 bg-black border border-[#f8e9a1] text-white focus:outline-none rounded-none"
              calendarClassName="!bg-black !text-white !border-[#f8e9a1]"
              popperClassName="z-50"
            />
          </label>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 text-black bg-[#f8e9a1] hover:bg-white transition-all rounded-none"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
