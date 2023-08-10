import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5 ml-5">
        <Link href={"/"}>
          <Image src="/favicon.svg" width={30} height={50} alt="SUPA Logo" />
        </Link>
        <h1 className="text-2xl font-bold">Rewards & Badges</h1>
        <div>
          <Link href={"/admin/new"}>
            <button className="border-solid border-2 border-black px-2 py-1 cursor-pointer">
              {" "}
              + Create New
            </button>
          </Link>
        </div>
        <Link href={"/"}>Back to Home Page</Link>
      </div>

      <div>
        <ul className="list-none flex mr-1 gap-5 ">
          <li>
            <Link
              className="no-underline font-bold"
              href={"/admin/redemptions"}
            >
              Redemptions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
