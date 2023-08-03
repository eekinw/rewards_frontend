import Link from "next/link";
import { type } from "os";

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

async function getAllRedemptions() {
  const res = await fetch("http://localhost:3100/admin/redemptions", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RedemptionsPage() {
  const redemptions = await getAllRedemptions();
  console.log("Here it is:", redemptions);
  console.log(typeof redemptions);

  return (
    <main>
      <div className="flex mb-6">
        <div className="grid gap-4 grid-cols-6 justify-around text-center w-full">
          <h3 className="font-bold">Redemption ID</h3>
          <h3 className="font-bold">User Email</h3>
          <h3 className="font-bold">User Status</h3>
          <h3 className="font-bold">Reward ID</h3>
          <h3 className="font-bold">Date of Redemption</h3>
        </div>
      </div>

      {redemptions.map((redemption: Redemptions) => (
        <div
          key={redemption.id}
          className="grid gap-4 grid-cols-6 p-4 border shadow-md text-center"
        >
          <p>{redemption.id ? redemption.id : "No redemption ID found"}</p>
          <p>
            {redemption.user.email ? redemption.user.email : "Email not found"}
          </p>
          <p>{redemption.user.user_status}</p>
          <p>{redemption.reward_id}</p>
          <p>{new Date(redemption.redemption_date).toString()}</p>
          <Link
            href={`/admin/rewards/${redemption.reward_id}/redemptions`}
            className="link-with-space"
          >
            More
          </Link>
        </div>
      ))}
    </main>
  );
}
