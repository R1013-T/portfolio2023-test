export default function Home() {
  return (
    <article className="border border-green-400 h-full p-4 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full border border-blue-500 hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">.div1</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showTopBottom">.div2</div>
        <div className="col-span-1 row-span-2 border border-white bg-white/40 rounded-md opacity-0 showRightLeft">.div3</div>
        <div className="col-span-1 row-span-2 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">.div4</div>
        <div className="col-span-2 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showBottomTop">.div5</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showTopBottom">.div6</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">.div7</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showRightLeft">.div8</div>
      </div>
    </article>
  );
}
