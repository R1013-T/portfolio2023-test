export default function Home() {
  return (
    <article className="border border-green-400 h-full p-4 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full border border-blue-500 hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">プロフィール</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showTopBottom">GitHub</div>
        <div className="col-span-1 row-span-2 border border-white bg-white/40 rounded-md opacity-0 showRightLeft">画像</div>
        <div className="col-span-1 row-span-2 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">スロット</div>
        <div className="col-span-2 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showBottomTop">スキル</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showTopBottom">X</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showLeftRight">東京</div>
        <div className="col-span-1 row-span-1 border border-white bg-white/40 rounded-md opacity-0 showRightLeft">メール</div>
      </div>
    </article>
  );
}
