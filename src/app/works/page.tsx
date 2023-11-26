import { Metadata } from "next";

export const metadata: Metadata = {
  title: "作ったものたち",
};

export default function Page() {
  return (
    <article className="border border-green-400 h-full p-4 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full border border-blue-500 hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 border-white bg-white/40 rounded-md opacity-0 showTopBottom">
          GiftJob
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 border-white bg-white/40 rounded-md opacity-0 showRightLeft">
          共病日記
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2 border-white bg-white/40 rounded-md opacity-0 showLeftRight">
          GitHub
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 border-white bg-white/40 rounded-md opacity-0 showLeftRight">
          ENAN
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 border-white bg-white/40 rounded-md opacity-0 showBottomTop">
          ヒトカン
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 border-white bg-white/40 rounded-md opacity-0 showBottomTop">
          2022
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 border-white bg-white/10 rounded-md opacity-0 showBottomTop"></div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4 border-white bg-white/10 rounded-md opacity-0 showLeftRight"></div>
        <div className="col-start-4 col-end-5 row-start-3 row-end-4 border-white bg-white/10 rounded-md opacity-0 showRightLeft"></div>
      </div>
    </article>
  );
}
