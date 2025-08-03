"use client";

export default function Header() {
  return (
    <header className="flex items-center [@media(max-width:500px)]:justify-center justify-between w-full px-4 py-3 [@media(min-width:790px)]:hidden">
      <div className="flex items-start justify-start [@media(max-width:500px)]:hidden">
        <span className="text-[26px] font-normal font-[Lobster] text-[#262626]">
          Instagram
        </span>
      </div>
      <div className="flex justify-end items-center h-full gap-5">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 w-[268px] h-9 px-3 py-1.5 rounded-md text-sm focus:outline-none"
          />
          <div className="absolute flex items-center gap-4 top-[15%] right-[6%]">
            <span className="text-gray-400 cursor-pointer">
              <svg
                aria-label="جستجو"
                className="x1lliihq x1n2onr6 x1cp0k07"
                fill="currentColor"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <title>جستجو</title>
                <path
                  d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            </span>
            <span className="font-light text-[17px] cursor-text text-gray-400">جستجو</span>
          </div>
        </div>

        <span className="cursor-pointer">
          <svg
            aria-label="اعلان‌ها"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>اعلان‌ها</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
        </span>
      </div>
    </header>
  );
}
