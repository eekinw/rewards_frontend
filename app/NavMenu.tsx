import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="flex justify-between py-4 px-2">
      <div className="flex gap-5">
        <Link href={"/"}>
          <Image src="/favicon.png" width={40} height={60} alt="SUPA Logo" />
        </Link>
        <h1 className="text-2xl font-bold">Rewards & Badges</h1>
      </div>
      <ul className="list-none flex mr-1 gap-5 ">
        <li className="">
          <Link href={"/rewards"}>Rewards</Link>
        </li>
        <li>
          <Link href={"/redemptions"}>Redemptions</Link>
        </li>
      </ul>
    </nav>
  );
}
