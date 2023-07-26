import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="w-[220px] h-[1162px] fixed flex flex-col justify-start items-center p-4">
      <div className="mt-[60px]">
        <h2 className="text-2xl font-bold mb-4">KayaAdmin</h2>
        <ul className="mt-10 flex flex-col gap-y-2 no">
          <Link
            href={"/"}
            className="text-black no-underline cursor-not-allowed"
          >
            Dashboard
          </Link>
          <Link
            href={"/"}
            className="text-black no-underline cursor-not-allowed"
          >
            User management
          </Link>
          <Link
            href={"/"}
            className="text-black no-underline cursor-not-allowed"
          >
            Playground
          </Link>
          <Link
            href={"/"}
            className="text-black no-underline cursor-not-allowed"
          >
            Kaya pass
          </Link>
          <Link
            href={"/"}
            className="text-[#6b66fa] font-bold no-underline hover:scale-105"
          >
            Rewards
          </Link>
        </ul>
      </div>
    </aside>
  );
}
