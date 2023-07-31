import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <div className="flex justify-between items-center">
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

      <div>
        <ul className="list-none flex mr-1 gap-5 ">
          <li>
            <Link className="no-underline" href={"/"}>
              Rewards
            </Link>
          </li>
          <li>
            <Link className="no-underline" href={"/redemptions"}>
              Redemptions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
