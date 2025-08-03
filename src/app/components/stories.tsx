"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import stories from "../data/stories.json";
import { FiChevronRight } from "react-icons/fi";

export default function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const raw = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pos = Math.min(Math.max(raw, 0), maxScroll);
    const rounded = Math.round(pos) - 1;
    console.log({ pos, maxScroll, rounded });

    setCanScrollLeft(rounded > 0);
    setCanScrollRight(rounded < maxScroll - 2);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollRight = () => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.offsetWidth;
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };
  const scrollLeft = () => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.offsetWidth;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };
  return (
    <div className="relative py-[10px]">
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute w-6 h-6 right-4 top-[45%] -translate-y-1/2 bg-white rounded-full shadow-md z-10 flex items-center justify-center hover:bg-gray-100"
        >
          <FiChevronRight size={19} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute left-4 w-6 h-6 top-[45%] -translate-y-1/2 bg-white rounded-full shadow-md z-10 flex items-center justify-center hover:bg-gray-100"
        >
          <FiChevronRight size={19} className="rotate-180" />
        </button>
      )}

      <div
        ref={scrollRef}
        dir="rtl"
        className="flex gap-x-4 py-[10px] overflow-x-auto mx-auto max-w-[600px] scrollbar-hide "
      >
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="w-[85px] h-[85px] border-4 border-pink-500 rounded-full overflow-hidden p-[3px]">
              <Image
                className="rounded-full cursor-pointer"
                src={story.image}
                alt={story.username}
                width={85}
                height={85}
              />
            </div>
            <span className="text-sm mt-1 font-sans">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
