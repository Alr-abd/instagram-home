import Image from "next/image";
import suggestions from "../data/suggestions.json";

export default function Suggestion() {
  return (
    <div className="w-full max-w-sm pl-10 mt-8">
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center justify-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={"/avater.jpg"}
              alt={"profile"}
              width={50}
              height={50}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm font-sans">
            <p className="font-semibold text-black leading-none">Alrza-Abdi</p>
          </div>
        </div>
        <button className="text-xs font-semibold font-sans text-blue-500 hover:text-blue-700">
          تغییر حساب
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 mt-6">
        <h3 className="text-sm font-sans text-gray-500 font-semibold">
          پیشنهاد شده برای شما
        </h3>
        <button className="text-xs font-sans font-semibold text-black hover:text-gray-600">
          دیدن همه
        </button>
      </div>
      <ul className="space-y-3">
        {suggestions.map((user) => (
          <li key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={50}
                  height={50}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm font-sans">
                <p className="font-semibold text-black leading-none">
                  {user.username}
                </p>
                <p className="text-gray-400 font-sans text-xs">
                  {user.message}
                </p>
              </div>
            </div>

            <button className="text-xs font-semibold font-sans text-blue-500 hover:text-blue-700">
              دنبال کردن
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
