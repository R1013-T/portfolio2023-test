import { Metadata } from "next";

export const metadata: Metadata = {
  title: "作ったものたち",
};

export default function Page() {
  return (
    <article className="border border-green-400 h-full p-4 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full border border-blue-500 hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 border-white bg-white/40 rounded-md opacity-0 showTopBottom">
          .div1
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 border-white bg-white/40 rounded-md opacity-0 showRightLeft">
          .div2
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2 border-white bg-white/40 rounded-md opacity-0 showLeftRight">
          .div3
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 border-white bg-white/40 rounded-md opacity-0 showLeftRight">
          .div4
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 border-white bg-white/40 rounded-md opacity-0 showBottomTop">
          .div5
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 border-white bg-white/40 rounded-md opacity-0 showBottomTop">
          .div6
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 border-white bg-white/40 rounded-md opacity-0 showBottomTop">
          .div7
        </div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4 border-white bg-white/40 rounded-md opacity-0 showLeftRight">
          .div8
        </div>
        <div className="col-start-4 col-end-5 row-start-3 row-end-4 border-white bg-white/40 rounded-md opacity-0 showRightLeft">
          .div9
        </div>
      </div>
    </article>
  );
}
