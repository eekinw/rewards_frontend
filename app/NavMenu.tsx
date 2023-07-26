import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="fixed top-0 left-0 right-0 ml-[220px] flex justify-between py-6 px-2 h-[80px]">
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <Image src="/favicon.png" width={40} height={60} alt="SUPA Logo" />
        </Link>
        <h1 className="text-2xl font-bold">Rewards & Badges</h1>
        <div>
          <button className=" border-solid border-2 border-black px-4 py-2 cursor-pointer">
            + Create New
          </button>
        </div>
      </div>
      <ul className="list-none flex mr-1 gap-5 ">
        <li>
          <Link className="no-underline" href={"/rewards"}>
            Rewards
          </Link>
        </li>
        <li>
          <Link className="no-underline" href={"/redemptions"}>
            Redemptions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
