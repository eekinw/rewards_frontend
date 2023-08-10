import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">KayaAdmin</h2>
      <ul className="mt-10 flex flex-col gap-y-2 no">
        <Link href={"/"} className="text-black no-underline cursor-not-allowed">
          Dashboard
        </Link>

        <Link
          href={`/agent/profile`}
          className="text-[#6b66fa] font-bold no-underline hover:scale-105"
        >
          User Management
        </Link>

        <Link href={"/"} className="text-black no-underline cursor-not-allowed">
          Playground
        </Link>
        <Link
          href={"/"}
          className="text-[#6b66fa] font-bold no-underline hover:scale-105"
        >
          Admin Rewards
        </Link>
        <Link
          href={`/agent/rewards`}
          className="text-[#6b66fa] font-bold no-underline hover:scale-105"
        >
          Agent Rewards
        </Link>
      </ul>
    </div>
  );
}
