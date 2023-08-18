import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/solid";

interface User {
  id: number;
  user_status: string;
  email: string;
}

interface Redemptions {
  id: number;
  user: User;
  reward_id: number;
  redemption_date: Date;
  redemption_expiry: Date;
}

interface Props {
  params: { id: number };
}

export default async function fetchRedemptions({ params }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_KAYAREWARDS}/admin/rewards/${params.id}/redemptions`
  );

  const data = await res.json();
  console.log(typeof data, data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex gap-x-3">
        <h1 className="font-bold mb-10">
          Redemptions for Reward{" "}
          <span className=" text-[#6b66fa]">{params.id}</span>{" "}
        </h1>
      </div>

      <div className="flex justify-around text-center w-full mb-6">
        <h3 className="font-bold">Redemption ID</h3>
        <h3 className="font-bold">Claimed</h3>
        <h3 className="font-bold">Date claimed</h3>
        <h3 className="font-bold">Delete Redemption</h3>
      </div>
      <div>
        {data.map((redemption: Redemptions) => (
          <div
            key={redemption.id}
            className="grid grid-cols-4 justify-around gap-y-2 p-2 border shadow-md text-center"
          >
            <p>{redemption.id}</p>
            <p>{redemption.user.email}</p>
            <p> {new Date(redemption.redemption_date).toString()}</p>
            <Link href={"/"}>
              <button className="h-6 w-6 text-[#2B2B2B]">
                <TrashIcon />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
