"use client";

import { useEffect, useState, FormEvent } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import {
  addDays,
  eachDayOfInterval,
  isBefore,
  startOfDay,
  format,
} from "date-fns";
import "react-day-picker/style.css";

const PRICE_PER_NIGHT = 180;

interface BlockedRange {
  start: string;
  end: string;
  summary: string;
}

export default function AvailabilityCalendar() {
  const [blockedDays, setBlockedDays] = useState<Date[]>([]);
  const [range, setRange] = useState<DateRange | undefined>();
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [hasDog, setHasDog] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => res.json())
      .then((data: { blockedDates: BlockedRange[] }) => {
        const days: Date[] = [];
        for (const block of data.blockedDates) {
          const start = new Date(block.start + "T00:00:00");
          const end = new Date(block.end + "T00:00:00");
          if (isBefore(start, end)) {
            const interval = eachDayOfInterval({
              start,
              end: addDays(end, -1),
            });
            days.push(...interval);
          }
        }
        setBlockedDays(days);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const today = startOfDay(new Date());

  const isDisabled = (day: Date) => {
    if (isBefore(day, today)) return true;
    return blockedDays.some(
      (blocked) => blocked.getTime() === startOfDay(day).getTime()
    );
  };

  const nights =
    range?.from && range?.to
      ? Math.round(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0;
  const totalPrice = nights * PRICE_PER_NIGHT;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!range?.from || !range?.to || !name || !email) return;

    setFormState("sending");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          checkIn: format(range.from, "d MMM yyyy"),
          checkOut: format(range.to, "d MMM yyyy"),
          nights,
          total: totalPrice,
          guests,
          hasDog,
          message,
        }),
      });

      if (res.ok) {
        setFormState("sent");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50" id="book">
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 rounded-full border border-amber-600/20">
            <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Book Direct</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Book Your Stay
          </h2>
          <div className="flex items-baseline justify-center gap-3 mb-3">
            <span className="text-5xl font-bold text-stone-900">$180</span>
            <span className="text-gray-600 text-xl">NZD / night</span>
          </div>
          <p className="text-gray-600 text-lg">
            Select your dates, fill in your details, and we'll get back to you
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Calendar */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-6 md:p-8">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <div className="w-8 h-8 border-3 border-stone-300 border-t-amber-600 rounded-full animate-spin" />
                  <p className="text-gray-500 text-sm">Loading availability...</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-center calendar-wrapper">
                    <DayPicker
                      mode="range"
                      selected={range}
                      onSelect={setRange}
                      disabled={isDisabled}
                      numberOfMonths={2}
                      showOutsideDays
                      fixedWeeks
                      classNames={{
                        root: "rdp-custom",
                        months: "flex flex-col md:flex-row gap-8",
                        month_caption: "text-center font-semibold text-stone-800 text-lg mb-4",
                        weekdays: "text-xs font-medium text-gray-500 uppercase",
                        weekday: "w-10 h-8",
                        week: "",
                        day: "w-10 h-10 text-center text-sm relative",
                        day_button: "w-10 h-10 rounded-full hover:bg-amber-50 transition-colors cursor-pointer flex items-center justify-center relative z-10",
                        selected: "!bg-amber-600 !text-white !rounded-full font-semibold",
                        range_start: "!bg-amber-600 !text-white !rounded-full font-semibold range-endpoint range-start-day",
                        range_end: "!bg-amber-600 !text-white !rounded-full font-semibold range-endpoint range-end-day",
                        range_middle: "range-middle-day",
                        today: "font-bold text-amber-700 ring-1 ring-amber-300 rounded-full",
                        disabled: "!text-gray-300 !cursor-not-allowed line-through",
                        chevron: "fill-stone-600",
                      }}
                    />
                  </div>

                  {/* Selected dates */}
                  {range?.from && (
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <div className="text-center">
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Check-in</p>
                          <p className="text-lg font-semibold text-stone-900">
                            {format(range.from, "EEE, d MMM yyyy")}
                          </p>
                        </div>
                        {range.to && (
                          <>
                            <svg className="w-5 h-5 text-gray-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="text-center">
                              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Check-out</p>
                              <p className="text-lg font-semibold text-stone-900">
                                {format(range.to, "EEE, d MMM yyyy")}
                              </p>
                            </div>
                            <div className="px-3 py-1.5 bg-amber-50 rounded-lg">
                              <p className="text-sm font-medium text-amber-800">{nights} night{nights !== 1 ? "s" : ""}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-600" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-300" />
                <span>Unavailable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white border border-gray-300" />
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Right: Pricing + Booking Form */}
          <div className="lg:w-96 shrink-0">
            <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-6 sticky top-8">

              {formState === "sent" ? (
                /* Success state */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Request Sent!</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Thanks {name}! Viktoria will get back to you shortly to confirm your stay.
                  </p>
                  <p className="text-gray-500 text-xs">
                    A copy of your request has been sent. Please check your email.
                  </p>
                </div>
              ) : (
                <>
                  {/* Price breakdown */}
                  {range?.from && range?.to && nights > 0 ? (
                    <div className="mb-6">
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-gray-700">${PRICE_PER_NIGHT} x {nights} night{nights !== 1 ? "s" : ""}</span>
                        <span className="font-semibold text-stone-900">${totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between text-gray-500">
                          <span>Cleaning fee</span>
                          <span className="text-green-600 font-medium">$0</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>Service fee</span>
                          <span className="text-green-600 font-medium">$0</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>Pet fee</span>
                          <span className="text-green-600 font-medium">$0</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-baseline">
                        <span className="text-lg font-bold text-stone-900">Total</span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-stone-900">${totalPrice.toLocaleString()}</span>
                          <p className="text-xs text-gray-500">NZD</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6 text-center py-3">
                      <p className="text-3xl font-bold text-stone-900">$180</p>
                      <p className="text-gray-500 text-sm">NZD per night</p>
                      <p className="text-gray-400 text-xs mt-2">Select dates to see your total</p>
                    </div>
                  )}

                  {/* No fees callout */}
                  <div className="bg-green-50 rounded-xl p-4 mb-6">
                    <p className="font-semibold text-green-800 text-sm mb-2">No hidden fees</p>
                    <ul className="space-y-1 text-xs text-green-700">
                      {["No booking fees", "No cleaning fees", "No service fees", "No pet fees", "No Airbnb markup"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking form */}
                  {range?.from && range?.to && nights > 0 ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="border-t border-gray-100 pt-5 mb-1">
                        <h3 className="font-semibold text-stone-900 mb-4">Request to Book</h3>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="you@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="+64..."
                        />
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                            Guests
                          </label>
                          <select
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Bringing a dog?</label>
                          <button
                            type="button"
                            onClick={() => setHasDog(!hasDog)}
                            className={`w-full px-3 py-2.5 border rounded-lg text-sm transition-colors ${
                              hasDog
                                ? "border-amber-500 bg-amber-50 text-amber-800 font-medium"
                                : "border-gray-300 text-gray-500"
                            }`}
                          >
                            {hasDog ? "Yes!" : "No"}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                          placeholder="Any questions or special requests..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "sending"}
                        className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-amber-600/30 hover:shadow-xl hover:scale-105"
                      >
                        {formState === "sending" ? "Sending..." : `Request to Book — $${totalPrice.toLocaleString()}`}
                      </button>

                      {formState === "error" && (
                        <p className="text-red-600 text-sm text-center">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <p className="text-xs text-gray-400 text-center">
                        This is a request — you won't be charged yet. Viktoria will confirm your booking directly.
                      </p>
                    </form>
                  ) : (
                    <p className="text-center text-sm text-gray-400 pt-2">
                      Select your dates to request a booking
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
