import Image from "next/image";
import Stories from "./components/stories";
import Suggestion from "./components/suggestion";
import Posts from "./components/posts"

export default function Home() {
  return (
    <div className="flex justify-center mx-auto ml-20 xl:ml-0">
      <section dir="rtl">
        <Stories />
        <Posts />
      </section>
      <aside className="min-w-[383px] pr-16">
        <Suggestion />
      </aside>
    </div>
  );
}
