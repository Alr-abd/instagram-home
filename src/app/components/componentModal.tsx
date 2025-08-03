import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export interface Comment {
  id: number;
  username: string;
  text: string;
}

export interface Post {
  id: number;
  username: string;
  userAvatar: string;
  hasStory: boolean;
  postedAt: string;
  posts: string[];
  likes: number;
  caption: string;
  comments: Comment[];
}

export default function ComponentModal({
  activePost
}: {
  activePost: Post | null;
}) {
  if (!activePost) return null;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const hasMultiple = activePost.posts.length > 1;

  const nextImg = () => {
    setCurrentImage((prev) => prev + 1);
  };
  const prevImg = () => {
    setCurrentImage((prev) => prev - 1);
  };

  console.log("== Modal Rendered ==");
  console.log("activePost:", activePost);
  console.log("currentImage:", currentImage);
  console.log("post at index:", activePost.posts[currentImage]);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white sm:w-8/12 sm:h-7/12 md:w-7/12 md:h-[95%] w-[80vw] h-[60vh] rounded-md md:flex-row ">
          <div className="w-full h-full flex flex-col md:flex-row justify-between">
            <div className="w-full h-4/6 md:h-full relative">
              <Image
                src={activePost.posts[currentImage]}
                alt={`post image ${currentImage}`}
                fill
                className="object-cover"
              />
              {hasMultiple && (
                <>
                  {currentImage < activePost.posts.length - 1 && (
                    <button
                      onClick={nextImg}
                      className="absolute text-xl cursor-pointer font-bold w-[25px] h-[25px] flex items-center justify-center top-1/2 left-2 -translate-y-1/2 bg-gray-300 bg-opacity-50 text-black p-2 rounded-full"
                    >
                      <FaAngleRight className="rotate-180" />
                    </button>
                  )}
                  {currentImage > 0 && (
                    <button
                      onClick={prevImg}
                      className="absolute text-xl cursor-pointer font-bold w-[25px] h-[25px] flex items-center justify-center  top-1/2 right-2 -translate-y-1/2 bg-gray-300 bg-opacity-50 text-black p-2 rounded-full"
                    >
                      <FaAngleRight />
                    </button>
                  )}
                </>
              )}
              {hasMultiple && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {activePost.posts.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentImage ? "bg-white" : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between py-4">
                  <div className="flex justify-between items-center gap-7">
                    <div className="w-9 h-9 flex justify-center items-center rounded-full relative">
                      <Image
                        src={activePost.userAvatar}
                        alt={`post image ${currentImage}`}
                        
                        className="object-fill"
                        width={36}
                        height={36}
                      />
                    </div>
                    <span className="text-sm font-light">
                      {activePost.username}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    <svg
                      aria-label="گزینه‌های بیشتر"
                      className="x1lliihq x1n2onr6 x5n08af"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>گزینه‌های بیشتر</title>
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </span>
                </div>
                <div></div>
              </div>
              <div>
                <div className="py-2 px-2">
                  <div className=" flex flex-col justify-between">
                    <div className="w-full flex justify-between">
                      <div className="flex gap-4 text-gray-800 text-[1.2rem]">
                        {" "}
                        <svg
                          aria-label="Like"
                          className="cursor-pointer hover:scale-110 transition-transform duration-150 x1lliihq x1n2onr6 xyb1xck"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                        <svg
                          aria-label="Comment"
                          className="x1lliihq x1n2onr6 x5n08af cursor-pointer hover:scale-110 transition-transform duration-150"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                        <svg
                          aria-label="Share"
                          className="x1lliihq x1n2onr6 xyb1xck cursor-pointer hover:scale-110 transition-transform duration-150"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Share</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </div>
                      <svg
                        aria-label="Save"
                        className="x1lliihq x1n2onr6 xyb1xck cursor-pointer hover:scale-110 transition-transform duration-150"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Save</title>
                        <polygon
                          fill="none"
                          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="pt-2 text-sm font-bold font-sans text-gray-800">
                      {activePost.likes} پسند
                    </div>
                  </div>
                </div>
                {activePost.comments.length > 0 && (
                  <div className="w-full flex justify-center py-2">
                    <button
                      onClick={() => setShowModal(true)}
                      className="pt-1 text-base text-gray-500 font-sans cursor-pointer"
                      style={{ wordSpacing: "4px" }}
                    >
                      نظرات رو این پست محدود شده اند
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* mobile */}
            <div className="md:hidden py-2 px-2">
              <div className=" flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <div className="flex gap-4 text-gray-800 text-[1.2rem]">
                    {" "}
                    <svg
                      aria-label="Like"
                      className="cursor-pointer hover:scale-110 transition-transform duration-150 x1lliihq x1n2onr6 xyb1xck"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </svg>
                    <svg
                      aria-label="Comment"
                      className="x1lliihq x1n2onr6 x5n08af cursor-pointer hover:scale-110 transition-transform duration-150"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <svg
                      aria-label="Share"
                      className="x1lliihq x1n2onr6 xyb1xck cursor-pointer hover:scale-110 transition-transform duration-150"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Share</title>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                  <svg
                    aria-label="Save"
                    className="x1lliihq x1n2onr6 xyb1xck cursor-pointer hover:scale-110 transition-transform duration-150"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Save</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <div className="pt-2 text-sm font-bold font-sans text-gray-800">
                  {activePost.likes} پسند
                </div>
              </div>
            </div>
            {activePost.comments.length > 0 && (
              <div className="w-full flex justify-center py-2 md:hidden">
                <button
                  onClick={() => setShowModal(true)}
                  className="pt-1 text-base text-gray-500 font-sans cursor-pointer"
                  style={{ wordSpacing: "4px" }}
                >
                  نظرات رو این پست محدود شده اند
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
