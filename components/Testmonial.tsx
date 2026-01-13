'use client';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { TESTIMONIALS } from '../lib/testimonials-data';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="relative w-full">
      <h2 className="ty-h2 mb-4">Testimonials</h2>
      {/* Card */}
      <div className="flexCol gap-y-5 h-[20rem]  md:flexRow border border-2 rounded-sm p-6 ">
        <Quote />
        <p className="ty-body1 italic  line-clamp-7 overflow-y-auto ">
          "{testimonial.quote}"
        </p>

        <div className="ty-body1 font-semibold leading-none">
          <p>{testimonial.author}</p>
          <p className="ty-body2 opacity-70">{testimonial.role}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className=" hover:opacity-60"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className=" hover:opacity-60"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
