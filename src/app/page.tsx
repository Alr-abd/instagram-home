import Image from "next/image";
import Stories from "./components/stories";
import Suggestion from "./components/suggestion";
import Posts from "./components/posts";
import MobileNav from "./components/mobileNav";

export default function Home() {
  return (
    <div className="flex justify-normal lg:justify-center mx-auto xl:ml-0">
      <section className="overflow-x-hidden scrollbar-hide [@media(max-width:1160px)]:w-full w-3/5 [@media(min-width:1160px)]:mr-2 mr-0"  dir="rtl">
        <div className="w-full pl-1 pr-3 lg:px-0 sm:flex justify-center ">
          <Stories />
        </div>
        <div className="lg:mx-1">
          <Posts />
        </div>
      </section>
      <aside className="[@media(max-width:1160px)]:hidden w-[383px] pr-[20px]">
        <Suggestion />
      </aside>
    </div>
  );
}
